# Slot Manager — Turning Reactive Alerts into Actionable Insight
Aviation slot allocation & management platform · UX Design

---

## 1. Discrepancy Resolution (main case study)

### Overview
This slot management software helps airport operations teams allocate and manage arrival/departure slots — a critical function for keeping takeoffs and landings conflict-free. Work spanned multiple phases, including a recent redesign of how the system surfaces and resolves scheduling discrepancies.

### Working in an unfamiliar domain
Airport slot management is a deeply specialized corner of aviation — slot coordination rules, schedule change requests (SCRs), slot information queries (SIQs), master vs. auxiliary schedules, discrepancy codes. There's no clean requirements doc for a domain like this. The primary sources were:
- The existing legacy desktop application itself — reverse-engineering intent from how the current tool was structured
- Recorded walkthroughs from users and product managers, explaining flows and how specific tasks were actually completed day to day
- A requirement flow from stakeholders and the project manager, worked through and prioritized alongside what the videos showed

There was no substitute for watching how people actually used the tool. Reading a feature list wouldn't have surfaced that discrepancy alerts weren't actionable, or that ops teams needed to see an entire network's worth of schedule data without losing their place.

### The problem
Ops teams managed slot sets in a dense, table-heavy interface. On the surface it worked — but underneath, small changes had outsized consequences:
- Updating a single slot could trigger multiple downstream impacts with no clear visibility into what was affected
- Discrepancies between requested/booked slots and airport-confirmed data were common, but invisible until something broke
- Users relied on tribal knowledge and manual double-checking rather than the system surfacing risk
- The result: a high risk of conflicts, overlaps, and invalid schedules in a domain where errors are expensive

![Slot table view](images/dashboard-spreadsheet.png)
*Fig. 01 — Dense grid of arrival/departure slot data, narrow columns, no visual hierarchy. This is the "table-heavy interface."*

**The legacy discrepancy flow** made this worse. When a discrepancy occurred, a user got a generic alert, opened their inbox, read through unstructured text to understand what was actually wrong, replied, then had to cancel the existing request and recreate it from scratch — every single time. This loop repeated in full for every discrepancy: Alert received → Open inbox → Read message → Reply to sender → Cancel request → Create new request.

### First attempt — and the insight that redirected it
The first pass at a redesign essentially rebuilt the existing inbox-based flow with a cleaner UI: same steps, same structure, better visual polish.

It didn't take long to realize that was solving the wrong problem. **The alert itself wasn't actionable.** Polishing a workflow that still required reading, replying, cancelling, and recreating a request wasn't going to reduce errors or save time — it just made the same friction look nicer.

That reframed the goal: instead of communicating that a discrepancy existed, the system needed to let users see the discrepancy and act on it in one step.

### Exploring the solution
Two ways to surface discrepancies directly in context were prototyped, each showing the specific conflict (e.g. scheduled departure time vs. actual, assigned equipment vs. requested) with an inline action.

**Option A — Accordion cards on the dashboard**
Discrepancy summaries embedded alongside existing dashboard data.

![Accordion option](images/discrepancy-accordion.png)
*Fig. 02 — Row of summary cards (Schedule/Slot Time, Equipment, Seat Numbers), each with the discrepancy value and an inline action.*

**Option B — Modal (shipped)**
A dedicated, expandable view triggered from an alert on the dashboard.

![Modal option, shipped](images/discrepancy-modal.png)
*Fig. 03 — "List of discrepancies" modal with grouped sections, a Select All checkbox, and a SEND SCR/SMA action.*

### The decision: modal
Two reasons drove the decision:
- **Visual priority.** The accordion sat directly among other dashboard data, which diluted how important a discrepancy actually was — it read as one more data block among many, not an issue demanding attention.
- **Scalability.** The accordion's fixed-width cards meant that with more than a few discrepancies, users had to scroll horizontally to see them all. The modal could expand and scroll vertically, so it held any number of discrepancies without losing visibility.

### Outcome
- Reduced time to update slot sets — discrepancies are now resolved in place instead of through a multi-step inbox detour
- Fewer scheduling conflicts and errors, since discrepancies are surfaced proactively rather than discovered after the fact
- Improved ops team confidence handling critical, time-sensitive schedule changes

### Reflection
The biggest shift in this project wasn't visual — it was realizing that a better-looking version of the same workflow doesn't fix a broken workflow. Moving from "notify the user something is wrong" to "show the user what's wrong and let them fix it immediately" is what actually turned the system from reactive to proactive.

---

## 2. Send SCR & Change Generator (other contributions)

### Send SCR
An SCR is the formal message an airline sends to an airport slot coordinator when a flight's schedule changes — how a change gets registered and approved in the slot system. Previously this lived buried in the workflow; the redesign surfaced it as a direct icon action from the dashboard. The "Send Pending SCR Message" modal lists every pending SCR in one table — aircraft, arrival and departure ports, flight numbers, effective and discontinue dates, days of operation, seats, equipment — with general and supplementary notes fields before sending, so an ops team can review and send a whole batch without leaving their working view.

![Send SCR, early exploration](images/send-scr-exploration.png)
*Fig. 03a — An earlier exploration of the Send Pending SCR Message modal.*

![Send SCR, approved layout](images/send-scr-approved.png)
*Fig. 03b — "Send Pending SCR Message" modal: slot table, Additional Information fields, and Send SCRs action.*

### Change Generator
Where Send SCR handles one flight's change, Change Generator applies a change at scale — and turned out to be a genuinely complex flow to design well: scope the change, configure the rules that govern it, then preview before anything is generated.

**Scoping the change** starts with a slot set and season, then a date range — picked from a calendar that understands airline seasons (IATA vs. standard, current season, peak week) rather than raw dates. From there the change can pull from master, auxiliary, or prior-season schedules, and narrow further by airport, flight designator range, service type, or equipment type — each filterable as all, only, or except.

![Change Generator filters](images/change-generator-filters.png)
*Fig. 04 — Scoping a change: slot set, season, schedule source, and the airport/flight/service/equipment filters.*

![Change Generator date range picker](images/change-generator-date-range.png)
*Fig. 05 — Picking a date range from a season-aware calendar: IATA vs. standard, current season, peak week.*

**Configuring the rules** is the part that made this hard. Change Generator exposes a long list of business rules — equipment substitution, auto-pairing, rounding, terminal handling, and a dozen more — each defaulting to "Use CSP" (the airline's standing change-source profile) but overridable individually. The design had to work for an expert user who mostly wants the defaults to stay out of the way, with room to override exactly the rule that matters for this one change, without wading through the other twenty to find it.

![Change Generator slot status rules](images/change-generator-slot-status.png)
*Fig. 06 — Slot Status: the underlying business rules, each defaulting to the airline's change-source profile but overridable per rule.*

**Previewing before committing**: Change Generator splits its results into "available" and "selected" slot tables, so ops can review exactly what will change, hand-pick a subset, and export to Excel or save — before generating anything for real.

![Change Generator preview](images/change-generator-preview.png)
*Fig. 07 — Change Generator Preview: available vs. selected slots, reviewed and exported before generating.*

---

## 3. Booking Rules Engine (slot policy)

### What it does
Analysts can create conditional business rules that govern how bookings and seat capacity behave, without needing engineering involvement. Rules follow an IF → THEN structure:

```
IF Leg Origin is RUH AND Time & Date < 10 THEN Capacity User SET to 140
```

Instead of manually overriding seat availability for every individual flight, market, or cabin, analysts define logic once and the system applies it automatically whenever the conditions are met.

### Key design details
**Conflict visibility before creation.** A "Rules created for selected level" panel surfaces existing rules that already apply to the same flight/cabin/leg combination before an analyst saves a new one.

**Templates for reuse.** A "Use Template" mode lets an analyst start from a saved rule shape instead of rebuilding the same condition structure from scratch.

**A defined rule lifecycle.** Rules move through clear states — Active, Inactive, Discontinued, Manually Paused — each driven by explicit logic rather than treated as a black box.

![Rules list](images/rules-list.png)
*Fig. 06 — All created rules with level, priority, strategies, status, effective/discontinue dates, and creator.*

![Create new rule](images/create-rule.png)
*Fig. 07 — Specify Level mode: rule structure fields, existing-rules-for-this-level panel, and condition/action rule blocks.*

![Existing rules expanded](images/create-rule-expanded.png)
*Fig. 08 — Existing rules for the selected level, expanded — surfacing conflicts before save.*

![Use Template mode](images/create-rule-template.png)
*Fig. 09 — Starting from a saved template instead of building conditions from scratch.*

![Rule detail panel](images/rule-details.png)
*Fig. 10 — Selecting a rule shows its full IF/THEN definition alongside general information.*

![Rule status reference](images/rule-status-reference.png)
*Fig. 11 — Active, Inactive, Discontinued, and Manually Paused, each with the logic that determines it.*

---

## 4. Market Analysis & Management (demand insights)

A companion admin tool for demand and revenue analysis, split into two tabs — **Analysis**, for observing patterns, and **Management**, for calibrating the underlying demand model when it doesn't match what analysts are seeing in the market.

### Analysis — reading demand three ways
Bookings and revenue can be viewed against three time dimensions: by departure date, by day of week, or by days-to-departure. A departure-date view uses a bar chart with season shading (Low/Mid/High/Peak); a days-to-departure view plots a cumulative booking curve against a "Today" marker, showing how bookings are pacing toward a forecast.

![Departure horizon view](images/market-analysis-base.png)
*Fig. 12 — Departure horizon view, with the Data output table for the underlying records.*

![Booking horizon view](images/market-analysis-booking-horizon.png)
*Fig. 13 — Cumulative pace toward departure, with a forecast tail past today.*

An **Additional dimensions** panel expands the same data into small-multiple breakdowns — by POS, market, cabin, service, and TPS.

![Additional dimensions expanded](images/market-analysis-dimensions.png)
*Fig. 14 — The same data sliced by POS, market, cabin, service, and TPS.*

### Management — calibrating the demand model
For a specific service and cabin, the Management tab shows a demand curve plotted alongside the system's own curve, a reference curve, and manual adjustments. A demand multiplier table lets an analyst enter a base demand and omega value and see the recalculated demand at every price point immediately.

![Demand curve](images/market-management-demand-curve.png)
*Fig. 15 — Demand curve with an editable multiplier table below it.*

Before an adjustment goes live, a preview panel shows the same booking/revenue chart, recalculated with the new demand assumption.

![Preview before publish](images/market-management-preview.png)
*Fig. 16 — Preview of the adjusted demand model before Publish.*

---

## 5. Modernizing the Schedule Manager (desktop → web)

Not every project here is a redesign. Schedule Manager is a long-running, separate effort to take the legacy desktop application — an old, OS-like interface — and rebuild it as a modern, cloud-based web app. The brief here was fidelity, not reinvention: replicate what the desktop tool already does, so schedule managers get a real web experience instead of a legacy client.

### Finding and comparing a schedule
A schedule manager searches for and selects a schedule from a list, then chooses how to compare it — Standard (two-way), Three-way, or Merge Express, all from one Compare menu.

![Flight Display before selection](images/schedule-manager/01-flight-display.png)
*Fig. 17 — Flight Display, before a schedule is selected.*

![Select Schedule modal](images/schedule-manager/02-select-schedule.png)
*Fig. 18 — Select Schedule modal.*

![Compare mode menu](images/schedule-manager/03-compare-mode-menu.png)
*Fig. 19 — The three compare modes, all one click away from the flight list.*

### Standard compare
Standard compare sets a Source and Target schedule side by side, with Advanced Options exposing how flights are matched and what counts as a meaningful difference.

![Compare Standard filled](images/schedule-manager/04-compare-standard-filled.png)
*Fig. 20 — Source and Target schedules selected, ready to compare.*

![Advanced Options](images/schedule-manager/05-advanced-options.png)
*Fig. 21 — Match Criteria, Threshold, and Show Options settings.*

Results are categorized by change type — Cancelled, New, Retimes, Block Time, Equipment, Flight Number, and Other.

![Compare results](images/schedule-manager/06-compare-standard-results.png)
*Fig. 22 — Compare results, categorized by change type.*

![Merge success](images/schedule-manager/07-merge-success.png)
*Fig. 23 — Confirmation after a standard merge.*

### Three-way compare and Conflicts
Three-way compare adds a Base schedule alongside Source and Target — reconciling three versions at once surfaces something a two-way diff structurally can't: a flight with more than one clashing change landing on it simultaneously. Those get their own **Conflicts** category.

![Three-way compare filled](images/schedule-manager/08-threeway-filled.png)
*Fig. 24 — Base, Source, and Target all selected.*

![Three-way conflicts](images/schedule-manager/09-threeway-conflicts.png)
*Fig. 25 — A Conflicts tab appears only in three-way compare, where it can actually be detected.*

A conflicting row can't be bulk-selected — the system forces a deliberate choice.

![Select changes to merge](images/schedule-manager/10-select-changes-to-merge.png)
*Fig. 26 — A conflict forces a specific choice instead of a blanket selection.*

### Merge Express
Merge Express is where a three-way merge lands — pre-selected with everything safe to merge, conflicts already excluded.

![Merge Express](images/schedule-manager/11-merge-express.png)
*Fig. 27 — Everything safe to merge, pre-selected; conflicts left untouched.*

> Note: This flow replicates the existing desktop application's behavior rather than introducing new UX — the goal was a faithful, modern web translation of a tool schedule managers already know, not a redesign.
