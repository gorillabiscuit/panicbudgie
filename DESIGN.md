<!-- SEED — re-run $impeccable document once there's code to capture the actual tokens and components. -->

---
name: Panicbudgie
description: Immediate emergency help, with a built-in medical benefit, from a flock you can trust.
---

# Design System: Panicbudgie

## 1. Overview

**Creative North Star: "Daylight, Not Alarm"**

Every other brand in this category trades on fear, dressed in red, black, and shock imagery. Panicbudgie does the opposite. The brand wears daylight: a warm, saturated yellow that signals optimism, capability, and quiet confidence. The character, a single soft-bodied budgie, anchors every screen. The budgie carries the warmth, the daylight carries the boldness, and the saturated coral signal is held in reserve for the moments that earn it: the panic action, live tracking, real-emergency states.

The aesthetic is "modern infrastructure that happens to be friendly." Closer to Lemonade or Headspace than to any home-security or insurance brand. Premium plain-language. Bold without alarm. Calm, capable, reliable expressed in visual form.

This system explicitly rejects: fear-driven security branding (red and black, tactical, sirens, "South Africa is dangerous" copy), traditional insurance and medical-aid clichés (corporate stiffness, dense forms, fine print as design), generic SaaS (gradient blobs, hero-metric templates, identical icon-card grids), local armed-response branding (alpha-male protector energy), and amateur visuals (default Material UI, garish stray colours, off-the-shelf components from the current Panicbudgie site).

**Key Characteristics:**
- Daylight-yellow brand surface as the dominant identity statement
- One reserved high-saturation accent (coral) earned only by the panic action and emergency states
- Soft volumetric illustration of a single budgie character that anchors every screen
- Multi-colour palette held together by the character, never floating free
- Mobile-first, stress-tested type and contrast
- Flat-by-default surfaces; depth comes from tonal warm layering, not shadow
- Responsive motion: state changes and transitions, never scroll-driven theatrics

## 2. Colors

A four-role palette anchored by daylight yellow, accented by warm character pinks and cool trust blues, with one charged colour held in reserve for emergencies.

Hex values to be resolved during implementation. The named roles below are normative; specific values will be locked in the next document pass once there's code.

### Primary
- **Sun**: The brand surface. Saturated, warm, daylight yellow. The budgie sits inside it. Used for hero sections, brand-identity moments, and anywhere the brand wants to declare itself loudly. This is the colour the brand wears.

### Secondary
- **Coral**: The panic action, live-emergency states, "press now" moments. Inherits the lineage of the existing Panicbudgie red-orange but elevated to a more confident, less alarming hue. Never decorative.

### Tertiary
- **Blossom**: Soft pink. Character warmth (blush, character accents), gentle support surfaces, "looked after" emotional moments.
- **Sky-Blue**: Cool calm blue. Live-tracking surfaces, "responder dispatched" status, "all clear" confirmations, trust signals.

### Neutral
- **Cloud**: Warm off-white. The budgie's body, neutral content surfaces, breathing room. Never pure white.
- **Ink**: Warm charcoal for type. Never pure black. Tinted slightly toward the warm hue family so it sits inside the system.

### Named Rules

**The Daylight Rule.** The brand surface defaults to Sun, not white. White-on-white is for high-density product surfaces only. The website's identity is the daylight; lean into it.

**The One Coral Rule.** Coral is reserved exclusively for the panic action and live-emergency states. It is never a decorative accent, never a hover colour, never a chip background, never a section divider. Its rarity is its meaning. If a button uses Coral and isn't a panic button, it's wrong.

**The Anchor Bird Rule.** The budgie's body stays Cloud. Brand colours appear in the background (Sun), in the tail feathers (Coral, Blossom, Sky-Blue), and in surrounding composition, but never replace the bird's body. The character is the calm; the world around it is the bold.

**The No-Garish-Strays Rule.** The existing Panicbudgie site's stray colours (olive `#556b2f`, teal `#3b8183`, gold `#b8860b`) are gone. They never belonged to the same family. If a colour isn't in the four roles above, it doesn't ship.

## 3. Typography

**Display Font:** To be chosen at implementation. Direction: warm humanist sans with character at display sizes. Slightly rounded forms permitted. Avoid cold geometric (Inter, Helvetica), avoid editorial serifs (the brand is not editorial), avoid technical mono (the brand is not engineering).

**Body Font:** To be chosen at implementation. Direction: workhorse humanist sans, optimised for small-size readability and older readers. Generous x-height, distinguishable letterforms (especially `I`, `l`, `1` and `O`, `0`).

**Character:** Premium plain-language. Confident voice that reads like a friend texting, not an insurer's compliance department. Warmth at display sizes, clarity at body sizes.

### Hierarchy

Specific weights, sizes, and line-heights to be set at implementation. Direction:

- **Display:** Large, confident, characterful. Used in heroes and section openers. Never in body flow.
- **Headline:** Steps down from display, opens content sections.
- **Title:** Workhorse heading, used inside cards and component contexts.
- **Body:** 16px floor on mobile, generous line-height (1.55 to 1.65), max line length 65 to 75ch.
- **Label:** All-caps reserved for navigational chrome and badges. Tight letterspacing.

### Named Rules

**The 16px Floor Rule.** Body text never goes below 16px on mobile. Older readers, stress reading, and low-light all override aesthetic preferences for tighter typography. Smaller is wrong.

**The Plain-Language Rule.** "Insurance" and "medical aid" are forbidden in display copy. Words to lean into: members, premium, covered, looked after, your flock. Words to ban: policy, claim, insured, underwriting, and any compliance-flavoured construction that turns the page into a brochure.

**The No-Thin-Weight Rule.** Body and small-size text never use weights below 400. Light and ultra-light treatments are permitted at very large display sizes only. Accessibility takes priority over aesthetic.

## 4. Elevation

Flat by default. Depth comes from tonal warm layering (Sun, a subtle warm-cream mid-tone, and Cloud), not from shadows. Cards, when used, are flat with tinted backgrounds. The single soft, warm-tinted shadow under the budgie character (visible in the reference illustration) is permitted as a character-grounding device. No card shadows, no hovering panels, no glassmorphism, no backdrop blur.

### Named Rules

**The Flat-Plus-Bird Rule.** The system has exactly one shadow: a soft, warm-tinted shadow that grounds the budgie character. Every other surface is flat. If a card, button, or panel has a drop shadow, it's wrong.

## 5. Components

Components to be documented in a future scan pass once a real component library exists. The seed system has no components yet.

## 6. Do's and Don'ts

### Do:
- **Do** lead every brand-identity surface with Sun. Daylight is the signature.
- **Do** anchor every screen with the single budgie character. The character does the work that bold colour alone cannot.
- **Do** reserve Coral exclusively for the panic action and live-emergency states. Its rarity is its meaning.
- **Do** keep body text at 16px or larger on mobile. Older audience and stress conditions override design vanity.
- **Do** use illustration as the primary visual language. Photography is permitted only in specific reassurance moments, never as the visual backbone.
- **Do** write copy as if texting a friend: short sentences, no jargon, no compliance phrasing.
- **Do** tint every neutral toward the warm hue family. White is Cloud; black is Ink.
- **Do** keep the system flat. The only shadow in the system is under the budgie.

### Don't:
- **Don't** use the words "insurance" or "medical aid" in display copy. Both are off-limits per PRODUCT.md.
- **Don't** lean on fear, urgency, or "South Africa is dangerous" framing. We sell competence, not anxiety.
- **Don't** use stock paramedic photography. It's the most-used, least-ownable trope in this category.
- **Don't** use red-and-black tactical branding. That's local armed-response, not Panicbudgie.
- **Don't** use the hero-metric template (big number, small label, supporting stats). It's a SaaS cliché.
- **Don't** use identical icon-card grids. Same-sized cards with icon + heading + text repeated endlessly is generic SaaS visual debt.
- **Don't** use drop shadows on cards or panels. The system is flat; only the budgie casts a shadow.
- **Don't** use glassmorphism or decorative backdrop blur. Banned.
- **Don't** use `border-left` or `border-right` greater than 1px as a coloured accent stripe. Banned.
- **Don't** use gradient text (`background-clip: text` on a gradient background). Banned.
- **Don't** use thin font weights (under 400) for body or small text.
- **Don't** use `#fff` or `#000`. Cloud and Ink only.
- **Don't** bring back the current site's stray colours (olive `#556b2f`, teal `#3b8183`, gold `#b8860b`). They never belonged.
- **Don't** treat the budgie as a logo mark. The character lives at scale, has personality, and earns space. A small mark in the top-left isn't enough.
- **Don't** make the budgie into a flock for its own sake. The single bird is the face. The flock is a worldview that shows up in copy and partner contexts, not a default visual treatment.
