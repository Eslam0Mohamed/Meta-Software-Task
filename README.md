# Product Explorer

A responsive React Single Page Application (SPA) that fetches products from the Fake Store API and allows users to search and filter products in real-time.

## Live Demo

[Live Demo](https://meta-software-task-chi.vercel.app/)

## Repository

[GitHub Repository](https://github.com/Eslam0Mohamed/Meta-Software-Task.git)

## Features

- Fetch products from Fake Store API
- Real-time search functionality
- Category filtering
- Loading state handling
- Error state handling
- Empty state message
- Responsive design for Mobile, Tablet, and Desktop
- Reusable React components
- Optimized filtering using React hooks

## Tech Stack

- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Fake Store API

## Project Structure

```text
src
├── components
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   ├── CategoryTabs.jsx
│   ├── Loading.jsx
│   └── Error.jsx
│
├── hooks
│   └── useProducts.js
│
├── services
│   └── api.js
│
├── assets
│
├── pages
│
└── App.jsx
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd <project-folder>
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## API

This project uses the Fake Store API:

https://fakestoreapi.com/products

## Optimization

### useMemo

Used to optimize:

- Product filtering
- Category generation

### React.memo

Used to prevent unnecessary re-renders of product cards.

## Challenges Faced

### Search and Category Filtering

Combining both filters while keeping the logic clean and maintainable.

### Responsive Design

Ensuring a consistent user experience across different screen sizes.

## Future Improvements

- Product sorting
- Pagination
- Dark mode
- Product details page

## Author

**Eslam Mohamed**

Frontend Developer
