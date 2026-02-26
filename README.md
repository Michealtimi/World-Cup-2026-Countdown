# Responsive Design & AdSense Placement

## Responsive Design Guidelines

- All main sections and components use Tailwind CSS responsive utilities (`sm:`, `md:`, `lg:`) for padding, margin, font size, and layout.
- Avoid hardcoded widths and heights; use responsive classes and relative units where possible.
- Test on mobile, tablet, and desktop. Adjust breakpoints as needed for optimal viewing.
- Use `px-2` or `px-4` for mobile padding, increasing to `sm:px-6` or `lg:px-8` for larger screens.
- Font sizes scale with screen size using Tailwind's responsive text classes.
- Custom CSS in `styles/globals.css` should not override Tailwind's responsive behavior.

## AdSense Placement

- Only one AdSense slot is present, placed after the hero/countdown section for maximum visibility and user experience.
- The previous sidebar AdSense slot has been removed for a cleaner, more focused layout.
- To update AdSense code, replace the placeholder in `app/page.tsx` (see the section after the hero/countdown).

## Accessibility & Theming

- All interactive elements have accessible labels and focus states.
- Dark mode is supported via Tailwind's `dark:` classes and system preference detection.

## Further Recommendations

- Regularly audit new components for responsiveness and accessibility.
- Use semantic HTML and ARIA attributes where appropriate.
