# Infinite Scroll

A demonstration project showcasing both infinite scroll and load more button implementations.

## Tech Stack

|  next   | react | @tanstack/react-query | react-intersection-observer |
| :-----: | :---: | :-------------------: | :-------------------------: |
| 14.2.16 |  ^18  |       ^5.59.20        |           ^9.13.1           |

## Project Structure

```text
📦src
 ┣ 📂apis
 ┃ ┗ 📜item.ts # API endpoints and data fetching
 ┣ 📂app
 ┃ ┣ 📜layout.tsx # Root layout component
 ┃ ┗ 📜page.tsx # Landing page
 ┣ 📂components
 ┃ ┣ 📜InfiniteScrollList.tsx # Handles infinite scrolling
 ┃ ┣ 📜LoadMoreList.tsx # Manages load more functionality
 ┃ ┗ 📜Providers.tsx # React Query configuration
 ┣ 📂hooks
 ┃ ┗ 📜useInfiniteScroll.ts # Custom hook for scroll logic
 ┗ 📂types
 ┃ ┗ 📜item.ts # TypeScript interfaces and types
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.
