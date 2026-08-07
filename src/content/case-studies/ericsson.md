# Sourcing Pricebook — Giving Supply Chain Managers Real Visibility Into Supplier Pricing
Ericsson · Supply chain / procurement · UX Design · 6 months, from scratch

---

## Context
The job of a Strategic Sourcing Manager is to find the right supplier for a given component — a screw needed to build a 5G antenna, for instance — from within Ericsson's network of pre-agreed suppliers, weighing price, lead time, compliance rules, and location to get the best deal. This work was part of Ship-House, an interdisciplinary team spanning business, data, technology, architecture, design, and research, brought in to support the digital transformation of Ericsson's Sourcing organization. Six months on the project, from the ground up, working closely with a product owner and agile coach through a series of research and design workshops.

**The aim:** better visibility on prices, more savings by finding the right supplier, and less manual work in negotiations.

## Research approach
Before looking at any one user's problem, the team set out what it would actually deliver and how — a double-diamond structure: explore and define to make sure we were solving the right problem, then ideate and refine to make sure we solved it right.

![Double-diamond deliverables](images/double-diamond.png)
*Fig. 01 — The double-diamond structure and deliverables the team committed to upfront.*

### Keeping the user at the center of that process
Research stayed close to actual users throughout: 1:1 qualitative interviews, co-creation workshops with subject-matter experts, a weekly SME sync, a demand portal for requesting features, and user acceptance testing to validate that what shipped actually delivered value.

![User in the heart of the process](images/user-heart-of-process.png)
*Fig. 02 — The process committed to, user kept at the center of every part of it.*

UAT ran on a fixed monthly rhythm with a group of 14 users: every second and fourth Thursday, new work from the prior two weeks was presented to the group, who then used it in their own workflow for two weeks before returning feedback on the final Thursday of the month.

## The problem
The sourcing process relied on many manual steps, and supplier and pricing data was poorly managed — and sometimes simply unreliable:
- Sourcing managers didn't have enough information or visibility to negotiate effectively
- Poor master data quality led to invoice and purchase-order mismatches, causing supplier payment delays and compliance risk

![Sourcing process today](images/problem-today.png)
*Fig. 03 — The problem statement, framed around Cecilia, a Strategic Sourcing Manager.*

## Mapping the current journey
Eight questions Cecilia has to answer just to get from "does an agreement already exist" to "purchase order issued," spanning Source to Agreement, Purchase to Pay, and Supply:
- **01–02** — What exists? What do I need? Check if an agreement already exists, then raise requests (RFx) to collect supplier and price info.
- **03–04** — How does it compare? How can I use that info? Benchmark and evaluate quotes, then negotiate and award.
- **05–06** — What's the best way to update this info? How do I register the agreement? Create the contract and implement it.
- **07–08** — How can I update supplier price/material? How can I create a purchase order? Record the final data and issue the PO.

![Source to Agreement journey](images/journey-source-to-agreement.png)
*Fig. 04 — The as-is Source to Agreement journey, eight questions Cecilia works through per negotiation.*

> "As a Sourcing Manager I will check the Price book to check the existing agreements and decide what to do on the next step. I keep track of it in Excel and SCLM today." — Cecilia, Strategic Sourcing Manager

## From findings to change
Mapping the journey surfaced where things broke down; the next step was working out who we were really designing for and why it mattered.

![Analysis of findings](images/findings-who-designing-for.png)
*Fig. 05 — Synthesizing challenges, needs, and values into what the team was designing for.*

Three consistent challenges emerged:
- **Too many tools** — different tools for RFx, contracts, savings, and compliance, none of them talking to each other
- **Price data quality** — tools like CON and SAP weren't synced; SAP info was manually maintained, leading to mismatched prices
- **Inconsistent information** — mismatching information between tools like Tableau and SAP

### Reviewing the journey with the people who live it
Those findings went back into the journey map through structured review workshops with SMEs — walking each step across four layers (user actions, systems and touchpoints, data, problems and opportunities) and tagging it: does the proposed Pricebook already cover this, does it not, or does it need a deeper dive.

![Workshop session results](images/workshop-session-results.png)
*Fig. 06 — Workshop output: each journey step tagged for Pricebook coverage, pain points, and open questions.*

Two things came out of that tagging that directly shaped scope:
- **Step 03 — "How does it compare?" — was the clear point of leverage.** Benchmarking prices and short-listing suppliers were marked as both high-pain and coverable, which is why the Pricebook was built to sit exactly there rather than trying to digitize the whole eight-step journey at once.
- **Data provenance kept coming back as "needs a deep dive."** That's what pushed data trust into a first-class design problem rather than an assumption.

### Turning findings into a change the team could commit to
For each step under review, the team ran a change-impact exercise: what needs to change, what do we need instead, and what does that let us do — then explicitly assigned who supports the change and who's responsible for sizing it.

![Change impact exercise](images/change-impact-exercise.png)
*Fig. 07 — The change-impact exercise applied to a single journey step.*

## The solution — Sourcing Pricebook
The response was a single reliable pricing tool, introduced at exactly the point in the journey where Cecilia was previously stuck comparing prices manually across disconnected sources.

![Change map](images/change-map.png)
*Fig. 08 — What changes: new technology, a less manual process, and a data contribution expectation from users.*

Worth restating exactly what this was built to solve:

![Pain points](images/pain-points.png)
*Fig. 09 — The pain points this had to fix: manual price analysis, no visibility, and no trust in the data.*

Beyond the core screens, the final solution was scoped to go further than a static price list:
- **Trend intelligence** — historical price and purchasing analysis, with prices normalized and broken into components like delivery and payment terms
- **Smart mismatch alerts** — flagging invalid agreements or PO/agreement price mismatches automatically
- **Component-level benchmarking** — comparing comparable products by price and performance down to the bundle-component level

![Final solution vision](images/final-solution.png)
*Fig. 10 — The final solution vision, framed in the sourcing manager's own words.*

### Search & filter
A single search across product, supplier, category, and currency.

![Search and filter](images/screen-search-filter.png)
*Fig. 11 — Search & Filter.*

### Compare suppliers side by side
Agreement price, DAP adder, local price, incoterm, and factory, laid out per supplier.

![Contractual price details](images/screen-price-details.png)
*Fig. 12 — Contractual Price Details, comparing suppliers on the terms that actually matter for negotiation.*

### See the price history, not just today's number
Historical PO prices plotted per product over time, with lowest/median/highest price, total quantity, and total actual spend surfaced directly.

![Historical price analysis](images/screen-historical-analysis.png)
*Fig. 13 — Historical Price Analysis: price trends over time, not a single static figure.*

## Measuring success
Success was defined top-down, from a long-term vision down to what could actually be measured:
- **Vision** — Transform the sourcing digital journey
- **Org goal** — Better process, tech, digital experience
- **Product goal** — Faster, more accurate, more satisfying

![UX metrics funnel](images/ux-metrics.png)
*Fig. 14 — Vision down to measurable UX metrics: effectiveness, efficiency, satisfaction.*

- **Effectiveness** — accuracy and completeness of achieving user goals
- **Efficiency** — resources spent relative to that accuracy
- **Satisfaction** — comfort and acceptability of use

This was the first complete digital transformation product built specifically for Ericsson's Sourcing organization — replacing a mix of disparate digital platforms and phone-based communication with one product built for the function, so there was no like-for-like baseline to measure a percentage improvement against. No formal post-launch metrics were captured, but the product was well received by both top management and the sourcing managers using it day to day.

## Lessons learned
- **Contribute to deliver value, not features** — make sure you have space to speak up and put the user at the center of every discussion
- **Don't underestimate co-creation** — working as a genuine team avoids duplicate work and scope overlap with other efforts
- **Unite the team on user values** — stay close to change management, business analysis, and development to avoid disconnection or lost buy-in
