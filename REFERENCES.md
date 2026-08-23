# Clinical references and checklist evidence map

Last verified: **2026-08-23**  
Applies to: **PrimaryCare Record Check v0.1.1**  
Clinical review status: **independent review pending ([Issue #2](https://github.com/cjjaijia-svg/primarycare-record-check/issues/2))**

## Safety and intended use

This project checks whether potentially relevant facts were documented. It is **not** a diagnostic tool, a treatment protocol, a dosing calculator, a triage system, or a rule for observation or discharge. Checking an item does not establish that a clinical decision was appropriate.

Decisions about diagnosis, medication, observation, transfer, discharge, and follow-up belong to qualified clinicians using current local legislation, institutional policy, patient-specific circumstances, and independently reviewed guidance. International and UK guidance must be adapted and verified before use in other jurisdictions. Do not enter patient-identifying information.

The mapping below distinguishes recommendations explicitly stated in the cited guidance from project-specific documentation-quality extensions. Recording that a treatment occurred does not mean that the tool recommends that treatment for an individual patient.

## Authoritative source register

| ID | Source and scope | Publication / review | Official or primary link | Accessed |
| --- | --- | --- | --- | --- |
| NICE-2026 | National Institute for Health and Care Excellence, *Anaphylaxis: assessment and referral after emergency treatment*, guideline NG258. Covers documentation, observation, referral, and discharge. Replaces CG134. | Published 2026-05-27; last reviewed 2026-06-04 | [Guideline overview](https://www.nice.org.uk/guidance/ng258) | 2026-08-23 |
| WAO-2020 | World Allergy Organization, *World Allergy Organization Anaphylaxis Guidance 2020*. Covers recognition, acute management, follow-up, and prevention. | Published 2020-10-30 | [Original article, DOI: 10.1016/j.waojou.2020.100472](https://doi.org/10.1016/j.waojou.2020.100472) | 2026-08-23 |
| JTFPP-2023 | AAAAI/ACAAI Joint Task Force on Practice Parameters, *Anaphylaxis: A 2023 practice parameter update*. Covers updated diagnostic criteria, individualized management, epinephrine, and follow-up. | Announced 2023-12-18; journal publication 2024 | [AAAAI official summary and link to the complete practice parameter](https://www.aaaai.org/about/news/news/2023/new-guidelines) | 2026-08-23 |
| RCUK-2025 | Resuscitation Council UK, *First Aid Guidelines*, sections “Structured first aid assessment ... (ABCDE)” and “Anaphylaxis”. Supports the structured assessment framework and recognition principles; this is first-aid guidance, not a complete institutional treatment protocol. | Published 2025-10-27 | [2025 First Aid Guidelines](https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/first-aid-guidelines) | 2026-08-23 |

### Directly relevant NICE NG258 sections

- [Documenting suspected anaphylaxis, recommendations 1.1.1–1.1.3](https://www.nice.org.uk/guidance/ng258/chapter/Documenting-suspected-anaphylaxis).
- [Period of observation, recommendations 1.1.7–1.1.10](https://www.nice.org.uk/guidance/ng258/chapter/Period-of-observation).
- [Referral to a specialist allergy service, recommendations 1.1.12–1.1.13](https://www.nice.org.uk/guidance/ng258/chapter/Referral-to-a-specialist-allergy-service).
- [Terms used in this guideline: anaphylaxis and suspected anaphylaxis](https://www.nice.org.uk/guidance/ng258/chapter/Terms-used-in-this-guideline).

## Item-by-item evidence map

| Checklist ID | Existing checklist item | Guideline support and section | Documentation-specific limitation |
| --- | --- | --- | --- |
| `time` | 记录发病、到院及首次评估时间 | NICE-2026, recommendation 1.1.2, explicitly recommends recording the time of symptom onset. | Arrival and first-assessment timestamps are project-specific timeline-completeness fields, not a claim that recommendation 1.1.2 expressly lists them. |
| `trigger` | 记录可疑诱因及接触途径 | NICE-2026, recommendation 1.1.3, recommends recording circumstances immediately before onset to identify a possible trigger. RCUK-2025, “Anaphylaxis”, describes recent relevant exposures. | Exposure route and trigger categories are structured-history prompts; an unidentified trigger must not be invented. |
| `abcd` | 完成并记录 ABCDE 快速评估 | NICE-2026, recommendation 1.1.1, identifies acute airway, breathing, circulation, and skin/mucosal features. RCUK-2025, “Structured first aid assessment ... (ABCDE)”, explicitly supports the ABCDE framework. | The checklist structures documentation; it does not determine severity, set an assessment order, or replace local emergency protocols. |
| `vitals` | 记录完整生命体征与意识状态 | NICE-2026, recommendations 1.1.1 and 1.1.7–1.1.10, connect assessment and observation to breathing, blood pressure, heart rate, and physiological stability. RCUK-2025 supports assessment of responsiveness and pulse oximetry where appropriate. | Temperature and a complete local observation set are general record-quality extensions; the cited anaphylaxis recommendations do not mandate every listed measurement in every case. |
| `diagnosis` | 明确记录诊断依据与严重程度 | NICE-2026, recommendation 1.1.1 and “Terms used in this guideline”, describes airway, breathing, circulation, and skin/mucosal findings; JTFPP-2023 summarizes updated diagnostic criteria. | The project records the clinician’s reasoning and affected systems; it neither establishes a diagnosis nor calculates severity. |
| `negative` | 记录关键阴性体征 | NICE-2026, “Terms used in this guideline”, states that severe anaphylaxis may occur without typical skin findings or circulatory shock. | Record only findings actually assessed. Absence of a rash, wheeze, laryngeal edema, or shock does **not** by itself exclude anaphylaxis; this item is an exam-documentation extension. |
| `epi` | 如符合指征，记录肾上腺素给药细节 | WAO-2020, acute management guidance, identifies intramuscular epinephrine as first-line treatment; JTFPP-2023 covers individualized epinephrine use; RCUK-2025, “Anaphylaxis”, addresses intramuscular adrenaline. | Route, site, dose, concentration, and administration time are medication-record fields only. The project gives **no dose, indication, or treatment recommendation**. |
| `support` | 记录氧疗、体位、静脉通路及液体复苏 | WAO-2020, acute management guidance, addresses positioning, oxygen, and intravenous fluids according to clinical circumstances. RCUK-2025 discusses positioning and oxygen in the relevant first-aid sections. | Record interventions only when actually provided and clinically indicated. This item is not a requirement that every patient receive every listed intervention. |
| `adjunct` | 辅助用药注明目的，避免替代一线处置 | WAO-2020 distinguishes first-line epinephrine from supplementary medications and discusses the limited or uncertain role of antihistamines and glucocorticoids. | Adjuncts must not be represented as substitutes for or reasons to delay appropriate first-line emergency management; the project does not recommend a medication regimen. |
| `recheck` | 处置后重复评估生命体征和症状 | NICE-2026, recommendations 1.1.7–1.1.10, bases observation/disposition considerations on symptom resolution, respiratory status, blood pressure, heart rate, and treatment response. | Reassessment times and recorded response are traceability fields. Frequency and duration are set by clinicians and local policy. |
| `observe` | 记录留观、转诊或离院依据 | NICE-2026, recommendations 1.1.7–1.1.10, describes risk-stratified observation, and recommendations 1.1.12–1.1.13 cover referral pathways. | The checklist records a clinician’s rationale, destination, handover, and timing. It deliberately does **not** calculate or prescribe an observation period or discharge decision. |
| `education` | 记录复发警示与随访告知 | NICE-2026, recommendation 1.1.12, supports specialist follow-up and patient education; WAO-2020 covers prevention, avoidance, recognition of recurrence, and longer-term management. | Record advice actually delivered and the follow-up plan. Patient education must be individualized and approved locally. |

## Evidence maintenance and review

1. Re-check the official source pages before each release that changes clinical wording.
2. Keep source publication/review dates and the access date current.
3. Flag superseded guidance explicitly; NICE NG258 replaced the older CG134 guideline.
4. Require independent clinical review before real-world or institutional use; track this separately in [Issue #2](https://github.com/cjjaijia-svg/primarycare-record-check/issues/2).
5. Do not copy patient data, imply professional endorsement, or present this documentation aid as a substitute for clinical judgment.
