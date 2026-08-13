"use client";

import { useMemo, useState } from "react";

type Item = { id: string; group: string; label: string; hint: string; critical?: boolean };
const items: Item[] = [
  { id: "time", group: "接诊与评估", label: "记录发病、到院及首次评估时间", hint: "精确到分钟，便于还原诊疗时间轴。", critical: true },
  { id: "trigger", group: "接诊与评估", label: "记录可疑诱因及接触途径", hint: "药物、食物、昆虫叮咬或其他暴露。" },
  { id: "abcd", group: "接诊与评估", label: "完成并记录 ABCDE 快速评估", hint: "气道、呼吸、循环、意识与皮肤黏膜表现。", critical: true },
  { id: "vitals", group: "接诊与评估", label: "记录完整生命体征与意识状态", hint: "血压、心率、呼吸、SpO₂、体温及意识。", critical: true },
  { id: "diagnosis", group: "诊断依据", label: "明确记录诊断依据与严重程度", hint: "写出受累系统、低血压或气道/呼吸表现，避免只写“过敏”。", critical: true },
  { id: "negative", group: "诊断依据", label: "记录关键阴性体征", hint: "如无喉头水肿、无哮鸣音等；按实际查体填写，不能模板化。" },
  { id: "epi", group: "处置记录", label: "如符合指征，记录肾上腺素给药细节", hint: "途径、部位、剂量、浓度及给药时间；本工具不提供剂量建议。", critical: true },
  { id: "support", group: "处置记录", label: "记录氧疗、体位、静脉通路及液体复苏", hint: "注明开始时间、方式和患者反应。" },
  { id: "adjunct", group: "处置记录", label: "辅助用药注明目的，避免替代一线处置", hint: "糖皮质激素、抗组胺药等应记录为辅助治疗。" },
  { id: "recheck", group: "复评与转归", label: "处置后重复评估生命体征和症状", hint: "记录复评时间、指标变化和疗效判断。", critical: true },
  { id: "observe", group: "复评与转归", label: "记录留观、转诊或离院依据", hint: "写明风险判断、去向、交接对象和时间。" },
  { id: "education", group: "复评与转归", label: "记录复发警示与随访告知", hint: "包含何时立即就医及过敏原规避建议。" },
];
const groups = [...new Set(items.map((item) => item.group))];

export default function Home() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);
  const done = items.filter((item) => checked[item.id]).length;
  const missingCritical = items.filter((item) => item.critical && !checked[item.id]);
  const score = Math.round((done / items.length) * 100);
  const summary = useMemo(() => {
    const missing = items.filter((item) => !checked[item.id]).map((item) => `- ${item.label}`).join("\n");
    return `急诊病历质控摘要\n完成度：${done}/${items.length}（${score}%）\n关键项缺失：${missingCritical.length} 项\n\n待补充记录：\n${missing || "- 无"}${notes.trim() ? `\n\n备注：\n${notes.trim()}` : ""}\n\n提示：本摘要仅用于记录完整性检查，不构成诊断或治疗建议。`;
  }, [checked, done, score, missingCritical.length, notes]);
  async function copySummary() {
    await navigator.clipboard.writeText(summary);
    setCopied(true); window.setTimeout(() => setCopied(false), 1600);
  }
  return (
    <main>
      <header className="topbar"><a className="brand" href="#top"><span className="brandMark">+</span><span>基层急诊病历质控助手</span></a><span className="privacy">本地运行 · 不上传病历</span></header>
      <section className="hero" id="top">
        <div><p className="eyebrow">ANAPHYLAXIS RECORD REVIEW · V0.1</p><h1>把抢救过程，<br /><em>完整地留在病历里。</em></h1><p className="lead">面向基层急诊的过敏反应与过敏性休克记录清单。用于快速发现遗漏，不替代临床判断、指南或上级医师意见。</p></div>
        <aside className="statusCard"><div className="scoreRow"><strong>{score}</strong><span>%<br />完成度</span></div><div className="bar"><i style={{ width: `${score}%` }} /></div><div className="statusMeta"><span>{done}/{items.length} 已核对</span><span className={missingCritical.length ? "warn" : "ok"}>{missingCritical.length} 个关键项待补</span></div></aside>
      </section>
      <section className="workspace">
        <div className="checklist">{groups.map((group, index) => <section className="group" key={group}><div className="groupTitle"><span>0{index + 1}</span><h2>{group}</h2></div><div className="items">{items.filter((item) => item.group === group).map((item) => <label className={`item ${checked[item.id] ? "checked" : ""}`} key={item.id}><input type="checkbox" checked={!!checked[item.id]} onChange={(e) => setChecked({ ...checked, [item.id]: e.target.checked })} /><span className="box">✓</span><span className="itemText"><b>{item.label}{item.critical && <small>关键</small>}</b><span>{item.hint}</span></span></label>)}</div></section>)}</div>
        <aside className="summaryPanel"><p className="panelLabel">质控摘要</p><h2>{missingCritical.length ? "仍有关键记录待补充" : "关键记录已核对"}</h2><p>{missingCritical.length ? `优先检查下列 ${missingCritical.length} 项，再完善一般记录。` : "请结合原始病历再次确认内容真实、时间准确。"}</p><ul>{missingCritical.map((item) => <li key={item.id}>{item.label}</li>)}</ul>{!missingCritical.length && <div className="complete">✓ 关键项目完整</div>}<label className="notesLabel" htmlFor="notes">补充备注（请勿填写患者身份信息）</label><textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="例如：等待上级医师复核转诊记录……" /><button className="primary" onClick={copySummary}>{copied ? "已复制" : "复制质控摘要"}</button><button className="secondary" onClick={() => { setChecked({}); setNotes(""); }}>清空并重新检查</button></aside>
      </section>
      <footer><p>开源、隐私优先的基层病历记录辅助工具</p><p>仅检查记录完整性，不保存数据，不提供诊疗决策。</p></footer>
    </main>
  );
}
