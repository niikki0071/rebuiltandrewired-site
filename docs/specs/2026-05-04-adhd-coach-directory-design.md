# ADHD Coach Directory — Design Spec
**Date:** May 4, 2026
**Venture:** Rebuilt & Rewired (R&R)
**URL:** directory.rebuiltandrewired.com
**Status:** Pre-build — validation sprint first

---

## 1. Product Identity & Positioning

### What It Is
A curated directory of coaches, therapists, and specialists who work with late-career women with ADHD — people who understand the full picture: career disruption, neurodivergence, life pivots, and the perimenopause overlap.

### The Gap It Fills
- Psychology Today lists licensed therapists only — **coaches cannot list there**
- ADDA's professional directory is general ADHD (not women-specific, not late-career, no peri filter)
- No dedicated directory exists for this intersection
- Reddit r/adhdwomen actively asks: *"What tools exist for identifying qualified clinicians who understand (a) middle-aged adult (b) women with (c) very late diagnoses?"*

### Brand Home
Sub-brand of Rebuilt & Rewired. Lives at `directory.rebuiltandrewired.com`. If traffic outgrows R&R, 301-redirect to a standalone domain (decision deferred until 20–30 paid listings).

### Who Lists (Providers)
- ADHD coaches (certified or trained — see vetting framework)
- ADHD-informed licensed therapists/counselors
- Career coaches specializing in late-career pivots + ADHD
- Business coaches for ADHD entrepreneurs/solopreneurs
- Somatic/trauma coaches (ADHD-aware)
- Peri-informed practitioners (NPs, naturopaths, functional medicine) — tagged, not a separate category

### Who Searches (Users)
Late-career women with ADHD who are exhausted trying to find someone who gets all of it — not just the ADHD, not just the career disruption, not just the perimenopause. They've tried three coaches who didn't work out. They're done explaining themselves.

---

## 2. Brand Voice & Messaging

### What This Is NOT
- "I built this because I couldn't find what I needed" — founder-centric, self-serving
- Salesy, typical AI-generated marketing copy
- Psychology Today-style clinical coldness

### What It IS
Women-first, resource-first. The product speaks for Nicole. She doesn't need to explain herself.

### Homepage Hero Options (pick before build)
**Option A:** "The coach who gets all of it is out there. Now you can find her."
**Option B (recommended):** "You're not hard to coach. You've just been looking in the wrong place."
**Option C:** "Find an ADHD coach who actually gets late-career women."

### Voice Rules
- Speak directly to the woman searching — not to Nicole's origin story
- Credibility shows through curation (the filters exist, peri-aware is a tag, coaches are vetted)
- No guru language, no "transformation" promises, no wellness-speak

---

## 3. Directory Structure & Listing Model

### Provider Type Labels (Visual Separation — Required)
Every listing displays a clear type badge. No ambiguity between licensed professionals and coaches.

- 🟦 **Licensed Therapist / Counselor** — LPC, LCSW, LMFT, PhD/PsyD
- 🟩 **Certified ADHD Coach** — PAAC, ICF + ADHD training, ADDCA, iACTCenter
- 🟨 **Career / Life Coach** — Coaching focus, not clinical

Disclaimer shown on every page:
> *"Coaches listed here are not licensed mental health professionals. For clinical care, filter by Licensed Therapist."*

### Listing Profile Fields

| Field | Required? | Notes |
|---|---|---|
| Name + headshot | Yes | Trust signal #1 |
| Provider type badge | Yes | 🟦🟩🟨 — no ambiguity |
| Credentials | Yes | Self-reported, displayed prominently |
| Specialties | Yes | Multi-select tags |
| Client focus tags | Yes | Late-career, newly diagnosed, peri-informed, ADHD entrepreneur |
| "Why I work with late-career ADHD women" | Yes | Free text, 2–3 sentences — the differentiator |
| Session format | Yes | Virtual / In-person / Hybrid |
| Location + timezone | Yes | Critical for search |
| Price range | Yes | Ranges, not exact ($75–150/session) |
| Accepts new clients | Yes | Live toggle — must stay accurate |
| Website + booking link | Yes | Drives ROI for lister |
| Free consult offered | Optional | Conversion booster |
| Peri-aware tag | Optional | Self-declared |

### Searcher Filters
- Specialty type
- Virtual / in-person / hybrid
- State / location
- Price range
- Peri-aware (yes/no toggle)
- Late-career focus (yes/no toggle)
- Accepting new clients (yes/no)

---

## 4. Vetting Framework

### Why This Matters
One fake or harmful listing destroys trust. Trust is the product. No quacks. No gurus selling unqualified "fixes."

### Credentialing Bodies That Matter
- **PAAC** (Professional Association of ADHD Coaches) — gold standard for ADHD coaching
- **ICF** (International Coaching Federation) — acceptable when paired with ADHD-specific training
- **ACO** (ADHD Coaches Organization) — sets minimum training hour requirements
- **State licensing boards** — verify licensed therapists in 60 seconds via public lookup

### Approved Credentials — Tier 1 (Verified Badge)

| Credential | What It Means |
|---|---|
| PAAC credential (PCAC or MCAC) | ADHD-specific, rigorous, the real deal |
| ICF credential (ACC/PCC/MCC) + documented ADHD training | General coaching + ADHD specialization |
| ADDCA graduate (ADD Coach Academy) | ICF + PAAC accredited |
| iACTCenter graduate | ACO-recognized ADHD coach training |
| Coach Approach Training Institute graduate | ACO-recognized ADHD coach training |
| LPC, LCSW, LMFT, PhD/PsyD | State-licensed — verifiable via license number |

### Accepted Without Verified Badge — Tier 2
- Completion of any ACO-recognized program (60hr ICF-compliant + 35hr ADHD-specific)
- LAC/LAPC supervised by licensed professional (disclosed clearly on profile)

### Never Accepted — Quack Territory
- Generic "life coach" certificate with no ADHD-specific training
- Online weekend certificate not accredited by PAAC or ICF
- Self-proclaimed "ADHD expert" with no documented training
- Anyone primarily selling courses, masterminds, or group programs instead of 1:1 coaching
- No verifiable credential, no website, no real client testimonials

### Minimum Credential Floor for Coaches
Must have at least ONE of:
- PAAC or ICF credential, OR
- Completion of an ACO-recognized program: 60hr ICF-compliant coach training + 35hr ADHD-specific training

### Application Process
1. Coach submits application form (see fields below)
2. Nicole receives email notification
3. Nicole reviews within 48 hours — approves or declines
4. Automated email to applicant either way
5. Declined coaches may reapply after 90 days (with updated credentials)

### Application Form Fields
- Full name + business name
- Provider type (therapist / ADHD coach / career coach)
- Credential type + credential number or certificate name
- Training program completed + graduation year
- Active website URL
- 2–3 client testimonials (real full names — no "Sarah M.")
- States/locations served
- Answer: *"Who do you serve — describe your ideal client in 2–3 sentences"*

If they can't answer the last question specifically, they're not the right fit.

### Credential Renewal
- Annual check-in email to all listed coaches asking them to confirm credentials are current
- Not a full re-application — just a confirmation + any updates

---

## 5. Monetization Model

### Pricing Tiers

| Tier | Monthly | Annual | Who It's For |
|---|---|---|---|
| Basic (free) | $0 | $0 | Name, location, 1 specialty, contact form only |
| Founding Member | $29/mo | $290/yr | First 20 spots — pre-sell only, limited time |
| Standard | $49/mo | $490/yr | Full profile, all filters, booking link, analytics |
| Featured | $79/mo | $790/yr | Everything + top placement, featured badge, homepage spotlight |

### Founding Member Rate — Locked Terms
- $29/mo locked for **24 months** from signup date
- After 24 months: automatically transitions to **$39/mo permanent founding member rate** (never full $49)
- Annual option: $290/yr locked for 24 months → $390/yr after
- Marketing message: *"Founding members never pay full price — $29/mo for 2 years, then $39/mo forever."*

### Annual Pricing
- Standard annual: $490/yr (2 months free vs monthly)
- Featured annual: $790/yr (2 months free vs monthly)
- Offer at checkout — single toggle

### Subscription Lapse Policy
- Payment fails → Stripe webhook fires immediately
- Days 1–14: Profile stays live, coach receives 3 automated dunning emails
- Day 15: Profile hidden from all public search and filters (not deleted)
- Profile is fully restored the moment payment resumes — no re-application required
- Coaches see a "renew now" banner during grace period (searchers do not see it)

---

## 6. Tech Stack & MVP Scope

### Stack
| Layer | Tool | Reason |
|---|---|---|
| Frontend | Next.js (App Router) | Already familiar, SEO-friendly |
| Database | Supabase | Already have account, built-in full-text search |
| Payments | Stripe | Already live, identity verified |
| Hosting | Vercel | Already using, auto-deploys |
| Email | Resend | Transactional email (approval, renewal, dunning) |

No new accounts. No platform fees. No learning curve.

### Core Database Tables
- `providers` — name, bio, specialties[], modality, location, price_range, peri_aware, accepting_clients, tier, stripe_subscription_id, approved, verified_badge, created_at
- `subscriptions` — provider_id, stripe_customer_id, stripe_subscription_id, status, tier, lapse_grace_start, created_at
- `specialties` — id, name, slug (lookup table for filter tags)

### MVP Pages (v1 only)
1. **Homepage** — hero + search bar + 3–6 featured listings
2. **Browse/search page** — filterable listing grid with all filters
3. **Provider profile page** — full listing detail
4. **"List yourself" page** — application form + Stripe checkout
5. **Pricing page** — tier comparison, founding member callout
6. **Coach dashboard (simple)** — authenticated page where listed coaches update: accepts new clients toggle, booking link, availability status. No full profile editing in v1 (changes go through Nicole).
7. **Admin review page (Nicole only)** — lists pending applications with approve/decline buttons. Approval triggers automated Resend email to applicant.

**Not in v1:** Blog, analytics dashboard UI, community/forum, report-a-listing dedicated flow (email link is sufficient for v1)

### Build Sequence
1. Supabase schema + seed 5 test listings (see it working immediately)
2. Browse + profile pages (searcher experience first)
3. Application form + Stripe checkout (provider onboarding)
4. Homepage + pricing page
5. Stripe webhooks → Supabase subscription sync
6. Go live

**Estimated timeline at 20hrs/week: 4–6 weeks to shippable MVP**

---

## 7. Waitlist Strategy

### Where It Lives
R&R website — not a standalone page. Two segments on one form.

### Two Segments
- **"I'm a coach — notify me when listings open"** → coach waitlist
- **"I'm looking for a coach — notify me when we launch"** → seeker waitlist

### Email Sequences (Resend)

**Coach sequence:**
1. Confirmation: "You're on the list — here's what's coming"
2. Founding member offer (when pre-sell opens): pricing, lock-in terms, apply link
3. Early access to list (when MVP launches)

**Seeker sequence:**
1. Confirmation: "We're building this for you"
2. Interim value: "What to look for in an ADHD coach" (builds trust, reduces churn before launch)
3. Launch announcement with search link

---

## 8. Go-to-Market Plan

### Phase 0 — Pre-launch validation (weeks 1–2, before any code)
- Post in 3 ADHD coach Facebook/LinkedIn groups: *"Building a directory for ADHD coaches who work with late-career women. Psychology Today won't list coaches — this will. Would you pay $29–49/mo?"*
- DM 20 coaches personally on Instagram and LinkedIn
- Pre-sell 10 founding spots ($29/mo) to validate supply
- **Green light = 20 "yes" responses from coaches**

### Phase 1 — Soft launch (weeks 3–8)
**Supply (coaches):**
- Partner with ADHD Coach Academy and ICF-credentialed coach communities
- Reach out to practitioners like Dr. Jenni (UK/US) building for this intersection
- Reach out to ADDA member coaches with founding member rate
- Onboard all Phase 0 pre-sellers

**Demand (women searching):**
- R&R email list gets first access
- Nicole posts her perspective on R&R and LinkedIn (not "I built this" — the woman searching is the story)
- Reddit r/adhdwomen helpful participation (not spam)

### Phase 2 — Organic growth (month 3+)
- SEO blog content targeting unclaimed keywords:
  - "ADHD coach for women over 40"
  - "find ADHD coach perimenopause"
  - "ADHD coach not therapist"
  - "ADHD coach late career women"
- Pinterest strategy (Gen X women are there — underused for this niche)
- Monthly email to listed coaches sharing search analytics ("42 women searched your specialty this month") — retention tool
- Partnership with ADHD certification programs (ADDCA: free 30-day trial listing for graduates)

### The Number That Matters
**20 paying listings = proof of concept.** At $49/mo that's $980/mo recurring. SEO and word-of-mouth take over from there.

---

## 9. Legal & Compliance

### Required Before Launch
- **Terms of Service** — directory is not a referral service; not responsible for provider conduct or outcomes
- **Privacy Policy** — required at first email collection
- **Visible disclaimer on every page:** *"Coaches listed here are not licensed mental health professionals. For clinical care, filter by Licensed Therapist."*

### Business Structure
MMV LLC covers this venture. Ensure ToS names MMV LLC as the operating entity.

---

## 10. Key Metrics to Track

| Metric | What It Tells You |
|---|---|
| Profile views per listing | Coaches' ROI justification for renewal — tracked in Supabase v1, surfaced in coach dashboard v2 |
| Click-to-book rate | Are searchers actually reaching out? |
| Waitlist → paid conversion | Quality of pre-sell messaging |
| Monthly renewal rate | Churn — the health metric |
| Applications per week | Organic supply growth signal |

---

## 11. Decisions Locked

| Decision | Answer |
|---|---|
| Domain | `directory.rebuiltandrewired.com` (sub-brand, $0 cost) |
| Subscription lapse | 14-day grace → profile hidden (not deleted) |
| Founding member rate | $29/mo locked 24 months → $39/mo permanent |
| Annual founding member | $490/yr locked 24 months → $390/yr permanent |
| Vetting policy | Application + Nicole review within 48hrs |
| Credential floor | PAAC/ICF credential OR ACO-recognized program (60hr + 35hr ADHD) |
| Visual separation | 3-tier label system 🟦🟩🟨 on every listing |
| Messaging approach | Women-first, no founder-story framing |

---

## 12. Open Items (Post-Launch)

- Report-a-listing mechanism (email link in v1, dedicated flow in v2)
- Community/forum layer (evaluate after 50 listings)
- Editorial blog (R&R blog links to directory content in v1)
- Standalone domain decision (revisit at 20–30 paid listings)
- Psychology Today partnership/referral (long-term play)
