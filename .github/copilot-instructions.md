# Copilot Rules - Project Standards

## Components
- Always use arrow functions
- Use TypeScript for props
- Keep components under 25 lines when possible
- Extract reusable logic into hooks

## Styling
- Use Tailwind CSS only
- No inline styles unless dynamic
- Maintain consistent spacing (px-4 py-2)
- Use rounded-md for UI consistency

## Buttons
- Primary buttons MUST use:
  px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800

## Forms
- Always include label + htmlFor
- Inputs must have id
- Use aria-describedby for accessibility
- Display errors with role="alert"

## UI Components
- Prefer using shadcn/ui components before creating custom ones

## Code Structure
- Prefer composition over prop drilling
- Keep JSX clean and readable
- Avoid deep nesting

## Reusability
- Extract repeated UI into reusable components
- Create custom hooks for shared logic

## Rule Updates
- If a pattern is repeated more than twice → add it here

## Layout
- All pages must use:
  max-w-7xl mx-auto px-4

## Cards (Product / Bin Items)
- All cards must include:
  rounded-xl shadow-md p-4
- Display name, price, and status clearly
- Use consistent spacing between elements

## Images
- Always include alt text
- Use rounded-lg for product images
- Maintain consistent sizing (w-full h-48 object-cover)

## Lists / Grids
- Use grid layout for product displays:
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4

## Data Fetching
- Always use async/await (no .then())
- Handle loading and error states explicitly