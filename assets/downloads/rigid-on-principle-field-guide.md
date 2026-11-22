# Rigid on Principle, Flexible in Practice

## A Free Field Guide to Transparent Local Government

*The working method behind the approach, applied — and the toolkit that turns
any council's public minutes into a voting record anyone can check.*

Free. Copy, fork, print, reclaim. There is no email gate and no donate
button; the ask is that you use it in your own town.

*A living document. Worked examples from real meetings will be added as they
are written and verified, and corrections will be made in the open.*

---

## Part 1 — The Method

In its author's words (Corey Spangler, Nov 17, 2026):

> "The point is to find agreement, not persuade people to agree with your
> dug in position. The point is to be flexible. The point is to find the
> right answer, not prove that you're right. You should be rigid about your
> principles and flexible in how you think about applying them."

Everything in Part 1 is built out of those four sentences.

### Two different kinds of stubborn

A **principle** is what you will not move on. A **position** is where you
landed on how to apply it. Being dug in on a position is not the same as
being rigid about a principle — and in a live disagreement, the first job
is to tell which one you are actually defending.

### The working method, step by step

1. **Name the principle you will not move on.**
2. **Name the position you walked in with** — and label it as a position,
   not a principle.
3. **State what the other side agrees on,** in terms they would accept.
4. **Ask what the right answer would look like** if neither starting
   position existed.
5. **Test any proposed agreement against step 1.** If it violates the
   principle, it is not agreement — it is surrender. If it doesn't, be
   flexible.

### The one-page worksheet

| Row | Prompt |
|---|---|
| Principle | The principle I will not move on: |
| Position | The position I walked in with (a position, not a principle): |
| Shared Ground | What both sides actually agree on, stated in terms the other side would accept: |
| Right-Answer Test | What the right answer would look like if neither starting position existed: |
| The Check | Does the proposed agreement violate the principle? If yes — it is surrender, not agreement. If no — be flexible. |

---

## Part 2 — The Toolkit: Minutes In, Voting Record Out

A council's votes are public. In most towns they are also effectively
invisible — buried inside meeting packets, hundreds of pages at a time.
This toolkit is how one such record was dug out and made searchable.

**The worked example:** Cabot, Arkansas — 536 recorded votes drawn from
city council minutes dated January 2023 through October 2026, extracted
from the minutes embedded in public meeting packets. 516 of the 536 rows
came from OCR of scanned minutes pages and are flagged "Needs check" in
the file until a human verifies them. (Counts taken directly from the
project's working file, `votes.csv`, on Nov 17, 2026.) This guide is a
personal project of its author; it is not a City of Cabot publication, and
nothing in it implies the city's endorsement.

### The steps

1. **Collect the minutes.** In Cabot, minutes are approved at a later
   meeting and embedded in that meeting's packet, so the packets themselves
   are the archive. Gather the packet texts (and any standalone minutes
   files) for the whole period you want to cover.
2. **Get the text.** Use the native text layer where a packet has one.
   Where the minutes pages are scanned images, run OCR — and keep track of
   which rows came from OCR, because OCR garbles names and numbers. The
   record has a column for exactly that.
3. **Find the real minutes block.** Packets contain other bodies' minutes
   too (planning commission, water & wastewater, pension boards). The
   council block is located by its canonical header ("Council Meeting
   Minutes for / City of Cabot, Arkansas"), validated by the presence of a
   council roll call and council surnames, and bounded by the clerk's
   certification paragraph. Anything that fails that validation is
   excluded.
4. **Pull the motion clauses.** Clerks write formulaically, and that is
   the opening: pattern-match the recurring phrasings ("Motion to X by A,
   second by B", "A made a motion to X, seconded by B", and their
   variants), each paired with the result recorded in the same sentence.
   Track the ALL-CAPS item headings as you go, so every motion attaches to
   the ordinance or resolution it actually acted on.
5. **Record the fields.** One row per recorded vote, in the columns below.
   The plain-English description comes only from the item's own title and
   text in the document — no editorializing, and where the document
   doesn't explain the substance, the description sticks to the title.
6. **Normalize the names.** Map every name variant to the actual roster —
   including spelling variants and the OCR garbles you observe ("Spangle"
   for Spangler, in the real file).
7. **Dedupe.** The same meeting's minutes often appear in two sources —
   two packets, or a packet and a standalone file. Collapse duplicates on
   (minutes date, mover, motion type, item), keeping the fullest version.
8. **Verify every row against the source.** See the rule below. No
   exceptions.
9. **Publish it as a spreadsheet anyone can sort.** Keep the source-file
   column on every row, so any reader can trace any vote back to the
   document it came from.

### The verification rule (non-negotiable)

AI and OCR make mistakes reading minutes. Check every row against the
source document before you quote it, publish it, or act on it. In the
worked example, that is why 516 of 536 rows still carry a "Needs check"
flag: they came from OCR, and they stay flagged until a human checks them
against the packet. A voting record nobody can trust is worse than none.

### The fields

The columns of the real file, in order. The blank template
(`voting-record-template.csv`, downloadable from the guide's page on The
Stoic Opposition site) uses these exact headers.

- **MinutesDate** — The date of the meeting the minutes record — not the
  date of the packet they were found in.
- **MeetingType** — Regular, special, work session, and so on, as the
  minutes describe it.
- **Item** — The motion, with the ordinance or resolution it acted on.
- **PlainEnglish** — One plain-language sentence on what the item does —
  derived only from the item's own title and text.
- **MovedBy / SecondedBy** — Who moved and who seconded, as recorded.
- **Result** — Passed / Failed / Other.
- **TallyFor / TallyAgainst** — The recorded tally, where the minutes give
  one.
- **VoteType** — Roll call named / Roll call tally only / Voice /
  Unanimous consent / Unknown.
- **IndividualVotes** — Semicolon-separated Name=For/Against/Abstain/Absent
  — only for positions the minutes actually name. Clerks usually name
  dissenters, abstainers, and absentees, not supporters.
- **SpanglerVote** — In the original file, the tracked member's vote, set
  only on evidence: named in the minutes, marked absent at roll call, or
  reconciled from a unanimous vote or a fully named tally — otherwise
  "Not recorded." Rename this column for whichever member you are
  tracking.
- **SourceFile** — The document each row came from, so it can be traced
  and checked.
- **FromOCR** — Whether the row came from OCR of a scanned page.
- **Verified** — "Needs check" for OCR rows; the verification status of
  every row lives here.

### No code? A template prompt

The Cabot record was built with a pattern-matching script, not with an AI
prompt — clerks' formulaic phrasing is what makes the script possible. If
you are working by hand with an AI assistant instead, this template prompt
is a starting point to adapt. It asks for the same fields, with the same
rule: what the minutes don't say stays blank.

> "From the meeting minutes pasted below, extract every recorded vote into
> a table with these columns: MinutesDate, MeetingType, Item, PlainEnglish,
> MovedBy, SecondedBy, Result, TallyFor, TallyAgainst, VoteType,
> IndividualVotes, SourceFile. Item is the motion and the ordinance or
> resolution it acted on. PlainEnglish is one plain sentence drawn only
> from the document's own title and text — no editorializing.
> IndividualVotes lists only members the minutes actually name, as
> Name=For/Against/Abstain/Absent. If the minutes do not say something,
> leave the field blank and say so — do not guess. List any vote you were
> unsure about separately, and say why."

Then check every row it gives you against the source. The verification
rule above applies to AI output exactly as it applies to OCR.

---

**AI-use disclosure.** AI assisted with the extraction tooling, drafting,
and production behind this guide. The method in Part 1 is stated in its
author's own words above; the votes, the record, and the published
positions are his.

*The Stoic Opposition — copy, fork, print, reclaim.*
