# Readly - Modern Blog Platform

Readly is a full-featured blog platform where users can create, read, and interact with blog posts. The application provides a comprehensive blogging experience with features like wishlist management, commenting system, and a personalized dashboard.

## Live Demo

https://readly-8b506.web.app/

## Features

### User Features

- Create and publish blog posts with categories
- Browse all blogs with search and filter capabilities
- Save favorite blogs to wishlist
- Comment on blog posts
- Personalized dashboard to manage your content
- View your blogs, comments, and wishlist in one place
- Update and edit your blog posts

### Dashboard Features

- Overview statistics (total blogs, wishlist count, comments)
- My Blogs - View and manage all your published blogs
- My Wishlist - Access your saved blogs
- My Comments - Track all your comments
- Edit Profile - Update your display name and photo

### Technical Features

- Responsive design for all screen sizes
- Dark mode support with theme persistence
- Real-time updates
- Secure authentication with Firebase
- Optimized performance with state management

## Technology Stack

### Core Technologies

- React 19 - Modern UI library
- Vite - Fast build tool and dev server
- React Router 7 - Client-side routing
- Firebase - Authentication and hosting
- Axios - HTTP client for API requests

### UI Framework

- Tailwind CSS - Utility-first CSS framework
- DaisyUI - Component library for Tailwind

### State Management

- Zustand - Lightweight state management solution

### Additional Libraries

- Framer Motion - Animation library
- React Hot Toast - Toast notifications
- SweetAlert2 - Beautiful alerts and modals
- Lottie React - Animation renderer
- React Type Animation - Typing animation effects
- React Tooltip - Accessible tooltips
- React Awesome Reveal - Scroll animations
- React Fast Marquee - Smooth scrolling text
- React Icons - Icon library
- React Loading Skeleton - Loading placeholders

## Why Zustand for State Management?

We chose Zustand over other popular state management solutions like Redux, MobX, or Context API for several important reasons:

### Simplicity and Less Boilerplate

Redux requires significant setup with actions, reducers, action creators, and often middleware. Zustand eliminates this complexity with a simple, straightforward API. You can create a store and start using it in minutes without writing extensive boilerplate code.

### Better Performance

Unlike React Context which can cause unnecessary re-renders across the component tree, Zustand uses a subscription model that ensures components only re-render when the specific data they use actually changes. This results in better performance, especially in larger applications.

### Smaller Bundle Size

Zustand is extremely lightweight at around 1KB gzipped, compared to Redux at 6KB or MobX at 16KB. This means faster load times and better user experience, particularly on slower connections.

### No Provider Wrapper Needed

Unlike Redux or Context API, Zustand does not require wrapping your application in providers. You simply import the store and use it anywhere in your application, making the code cleaner and more maintainable.

### Built-in DevTools Support

Zustand integrates seamlessly with Redux DevTools, giving you powerful debugging capabilities without the complexity of Redux itself.

### Modern and Actively Maintained

Zustand is built with modern React patterns in mind, including hooks and concurrent rendering. It is actively maintained with regular updates and a growing community.

### Persistent Storage Out of the Box

Zustand provides middleware for localStorage persistence with minimal configuration, whereas Redux requires additional libraries like redux-persist.

### Easy Learning Curve

For developers new to state management, Zustand is much easier to learn than Redux. The concepts are simpler and the API is more intuitive, making it perfect for teams of all skill levels.

These advantages made Zustand the ideal choice for Readly, allowing us to build a robust, performant application without the overhead of more complex solutions.

## Project Structure

```
readly-client/
├── src/
│   ├── stores/              # Zustand state management
│   │   ├── useBlogStore.js
│   │   ├── useWishlistStore.js
│   │   ├── useCommentStore.js
│   │   └── useUIStore.js
│   ├── Pages/               # Application pages
│   │   ├── Dashboard/       # Dashboard components
│   │   ├── Home/            # Home page components
│   │   ├── AllBlogs/        # All blogs page
│   │   ├── Shared/          # Shared components
│   │   └── ...
│   ├── Layouts/             # Layout components
│   ├── contexts/            # React contexts
│   ├── firebase/            # Firebase configuration
│   └── router/              # Routing configuration
├── public/                  # Static assets
└── package.json
```

## Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository

```bash
git clone <repository-url>
cd readly-client
```

2. Install dependencies

```bash
npm install
```

3. Configure Firebase

- Create a Firebase project at https://console.firebase.google.com
- Enable Authentication (Email/Password and Google Sign-In)
- Copy your Firebase configuration
- Create a `.env` file in the root directory with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
```

6. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## State Management with Zustand

The application uses four main stores:

### Blog Store

Manages all blog-related data including fetching, creating, and updating blogs. Persists recent blogs to localStorage for better performance.

### Wishlist Store

Handles wishlist operations including adding, removing, and checking if a blog is wishlisted.

### Comment Store

Manages comments including fetching user comments and adding new comments to blogs.

### UI Store

Controls UI state such as theme preferences, search queries, and filter selections. Persists user preferences across sessions.

## Key Features Implementation

### Authentication

Implemented using Firebase Authentication with support for email/password and Google sign-in. Protected routes ensure only authenticated users can access certain features.

### Dashboard

A comprehensive dashboard built with DaisyUI components featuring:

- Sidebar navigation with responsive drawer for mobile
- Statistics cards showing blog count, wishlist items, and comments
- Recent blogs with quick actions
- Profile management

### Theme Support

Dark and light themes are managed through Zustand with automatic persistence to localStorage. Theme preferences are maintained across sessions.

### Responsive Design

Fully responsive layout using Tailwind CSS breakpoints, ensuring optimal viewing experience on mobile, tablet, and desktop devices.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please open an issue in the repository.
