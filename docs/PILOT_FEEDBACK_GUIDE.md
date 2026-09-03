# Privacy-safe pilot feedback guide

Status: **process ready; no verified external pilot responses recorded yet**  
Last updated: **2026-09-03**

## Purpose

This pilot evaluates whether the interface, wording, offline behavior, and review workflow are understandable. It does not establish clinical validity, guideline endorsement, institutional approval, or patient benefit.

## Privacy rules

The public feedback form must never contain:

- patient names, initials, identification numbers, contact details, dates of birth, addresses, or images;
- real case narratives, visit dates, medication records, record excerpts, or screenshots of clinical systems;
- hospital, clinic, department, employer, or colleague names;
- copied summaries produced from real records.

Use only a blank checklist or a wholly fictional scenario. If prohibited information is posted accidentally, remove it from the public issue and notify the maintainer through GitHub without repeating the information.

## Suggested 5-minute test

1. Open the live demo while connected to the internet.
2. Wait until the page reports that offline use is ready.
3. Use a blank or fictional scenario to select and clear several prompts.
4. Enter a fictional note, copy the summary, then clear the page.
5. If practical, disconnect the network and reopen the installed app.
6. Submit the [public pilot feedback form](https://github.com/cjjaijia-svg/primarycare-record-check/issues/new?template=pilot-feedback.yml).

Do not test during active emergency care. Do not allow the tool to delay treatment, transfer, consultation, or documentation in the approved clinical system.

## Maintainer handling

- Check every response for accidental sensitive information before discussing it.
- Record only aggregate, non-identifying findings in [PILOT_FINDINGS.md](PILOT_FINDINGS.md).
- Link actionable findings to a GitHub Issue or pull request.
- Do not count maintainer self-testing as an external clinical response.
- Keep Issue #4 open until at least three genuine, privacy-safe responses have been received and resulting work is linked.
