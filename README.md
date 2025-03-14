# Infinite Scroll

## useInfiniteScroll

`useInfiniteScroll` hook simplifies the implementation of infinite scrolling functionality.

### Key Features

1. **Automatic Data Loading**: Automatically loads the next page of data when the specified element becomes visible as the user scrolls.
2. **Manual Trigger Support**: Provides a `triggerNextPage` function to manually trigger loading of the next page.
3. **Intersection Observer Integration**: Uses `react-intersection-observer` to detect element visibility.
4. **React Query Integration**: Leverages `@tanstack/react-query`'s `useInfiniteQuery` for data fetching and caching.

### Parameters

- `queryKey`: React Query's query key
- `queryFn`: Function to fetch data (takes page number and page size as arguments)
- `limit`: Number of items per page (default: 20)
- `autoLoad`: Whether to enable automatic loading (default: true)

### Return Values

- `targetRef`: Ref to attach to the element that triggers loading when visible
- `isTargetVisible`: Whether the target element is visible
- `data`: All loaded data
- `isFetchingNextPage`: Whether the next page is currently loading
- `hasNextPage`: Whether there are more pages to load
- `isLoading`: Whether initial loading is in progress
- `triggerNextPage`: Function to manually trigger loading of the next page

## Getting Started

### Installation

1. Clone the repository

```bash
git clone https://github.com/mnxmnz/infinite-scroll.git
```

2. Navigate to the project directory

```bash
cd infinite-scroll
```

3. Install dependencies

```bash
npm install
```

### Running the Application

To start the development server

```bash
npm run dev
```

The application will open in your default browser at `http://localhost:3000`

### Mock API Configuration

The application uses MSW (Mock Service Worker) to mock API endpoints.

You can control the Mock API behavior using the `NEXT_PUBLIC_API_MOCKING` environment variable.

- Set `NEXT_PUBLIC_API_MOCKING=enabled` to enable Mock API
- Set `NEXT_PUBLIC_API_MOCKING=disabled` or leave it unset to disable Mock API

The Mock API is enabled by default in the development environment through `.env.development`.
