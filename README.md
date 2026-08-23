# PrimaryCare Record Check / 基层急诊病历质控助手

An offline-first checklist that helps primary-care clinicians review the completeness of emergency documentation. Version 0.1.1 focuses on allergic reactions and anaphylaxis.

## Scope and safety

- Checks whether key facts were documented; it does not diagnose or recommend treatment.
- Does not transmit or persist entered content.
- Must not be used with patient-identifying information.
- Clinical content requires independent review against current authoritative guidance before institutional use.
- Does not provide medication doses, diagnose anaphylaxis, determine observation duration, or decide whether a patient can be discharged.

## Try it

Live demo: https://primarycare-record-check.cjjaijia.chatgpt.site

> Development status: early public prototype. Clinical wording has not yet completed independent review; do not use it as a substitute for institutional policy or authoritative guidance.

## Features

- Four-stage review: assessment, diagnostic evidence, interventions, and reassessment/disposition.
- Critical-item highlighting and completion score.
- Copyable review summary without patient identifiers.
- Responsive, keyboard-accessible interface.

## Clinical references

All 12 checklist items are mapped to authoritative guidance in [REFERENCES.md](REFERENCES.md). Sources include NICE NG258 (published May 2026), World Allergy Organization guidance, the AAAAI/ACAAI anaphylaxis practice parameter, and Resuscitation Council UK guidance.

The evidence map separates explicit guideline recommendations from project-specific record-completeness prompts. International guidance must be adapted to local institutional policy. Independent clinical validation remains outstanding and is tracked in [Issue #2](https://github.com/cjjaijia-svg/primarycare-record-check/issues/2).

## Roadmap

Current public maintenance work:

- [x] [#1 Add authoritative clinical references](https://github.com/cjjaijia-svg/primarycare-record-check/issues/1)
- [#2 Arrange independent clinical review](https://github.com/cjjaijia-svg/primarycare-record-check/issues/2)
- [#3 Add installable offline PWA support](https://github.com/cjjaijia-svg/primarycare-record-check/issues/3)
- [#4 Create a privacy-safe pilot feedback process](https://github.com/cjjaijia-svg/primarycare-record-check/issues/4)

## Maintainer

Primary maintainer: [`@cjjaijia-svg`](https://github.com/cjjaijia-svg). Responsibilities and project governance are documented in [MAINTAINERS.md](MAINTAINERS.md).

## License

MIT
