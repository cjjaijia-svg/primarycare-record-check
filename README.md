# PrimaryCare Record Check / 基层急诊病历质控助手

A browser-based checklist that helps primary-care clinicians review emergency-documentation prompts. Version 0.2.0 focuses on allergic reactions and anaphylaxis and adds installable offline support.

## Scope and safety

- Shows record-review prompts; checking a box does not prove that documentation is true, complete, or clinically appropriate.
- Must not be used for real-time emergency decisions or to delay emergency care, transfer, or consultation.
- Does not provide medication doses, diagnose anaphylaxis, determine observation duration, or decide whether a patient can be discharged.
- Form input remains in current-page memory; application code does not send or persist it. Refresh or clear the page to remove the state.
- Copying a summary places its contents on the operating-system clipboard.
- Must not be used with patient-identifying information.
- Independent clinical review remains required before institutional use.

## Try it

Live demo: https://primarycare-record-check.cjjaijia.chatgpt.site

> Development status: early public prototype. Clinical wording has completed a maintainer self-review but not independent review; do not use it as a substitute for institutional policy or authoritative guidance.

## Features

- Four-stage review: assessment, diagnostic evidence, interventions, and reassessment/disposition.
- Review-progress display and provisional priority prompts.
- Copyable review summary without patient identifiers.
- Installable PWA with an app shell cached for offline opening after the first complete online load.
- Responsive, keyboard-accessible interface.

## Offline use and privacy

Open the live demo once while connected and wait for **“已准备离线使用”**. You can then use the browser's **Install app** or **Add to Home Screen** action where supported. The service worker caches the application shell and static assets only. Checklist selections and notes are not written to the offline cache, local storage, or a database.

Offline readiness does not imply clinical validation. Test the installed app on the intended device and keep local emergency procedures available.

## Clinical references and review

All 12 checklist items are mapped to authoritative guidance in [REFERENCES.md](REFERENCES.md). Sources include NICE NG258 (published May 2026), World Allergy Organization guidance, the AAAAI/ACAAI anaphylaxis practice parameter, and Resuscitation Council UK guidance.

The evidence map separates explicit guideline recommendations from project-specific record-review prompts. International guidance must be adapted to local institutional policy.

- [Confirmed v0.1.1 maintainer clinical self-review](docs/MAINTAINER_SELF_REVIEW_2026-09-03.md)
- [Independent clinical review form](docs/CLINICAL_REVIEW_TEMPLATE.md)
- [Issue #2: independent clinical review remains pending](https://github.com/cjjaijia-svg/primarycare-record-check/issues/2)

The maintainer self-review is not independent validation, third-party verification, institutional certification, or guideline endorsement.

## Roadmap

Current public maintenance work:

- [x] [#1 Add authoritative clinical references](https://github.com/cjjaijia-svg/primarycare-record-check/issues/1)
- [ ] [#2 Track independent clinical review (deferred)](https://github.com/cjjaijia-svg/primarycare-record-check/issues/2)
- [x] [#3 Add installable offline PWA support](https://github.com/cjjaijia-svg/primarycare-record-check/issues/3)
- [ ] [#4 Create a privacy-safe pilot feedback process](https://github.com/cjjaijia-svg/primarycare-record-check/issues/4)
- [x] [#7 Address safety wording identified in maintainer self-review](https://github.com/cjjaijia-svg/primarycare-record-check/issues/7)

## Maintainer

Primary maintainer: [`@cjjaijia-svg`](https://github.com/cjjaijia-svg). Responsibilities and project governance are documented in [MAINTAINERS.md](MAINTAINERS.md).

## License

MIT
