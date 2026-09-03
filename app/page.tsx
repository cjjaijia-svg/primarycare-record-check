"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Item = { id: string; group: string; label: string; hint: string; priority?: boolean };
const items: Item[] = [
  { id: "time", group: "接诊与评估", label: "记录发病、到院及首次评估时间", hint: "记录已知时间；不确定时注明估计或信息来源，不推测精确时间。", priority: true },
  { id: "trigger", group: "接诊与评估", label: "记录可疑诱因及接触经过", hint: "如实记录药物、食物、昆虫叮咬或其他暴露；无法判断时记录未知。" },
  { id: "abcd", group: "接诊与评估", label: "记录已完成的 ABCDE 评估", hint: "记录实际评估的气道、呼吸、循环、意识与皮肤黏膜表现；本工具不指导抢救顺序。", priority: true },
  { id: "vitals", group: "接诊与评估", label: "记录实际测得的生命体征与意识状态", hint: "记录相关指标、测量时间及必要的复测结果。", priority: true },
  { id: "diagnosis", group: "诊断依据", label: "记录临床判断依据、受累系统及危险表现", hint: "如实记录低血压或气道、呼吸等表现；本工具不诊断或计算严重程度。", priority: true },
  { id: "negative", group: "诊断依据", label: "如实记录已评估的关键阳性与阴性体征", hint: "不能模板化；无皮疹、无哮鸣音等阴性表现不能单独排除严重过敏反应。" },
  { id: "epi", group: "处置记录", label: "如已使用，记录肾上腺素给药细节", hint: "记录途径、部位、剂量、浓度及时间；本工具不判断适应证或提供剂量建议。", priority: true },
  { id: "support", group: "处置记录", label: "记录实际实施的支持措施及患者反应", hint: "按临床指征和本地流程记录体位、氧疗、静脉通路或液体复苏等措施。" },
  { id: "adjunct", group: "处置记录", label: "如使用辅助药物，记录目的和时间", hint: "不得将糖皮质激素、抗组胺药等表述为替代或延迟一线处置的理由。" },
  { id: "recheck", group: "复评与转归", label: "记录处置后的重复评估", hint: "记录实际复评时间、生命体征和症状变化；频率与时长遵循临床判断及本地流程。", priority: true },
  { id: "observe", group: "复评与转归", label: "记录留观、转诊或离院的临床决定及依据", hint: "记录去向、交接对象和时间；本工具不计算留观时长或是否可离院。" },
  { id: "education", group: "复评与转归", label: "记录实际提供的复发警示与随访告知", hint: "个体化记录就医提示、过敏原规避和随访安排，具体内容遵循本地流程。" },
];
const groups = [...new Set(items.map((item) => item.group))];

export default function Home() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [offlineState, setOfflineState] = useState<"checking" | "ready" | "unavailable">("checking");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const topRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateNetworkState = () => setIsOnline(navigator.onLine);
    updateNetworkState();
    window.addEventListener("online", updateNetworkState);
    window.addEventListener("offline", updateNetworkState);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
        .then(() => navigator.serviceWorker.ready)
        .then(() => setOfflineState("ready"))
        .catch(() => setOfflineState("unavailable"));
    } else {
      Promise.resolve().then(() => setOfflineState("unavailable"));
    }

    return () => {
      window.removeEventListener("online", updateNetworkState);
      window.removeEventListener("offline", updateNetworkState);
    };
  }, []);

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 480);
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    return () => window.removeEventListener("scroll", updateBackToTop);
  }, []);

  function returnToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    window.setTimeout(() => topRef.current?.focus({ preventScroll: true }), reduceMotion ? 0 : 400);
  }

  const networkLabel = !isOnline
    ? "当前离线 · 清单可继续使用"
    : offlineState === "ready"
      ? "已准备离线使用"
      : offlineState === "unavailable"
        ? "当前仅支持在线使用"
        : "正在准备离线缓存";
  const done = items.filter((item) => checked[item.id]).length;
  const missingPriority = items.filter((item) => item.priority && !checked[item.id]);
  const score = Math.round((done / items.length) * 100);
  const summary = useMemo(() => {
    const missing = items.filter((item) => !checked[item.id]).map((item) => `- ${item.label}`).join("\n");
    return `急诊病历核对摘要\n核对进度：${done}/${items.length}（${score}%）\n优先提示未勾选：${missingPriority.length} 项\n\n尚未核对的提示：\n${missing || "- 无"}${notes.trim() ? `\n\n备注：\n${notes.trim()}` : ""}\n\n提示：勾选仅表示已查看提示，不证明记录真实、诊疗适当或病历完整；本摘要不构成诊断或治疗建议。`;
  }, [checked, done, score, missingPriority.length, notes]);
  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true); window.setTimeout(() => setCopied(false), 1600);
  }
  return (
    <main>
      <header className="topbar"><a className="brand" href="#top"><span className="brandMark">+</span><span>基层急诊病历质控助手</span></a><div className="statusCluster"><span className="privacy">浏览器端处理 · 不主动上传填写内容</span><span className={`networkStatus ${!isOnline ? "offline" : ""}`} aria-live="polite">{networkLabel}</span></div></header>
      <section className="hero" id="top" ref={topRef} tabIndex={-1}>
        <div><p className="eyebrow">ANAPHYLAXIS RECORD REVIEW · V0.2.1</p><h1>把抢救过程，<br /><em>完整地留在病历里。</em></h1><p className="lead">面向基层急诊的过敏反应与过敏性休克记录清单。仅用于处置后的记录复核，不得用于抢救中的实时决策，也不得延误抢救、转诊或上级会诊。</p></div>
        <aside className="statusCard"><div className="scoreRow"><strong>{score}</strong><span>%<br />核对进度</span></div><div className="bar"><i style={{ width: `${score}%` }} /></div><div className="statusMeta"><span>{done}/{items.length} 已核对</span><span className={missingPriority.length ? "warn" : "ok"}>{missingPriority.length} 个优先提示未勾选</span></div></aside>
      </section>
      <section className="workspace">
        <div className="checklist">{groups.map((group, index) => <section className="group" key={group}><div className="groupTitle"><span>0{index + 1}</span><h2>{group}</h2></div><div className="items">{items.filter((item) => item.group === group).map((item) => <label className={`item ${checked[item.id] ? "checked" : ""}`} key={item.id}><input type="checkbox" checked={!!checked[item.id]} onChange={(e) => setChecked({ ...checked, [item.id]: e.target.checked })} /><span className="box">✓</span><span className="itemText"><b>{item.label}{item.priority && <small>优先核对·项目暂定</small>}</b><span>{item.hint}</span></span></label>)}</div></section>)}</div>
        <aside className="summaryPanel"><p className="panelLabel">核对摘要</p><h2>{missingPriority.length ? "仍有优先提示未核对" : "优先提示均已勾选"}</h2><p>{missingPriority.length ? `建议回看下列 ${missingPriority.length} 项；是否适用仍由临床人员判断。` : "勾选不代表病历完整或诊疗适当，请结合原始记录确认真实性与适用性。"}</p><ul>{missingPriority.map((item) => <li key={item.id}>{item.label}</li>)}</ul>{!missingPriority.length && <div className="complete">✓ 已逐项核对（不代表临床验证）</div>}<label className="notesLabel" htmlFor="notes">补充备注（请勿填写患者身份信息；复制时内容会进入系统剪贴板）</label><textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="例如：等待上级医师复核转诊记录……" /><button className="primary" onClick={copySummary}>{copied ? "已复制到系统剪贴板" : "复制核对摘要"}</button><button className="secondary" onClick={() => { setChecked({}); setNotes(""); }}>清空并重新检查</button></aside>
      </section>
      {showBackToTop && <button className="backToTop" type="button" onClick={returnToTop} aria-label="返回页面顶部"><span aria-hidden="true">↑</span><span>返回顶部</span></button>}
      <footer><p>开源、隐私优先的基层病历记录辅助工具</p><p>填写内容仅保留在当前页面内存中，服务器不接收或持久化；刷新或清空后页面状态消失。复制内容会进入系统剪贴板。</p><p>首次完整加载后可缓存应用外壳供离线打开；不会缓存填写内容。仅提供记录核对提示，不提供诊断、用药剂量、留观或离院决策。</p></footer>
    </main>
  );
}
