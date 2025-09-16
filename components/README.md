# Responsive Components

This directory contains responsive React components built with Tailwind CSS for modern web applications.

## Components

### 1. Navbar (`navbar.tsx`)

A fully responsive navigation bar with mobile hamburger menu functionality.

#### Features
- **Responsive Design**: Adapts seamlessly from mobile to desktop
- **Full-Height Mobile Menu**: Slides in from the right with full screen height
- **Scrollable Content**: Mobile menu content scrolls if it exceeds screen height
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Body Scroll Lock**: Prevents background scrolling when mobile menu is open
- **Language Toggle**: Built-in language switching functionality
- **Smooth Animations**: CSS transitions and animations for better UX

#### Usage
```tsx
import Navbar from "@/components/navbar"

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        {/* Your content */}
      </main>
    </>
  )
}
```

#### Props
The navbar uses the `useLanguage` hook from your language provider. Make sure to wrap your app with the `LanguageProvider`.

### 2. Responsive Container (`responsive-container.tsx`)

A comprehensive set of responsive container components for consistent layouts.

#### Components

##### ResponsiveContainer
The base container component with full customization options.

```tsx
<ResponsiveContainer
  maxWidth="2xl"        // sm | md | lg | xl | 2xl | full
  padding="md"          // none | sm | md | lg | xl
  center={true}         // boolean
  as="div"              // div | section | article | main | aside
  className="custom"     // additional classes
>
  Content here
</ResponsiveContainer>
```

##### PageContainer
Pre-configured for main page content.

```tsx
<PageContainer>
  <h1>Page Title</h1>
  <p>Page content...</p>
</PageContainer>
```

##### SectionContainer
Perfect for content sections with built-in vertical padding.

```tsx
<SectionContainer>
  <h2>Section Title</h2>
  <p>Section content...</p>
</SectionContainer>
```

##### CardContainer
Styled container with card-like appearance.

```tsx
<CardContainer>
  <h3>Card Title</h3>
  <p>Card content...</p>
</CardContainer>
```

##### GridContainer
Responsive grid layout component.

```tsx
<GridContainer cols="3">  // 1 | 2 | 3 | 4 | auto
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</GridContainer>
```

##### FlexContainer
Flexible layout component with various alignment options.

```tsx
<FlexContainer
  direction="row"        // row | col | row-reverse | col-reverse
  align="center"         // start | center | end | stretch | baseline
  justify="between"      // start | center | end | between | around | evenly
  wrap={true}           // boolean
>
  <div>Flex item 1</div>
  <div>Flex item 2</div>
</FlexContainer>
```

## Responsive Breakpoints

The components use Tailwind CSS breakpoints:
- `sm`: 640px and up
- `md`: 768px and up  
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

## Accessibility Features

### Navbar
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

### Containers
- Semantic HTML elements
- Proper heading hierarchy
- Focus indicators
- Color contrast compliance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Dependencies

- React 18+
- Next.js 14+
- Tailwind CSS 3.4+
- Lucide React (for icons)
- Radix UI components

## Demo

Visit `/demo` to see all components in action with various responsive layouts and configurations.

## Customization

All components accept custom `className` props and can be styled using Tailwind CSS classes. The components are built with CSS custom properties for easy theming.

## Performance

- Optimized for Core Web Vitals
- Minimal JavaScript bundle size
- CSS-only animations where possible
- Efficient re-renders with React hooks
