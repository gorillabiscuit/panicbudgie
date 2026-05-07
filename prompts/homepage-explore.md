# Panicbudgie homepage exploration prompt

For use with Claude Design (or any AI design generation tool: v0, Lovable, Magic Patterns). Paste the prompt below and attach the budgie character reference image.

**What this is for:** generating layout, palette, and pacing iterations of the homepage before we commit to typefaces and final hex values. The character will come back as an approximation; judge the output on composition, sectional rhythm, palette application, and type pairing.

**What to attach:** the soft volumetric chubby budgie illustration the client liked (white body, pink blush, multi-colour tail feathers, saturated yellow background).

---

## Prompt

```
I'm redesigning the homepage for Panicbudgie, a South African emergency-response subscription. Press a button, a real responder comes. Uber-style dispatch, with a built-in R10,000 medical benefit so hospitals can act without payment friction. The service is plugged into a network of 27,000+ responders and 9,500+ vehicles. The current site is a default Material UI build and should be ignored entirely; we're rebuilding the brand from the ground up.

ATTACHED: One illustration style reference (a soft volumetric chubby budgie character, white body, pink blush, multi-colour tail feathers, sat on a saturated yellow background). Match this character style and the energy of this composition.

## Audience

Two parallel audiences on the same homepage:
- Consumer (primary): middle- to upper-income South African families and individuals in suburbs. They sign up calmly, before they need it, after hearing about an incident in their network. Older relatives are common users.
- Partner (secondary): insurers, banks, corporates evaluating this as a white-label add-on. Named targets include FNB, Standard Bank, Legacy Group. The page has to feel credible to enterprise buyers without losing the consumer warmth.

## Brand strategy

Three words: calm, capable, reliable.
Voice: efficient, friendly, supportive. Plain language. Like a friend texting, not an insurer's compliance department.
North Star: "Daylight, Not Alarm." Every other emergency-response brand sells fear in red and black. Panicbudgie sells competence in daylight yellow. That contrast is the entire identity.
Closest commercial analog: Lemonade Insurance. Also Headspace, Naked Insurance.

## Visual system

Palette (six roles, hex to be finalised, oklch acceptable):
- Sun (primary): saturated warm daylight yellow. Brand surface in heroes and identity-statement sections. The colour the brand WEARS.
- Coral (secondary): confident warm orange. Reserved exclusively for the panic action button and live-emergency states. Never decorative. Its rarity is its meaning.
- Blossom (tertiary): soft pink. Character warmth, blush, gentle accents.
- Sky-Blue (tertiary): cool blue. Live-tracking surfaces, "responder dispatched", "all clear" confirmations.
- Cloud: warm off-white. Character body, content surfaces. NEVER #fff.
- Ink: warm charcoal for type. NEVER #000.

Typography: single warm humanist sans family. Slightly rounded character permitted at display sizes. AVOID cold geometric (Inter, Helvetica), editorial serifs, technical mono. 16px floor on mobile body. No weights below 400.

Illustration: soft volumetric character illustration of a single budgie (per attached reference). White-bodied, pink blush, dot eyes, simple beak, multi-coloured tail feathers using the palette above. Single soft warm-tinted shadow grounds the character. The bird is the face of the brand; logo can stay humble.

Layout: mobile-first; phone is primary. Flat surfaces by default. Only shadow in the system is under the budgie. Sun surfaces are the bold identity moments; Cloud surfaces are the breathing room.

## The homepage has six jobs, in roughly this order

1. Hero. In 5 seconds: "real people are there to help, immediately, this solves the problem." Single press, real responder, transparent tracking. The budgie is the hero of the hero.
2. The medical benefit. The R10,000-per-incident benefit is the unique wedge. Even people with medical aid get stuck at hospital admissions waiting for deposits. Panicbudgie removes that friction. Dramatize this.
3. How it works. Three steps: press, the closest responder is dispatched, you watch them arrive in real time.
4. Test-call CTA. Unique feature: members can trigger a test response before they need it. Builds trust, removes uncertainty about whether the service actually works.
5. Network credibility. 27,000+ responders, 9,500+ vehicles, "thousands of lives saved." Real numbers, but NOT as a hero-metric template (big number / small label / supporting stats is forbidden).
6. Pricing entry. Light, friendly, "join the flock" framing. "Members" not "customers."

## Hard constraints (do not violate)

- The words "insurance" and "medical aid" are forbidden in display copy.
- No fear framing. No "South Africa is dangerous" tone. No shock imagery.
- No stock paramedic photography (most overused trope in this category).
- No red-and-black tactical branding (that's local armed-response, not us).
- No hero-metric template. No identical icon-card grids (icon + heading + body x6).
- No drop shadows on cards or panels. The only shadow in the system is under the budgie character.
- No glassmorphism. No backdrop blur. No gradient text. No coloured side-stripe borders.
- No #fff. No #000. Cloud and Ink only.
- No thin font weights (under 400) for body or small text.

## Output

Generate 3 distinct homepage variants. For each:
- Mobile view AND desktop view
- All 6 jobs covered (composition and order may vary)
- Annotated with hex values used and a 2-3 sentence rationale: what makes this variant distinct, what trade-off it makes

Vary on: hero composition (drenched-yellow hero with bird floating, vs split-screen with bird beside content, vs sectioned reveal), sectional pacing rhythm, where the test-call CTA earns placement (early as proof, or late as conviction), how the medical benefit is dramatized (storytelling beat vs feature panel vs price-anchoring callout). Keep brand strategy, palette, and tone consistent across all three variants.

The character may be approximated; consistency of the budgie across screens isn't required at this stage. The point is to test layout, palette application, type pairing, and sectional rhythm.
```

---

## What to look for in the output

- Does any variant make the medical benefit feel like a wedge, not a feature?
- Does any variant earn the test-call CTA's placement?
- Does the partner credibility (FNB-tier) coexist with consumer warmth?
- Does the daylight yellow hold up when you look at the whole page, or does it need a Cloud breather between Sun sections?
- Does any variant feel like Lemonade-meets-Naked, or has the AI defaulted to navy/teal "trust" tropes?

## What to ignore

- The budgie character will be off. Don't grade on character fidelity.
- Specific copy will be off. Don't grade on the words.
- Exact type may be off. Direction matters more than specific font choice.

## Iterating

When the first run fails in a specific way (e.g. AI defaults to navy gradients, or makes the panic button decorative everywhere), come back here and add the failure mode as an explicit "Don't" in the Hard Constraints. Update the prompt as we learn the AI's failure modes; treat this file as a living document.
