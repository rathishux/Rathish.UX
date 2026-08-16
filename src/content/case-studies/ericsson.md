# Sourcing Pricebook — Giving Supply Chain Managers Real Visibility Into Supplier Pricing
Ericsson · Supply chain / procurement · UX Design · 6 months, from scratch

---

## Context
A Strategic Sourcing Manager's job is to find the right supplier for a given component — a screw needed to build a 5G antenna, say — from Ericsson's network of pre-agreed suppliers, weighing price, lead time, compliance, and location. This work was part of Ship-House, an interdisciplinary team spanning business, data, technology, architecture, design, and research, brought in to support the digital transformation of Ericsson's Sourcing organization. Six months, from the ground up, working closely with a product owner and agile coach through a series of research and design workshops.

**The aim:** better visibility on prices, more savings from finding the right supplier, and less manual work in negotiations.

## The problem
Sourcing relied on manual steps, and supplier and pricing data was poorly managed — sometimes simply unreliable. Sourcing managers didn't have enough visibility to negotiate effectively, and poor master data quality caused invoice/purchase-order mismatches, which meant supplier payment delays and compliance risk.

![Sourcing process today](images/problem-today.webp)
*Fig. 01 — The problem statement, framed around Cecilia, a Strategic Sourcing Manager.*

> "As a Sourcing Manager I will check the Price book to check the existing agreements and decide what to do on the next step. I keep track of it in Excel and SCLM today." — Cecilia, Strategic Sourcing Manager

## Mapping where it actually breaks
Cecilia answers eight questions just to get from "does an agreement already exist" to "purchase order issued":
- **01–02** — What exists? What do I need? Check for an existing agreement, then raise requests (RFx) to collect supplier and price info.
- **03–04** — How does it compare? How can I use that info? Benchmark and evaluate quotes, then negotiate and award.
- **05–06** — What's the best way to update this? How do I register the agreement? Create the contract and implement it.
- **07–08** — How can I update supplier price or material? How can I create a purchase order? Record the final data and issue the PO.

![Source to Agreement journey](images/journey-source-to-agreement.webp)
*Fig. 02 — The as-is Source to Agreement journey Cecilia works through per negotiation.*

Three problems kept surfacing across those eight steps: too many disconnected tools, one each for RFx, contracts, savings, and compliance; price data that drifted out of sync between systems like CON and SAP; and information that simply didn't match between tools like Tableau and SAP.

![Analysis of findings](images/findings-who-designing-for.webp)
*Fig. 03 — Synthesizing challenges, needs, and values into what the team was actually designing for.*

## The workshop that decided the scope
Rather than try to digitize all eight steps at once, we took the journey back to the SMEs who lived it and reviewed it step by step across four layers — user actions, systems and touchpoints, data, and problems and opportunities — tagging each one green (already covered), red (not covered), or yellow (needs a deeper look).

![Workshop session results](images/workshop-session-results.webp)
*Fig. 04 — Workshop output: each journey step tagged for Pricebook coverage, pain points, and open questions.*

Step 03 — "how does it compare?" — is where the room got specific. With no way to compare supplier prices side by side in any existing tool, sourcing managers were printing spreadsheets and laying the pages out on a desk to eyeball the differences by hand. We tagged it green: high pain, and squarely solvable. That one tag is why side-by-side price comparison shipped as one of Pricebook's first screens rather than a stretch feature bolted on later — scope followed the pain, not the other way round.

Data provenance kept coming back tagged yellow, "needs a deeper dive," which is what pushed data trust into a first-class design problem instead of an assumption we could design around.

For each step under review, the team then ran a lightweight change-impact exercise — what needs to change, what we need instead, what that unlocks — and assigned who owned the change and who sized it, so the decisions coming out of the workshop actually had someone accountable for shipping them.

![Change impact exercise](images/change-impact-exercise.webp)
*Fig. 05 — The change-impact exercise applied to a single journey step.*

## The solution — Sourcing Pricebook
The response was one reliable pricing tool, dropped in exactly where Cecilia used to get stuck comparing prices by hand.

![Change map](images/change-map.webp)
*Fig. 06 — What changes: new technology, a less manual process, and a data-contribution expectation from users.*

Scoped to fix three specific pains — manual price analysis, no visibility, and no trust in the data — the final solution went beyond a static price list:
- **Trend intelligence** — historical price and purchasing analysis, normalized and broken into components like delivery and payment terms
- **Smart mismatch alerts** — flagging invalid agreements or PO/agreement price mismatches automatically
- **Component-level benchmarking** — comparing comparable products by price and performance down to the bundle-component level

![Pain points](images/pain-points.webp)
*Fig. 07 — The pain points this had to fix: manual price analysis, no visibility, and no trust in the data.*

![Final solution vision](images/final-solution.webp)
*Fig. 08 — The final solution vision, framed in the sourcing manager's own words.*

### Search & filter
One search across product, supplier, category, and currency.

![Search and filter](images/screen-search-filter.webp)
*Fig. 09 — Search & Filter.*

### Compare suppliers side by side
The screen the printed-spreadsheet workaround was standing in for: agreement price, DAP adder, local price, incoterm, and factory, laid out per supplier, so a negotiation-ready comparison takes seconds instead of a desk full of paper.

![Contractual price details](images/screen-price-details.webp)
*Fig. 10 — Contractual Price Details, comparing suppliers on the terms that actually matter for negotiation.*

### See the price history, not just today's number
Historical PO prices plotted per product over time, with lowest, median, and highest price, total quantity, and total actual spend surfaced directly — so a single number is never the whole story.

![Historical price analysis](images/screen-historical-analysis.webp)
*Fig. 11 — Historical Price Analysis: price trends over time, not a single static figure.*

## How the team worked
Research stayed close to actual users throughout: 1:1 interviews, co-creation workshops with SMEs, a weekly SME sync, a demand portal for feature requests, and UAT to confirm what shipped actually delivered value. UAT ran on a fixed monthly rhythm with 14 users — new work went out every second and fourth Thursday, users worked it into their own routine for two weeks, then reported back on the last Thursday of the month.

![User in the heart of the process](images/user-heart-of-process.webp)
*Fig. 12 — The process committed to, user kept at the center of every part of it.*

The work as a whole followed a double-diamond shape: explore and define to make sure we were solving the right problem, then ideate and refine to make sure we solved it right.

![Double-diamond deliverables](images/double-diamond.webp)
*Fig. 13 — The double-diamond structure and deliverables the team committed to upfront.*

## Measuring success
Success was defined top-down: transform the sourcing digital journey (vision), a better process, tech, and digital experience (org goal), faster, more accurate, more satisfying (product goal) — then broken into what could actually be measured: effectiveness, efficiency, and satisfaction.

![UX metrics funnel](images/ux-metrics.webp)
*Fig. 14 — Vision down to measurable UX metrics: effectiveness, efficiency, satisfaction.*

This was the first complete digital product built specifically for Ericsson's Sourcing organization, replacing a mix of disparate platforms and phone-based communication — so there was no like-for-like baseline to measure a percentage improvement against. No formal post-launch metrics were captured, but the product was well received by both leadership and the sourcing managers using it day to day.

## Lessons learned
- **Contribute to deliver value, not features** — make space to speak up and keep the user at the center of every discussion
- **Don't underestimate co-creation** — working as a genuine team avoids duplicate work and scope overlap with other efforts
- **Unite the team on user values** — stay close to change management and business analysis to avoid disconnection or lost buy-in
