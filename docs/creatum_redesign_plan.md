# Creatum Landing Page Redesign Plan  
*Inspired by Fiddle.Digital's minimal, high-impact style*

---

## 1. General Style & Layout

- **Color Palette:**  
  - Background: Pure black (#111 or #000)  
  - Text: Crisp white (#fff)  
  - Accents: Use a single highlight color> Creatum orange sparingly for CTAs and interactive elements.
- **Typography:**  
  - Use a geometric sans-serif (e.g., `Inter`, `Space Grotesk`, or `Montserrat`) for a modern, tech-forward look.
  - Large, bold headlines.  
  - Small, spaced-out subtext in uppercase or with wide letter-spacing.
- **Spacing:**  
  - Generous whitespace.  
  - Centered layouts with content blocks floating in space.
- **Graphical Elements:**  
  - Abstract, minimal line art and geometric shapes (SVGs or CSS).
  - Animated arrows, circles, or brackets to guide attention.
- **Animation:**  
  - Smooth fade-ins, slide-ups, and subtle parallax on scroll.
  - Hover effects: text color shifts, underline grows, icon rotates, etc.
- **Cursor:**  
  - Custom cursor (e.g., a small circle or dot) for a futuristic feel.

---

## 2. Section-by-Section Redesign

### Header / Navigation

- **Layout:**  
  - Logo left, nav links right, all in a single line, spaced far apart.
  - Nav links: minimal, uppercase, spaced out.
- **Animation:**  
  - Fade in from top on page load.
  - Underline or highlight nav link on hover with a smooth animation.
- **Graphical Elements:**  
  - Minimal line or dot separators between nav items.
- **Interaction:**  
  - Sticky header, but with a subtle shadow or glow when scrolling.

---

### Hero Section

- **Layout:**  
  - Centered, massive headline (e.g., "PROCUREMENT, UPGRADED").
  - Subheadline below, smaller, spaced out.
  - Main CTA button: large, outlined, with a subtle glow or animated border.
  - Minimal icon or abstract arrow (like in the reference image) above or beside the headline.
- **Animation:**  
  - Headline and subheadline fade/slide in with a slight delay.
  - CTA button pulses or glows gently.
  - Arrow icon animates (e.g., bounces or rotates) to draw attention.
- **Graphical Elements:**  
  - Use SVG for the arrow or abstract shape.
- **Interaction:**  
  - Clicking CTA opens a modal with a sleek, minimal email capture form (centered, dark overlay, animated in).

---

### Features Section

- **Layout:**  
  - Three feature blocks in a horizontal row (on desktop), stacked on mobile.
  - Each block: icon (minimal, line-based SVG), bold title, short description.
- **Animation:**  
  - Each feature block animates in (e.g., slides up or fades in) with a staggered delay.
  - Icons animate on hover (e.g., rotate, scale, or color shift).
- **Graphical Elements:**  
  - Connect feature blocks with animated lines or dots (SVG or CSS).
- **Interaction:**  
  - Hovering a feature highlights it with a subtle glow or border animation.

---

### How It Works Section

- **Layout:**  
  - Horizontal or vertical stepper with 3 steps.
  - Each step: large number or icon, bold title, short description.
  - Steps connected by animated lines/arrows.
- **Animation:**  
  - Steps animate in sequence as user scrolls to this section.
  - Connecting lines draw themselves (SVG path animation).
- **Graphical Elements:**  
  - Use minimal, animated SVG arrows or lines.
- **Interaction:**  
  - Hovering a step slightly enlarges it and highlights the connecting line.

---

### Benefits (Before/After) Section

- **Layout:**  
  - Two columns: "Before" and "After", each in a floating card.
  - Cards separated by a vertical animated line or arrow.
- **Animation:**  
  - Cards fade/slide in from left/right.
  - Animated line/arrow draws itself as section enters viewport.
- **Graphical Elements:**  
  - Use icons or small illustrations for each bullet point.
- **Interaction:**  
  - Hovering a card slightly lifts it and increases shadow/glow.

---

### CTA Section

- **Layout:**  
  - Centered, bold headline.
  - Large CTA button, matching hero style.
  - Minimal subtext or secondary link below.
- **Animation:**  
  - Section fades in with a slight upward motion.
  - CTA button pulses or glows.
- **Graphical Elements:**  
  - Abstract shape or arrow pointing to the button.
- **Interaction:**  
  - Clicking CTA opens the same modal as hero.

---

### FAQ Section

- **Layout:**  
  - List of questions, each in a minimal card or underlined row.
  - Only one answer open at a time (accordion).
- **Animation:**  
  - Questions fade in sequentially.
  - Answer expands/collapses with smooth height and opacity transition.
- **Graphical Elements:**  
  - Plus/minus icon animates on toggle.
- **Interaction:**  
  - Clicking a question opens/closes it, closes others.

---

### About Section

- **Layout:**  
  - Centered or left-aligned block with bold heading and paragraph.
  - Minimalist, with lots of whitespace.
- **Animation:**  
  - Fade/slide in on scroll.
- **Graphical Elements:**  
  - Subtle line or dot motif in the background.
- **Interaction:**  
  - Links animate underline on hover.

---

### Footer

- **Layout:**  
  - Small, centered text.
  - Minimal links, spaced out.
- **Animation:**  
  - Fade in from bottom.
- **Graphical Elements:**  
  - Thin line above footer.
- **Interaction:**  
  - Links highlight on hover.

---

## 3. Additional Notes

- **Responsiveness:**  
  - All layouts must gracefully stack and scale for mobile.
- **Performance:**  
  - Use SVGs and CSS for graphics/animations where possible.
- **Accessibility:**  
  - Ensure high contrast, focus states, and keyboard navigation.
- **JS Structure:**  
  - Keep all interactivity (modals, FAQ, animations) in script.js.
- **CSS Structure:**  
  - Use BEM or similar naming for new classes.
  - Consider CSS variables for colors and spacing.

---

## 4. Example Animation/Interaction Ideas

- **Page Load:**  
  - Fade in header, then hero, then each section in sequence.
- **Scroll:**  
  - Parallax effect on background shapes.
  - Sections animate in as they enter viewport.
- **Hover:**  
  - Buttons glow, icons animate, links underline.
- **Modal:**  
  - Smooth scale/fade in/out, dark overlay.

---

Let me know if you want to start with a specific section, or if you'd like a prioritized implementation plan! 