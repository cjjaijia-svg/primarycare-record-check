# Pilot findings register

Last updated: **2026-09-03**

## Current status

- Verified external pilot responses: **3**
- First-round target: **met**
- Clinical validation status: **not independently validated**

No participant, institution, patient, or case-identifying information is recorded in this file. The three responses were supplied to the maintainer outside GitHub and published only as anonymous aggregates with the participants' permission.

## Round 1 aggregate results

| Metric | Result |
| --- | --- |
| Eligible external responses | 3 |
| Broad roles | 1 doctor, 1 nurse, 1 other healthcare worker |
| Devices | 1 Android phone, 1 iPhone, 1 other device |
| Task result | 2 completed all actions, 1 completed some actions |
| Offline check | 3 reported success |
| Unclear wording or interaction | 0 reported |
| Requested improvement | 1 back-to-top control; 2 no request |

## Actionable finding

The mobile back-to-top suggestion is tracked in [Issue #11](https://github.com/cjjaijia-svg/primarycare-record-check/issues/11).

On 2026-09-03, the original anonymous Android tester (`R03`) retested the deployed change and reported **passed**. The verification is recorded in Issue #11, completing the feedback-to-retest loop.

The partially completed response did not identify the unfinished action or report a usability problem. It is therefore retained as a partial result and is not interpreted as evidence that every action works.

## Limitations

- This was a small convenience sample of three colleagues, not a representative study.
- Responses were relayed by the maintainer rather than submitted through independent GitHub accounts.
- Device information for one response was reported only as “other”.
- No patient information or real case content was used.
- Usability feedback does not establish clinical accuracy, safety, efficacy, institutional approval, or independent validation.

## Eligibility rules

A response can be counted only when it:

1. comes from a genuine external primary-care healthcare worker;
2. uses a blank or fictional scenario;
3. contains no patient, case, institution, or colleague-identifying information;
4. reports the broad role, device, task result, and any unclear wording or missing usability feature;
5. is not authored by the primary maintainer.

## Reporting rules

Summaries remain aggregate and non-identifying. Each actionable finding links to an Issue, pull request, or release. A lack of responses or negative results must be reported honestly.
