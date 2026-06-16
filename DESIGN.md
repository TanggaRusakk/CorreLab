---
name: CorreLab
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#45464d'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2c'
  on-tertiary-container: '#008ebf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-uppercase:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-mono:
    fontFamily: monospace
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  sidebar-width: 260px
  gutter: 24px
---

## Brand & Style
The design system for this data analytics platform is built on the principles of **Precision Minimalism**. It is designed for high-performance enterprise environments where data density must coexist with visual clarity. The brand personality is authoritative, reliable, and sophisticated, targeting data scientists and executive stakeholders who require a "heads-up display" experience that reduces cognitive load.

The aesthetic follows a **Modern Corporate** direction:
- **Clarity over Decoration:** Every UI element serves a functional purpose.
- **Data-First Hierarchy:** UI chrome is recessed to allow analytical visualizations to take center stage.
- **Institutional Trust:** A refined palette and structured layout evoke the feeling of a high-end financial or scientific instrument.

## Colors
This design system utilizes a sophisticated monochromatic base with high-contrast accents for actionability.

- **Primary (Deep Navy):** Used for global navigation, primary buttons, and heavy text. It establishes the "anchor" of the interface.
- **Secondary (Slate):** Used for supporting text, icons, and non-essential UI flourishes.
- **Background (Slate-50):** A cool-toned off-white that reduces eye strain during long analytical sessions compared to pure white.
- **Tertiary (Sky Blue):** Introduced as a functional accent for interactive states, progress bars, and data highlights.
- **Borders:** A consistent, low-contrast Slate-200 (#E2E8F0) is used to define zones without creating visual noise.

## Typography
The typography system relies exclusively on **Inter** to leverage its exceptional legibility in data-heavy contexts.

- **Scale:** A tight scale is used to ensure maximum information density without sacrificing hierarchy.
- **Weight:** Semi-bold (600) and Bold (700) are reserved for structural headers and primary labels. 
- **Labels:** Small, uppercase labels with increased letter spacing are used for table headers and section titles to distinguish them from editable data.
- **Monospace:** Technical parameters and model configurations use a system monospace font for character alignment.

## Layout & Spacing
This design system utilizes a **Fixed-Fluid Hybrid Grid**. 

- **Desktop (1440px+):** A 12-column grid with 24px gutters. The Sidebar is fixed at 260px, while the main content area expands to a maximum width of 1440px.
- **Information Density:** Spacing follows a 4px baseline. Components like data tables use "Compact" (8px vertical) and "Comfortable" (16px vertical) padding modes.
- **Reflow:** On Tablet, the sidebar collapses into an icon-only rail (72px). On Mobile, the layout shifts to a single-column stack with 16px margins.

## Elevation & Depth
Depth is signaled through **Tonal Layering** and **Subtle Micro-Shadows** rather than heavy skeuomorphism.

- **Level 0 (Canvas):** The Slate-50 background.
- **Level 1 (Cards/Panels):** Pure white (#FFFFFF) surfaces with a 1px Slate-200 border. This is the primary container for data.
- **Level 2 (Modals/Popovers):** Pure white with a "Soft Ambient" shadow: `0px 4px 20px rgba(15, 23, 42, 0.08)`.
- **Interactions:** Drag-and-drop zones use a dashed border state in the Secondary color with a subtle inner glow when active.

## Shapes
The shape language is "Soft" (0.25rem / 4px) to maintain a professional, systematic feel. 

- **Small Components:** Checkboxes and small buttons use a 4px radius.
- **Containers:** Large cards and dashboard panels use an 8px radius (`rounded-lg`) to soften the overall interface.
- **Data Points:** In charts, tooltips use a 4px radius, while circular markers remain perfectly round for geometric precision.

## Components
- **Sidebar Navigation:** Deep Navy background with Slate-400 icons. Active states use a "Left-Border" highlight in Tertiary Sky Blue.
- **Data Tables:** High-density rows with 1px bottom borders. Hover states trigger a subtle Slate-50 tint. Header cells use `label-uppercase` style.
- **Primary Buttons:** Deep Navy fill with White text. Hover state is a slight lightening of the navy.
- **Model Configuration Panels:** Right-aligned drawers or side-panels that use Level 2 elevation. Input fields are minimalist: 1px border, 4px radius, with Focus states using a 2px Sky Blue ring.
- **Analytical Charts:** Use a specific categorical palette (Navy, Sky Blue, Teal, Slate) to ensure visual cohesion with the UI.
- **Empty States / Drag-and-Drop:** Uses the Background Slate-50 with a dashed border and centered secondary-color iconography.