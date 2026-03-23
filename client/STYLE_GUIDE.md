# Frontend Style Guide

`client/src/index.css` is now the shared style layer for the whole app.
Routing is now handled with `react-router-dom`.

Use it for:

- design tokens like colors, spacing, radius, shadows, and typography
- layout helpers like `.container`, `.page`, `.page-main`, and `.section`
- reusable text helpers like `.display-title`, `.section-title`, `.text-body`, and `.text-muted`
- reusable surfaces like `.card`
- common buttons like `.button`, `.button-primary`, and `.button-secondary`
- shared auth form classes like `.auth-shell`, `.auth-form`, `.field`, and `.input`

## Folder pattern

Create pages like this:

```text
src/
  pages/
    Home/
      HomePage.jsx
      HomePage.css
    Login/
      LoginPage.jsx
      LoginPage.css
    Signup/
      SignupPage.jsx
      SignupPage.css
```

Rules:

- keep shared styles in `index.css`
- keep page-specific styling inside that page's own CSS file
- avoid putting full-page custom styling back into `index.css`
- add page routes in `src/App.jsx`

## Routes folder

Use `src/routes` for route setup and guards:

```text
src/
  routes/
    AppRoutes.jsx
    PublicRoute.jsx
    ProtectedRoute.jsx
    auth.js
```

Purpose:

- `AppRoutes.jsx`: all route definitions live here
- `PublicRoute.jsx`: blocks pages like login and signup when token exists
- `ProtectedRoute.jsx`: blocks private pages when token is missing
- `auth.js`: shared cookie token helper

## Shared classes

### Layout

- `.page`: full page wrapper
- `.page-main`: main content area with vertical padding
- `.container`: centered content with max width
- `.section`: shared section block spacing

### Typography

- `.eyebrow`: small uppercase label
- `.display-title`: large page heading
- `.section-title`: medium heading
- `.text-body`: default paragraph text
- `.text-muted`: lighter helper text

### Surfaces

- `.card`: reusable panel with border, radius, and shadow

### Buttons

- `.button`: base button class
- `.button-primary`: filled action button
- `.button-secondary`: soft secondary button
- `.link-button`: text-only action button

### Forms and auth layout

- `.auth-page`: page wrapper for auth screens
- `.auth-shell`: two-column auth layout
- `.auth-hero`: left content panel
- `.auth-panel`: right form panel
- `.auth-form`: shared form spacing
- `.field`: label + input group
- `.field-label`: label style
- `.input`: reusable input style
- `.auth-row`: inline row for checkbox and helper actions
- `.auth-checkbox`: checkbox label row
- `.auth-switch`: bottom switch text

## Example usage

```jsx
<main className="page-main">
  <div className="container">
    <section className="section">
      <p className="eyebrow">Dashboard</p>
      <h1 className="display-title">Your resumes</h1>
      <p className="text-body">Manage everything from one place.</p>
      <div className="card">Content here</div>
    </section>
  </div>
</main>
```

## Styling approach

When you build new pages:

1. first try shared classes from `index.css`
2. only add page CSS when the style is unique to that page
3. if you repeat the same style in multiple pages, move it back into `index.css`
