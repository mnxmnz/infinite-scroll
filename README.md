# Infinite Scroll

![preview](./images/preview.gif)

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
