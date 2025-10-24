# 📦 Zustand Stores - Readly State Management

## 🎯 Overview

This folder contains all Zustand stores for the Readly blog platform. Zustand is a lightweight, modern state management solution that's much simpler than Redux.

## 📁 Store Files

### 1. **useBlogStore.js** 📝

Manages all blog-related data and operations.

**State:**

```javascript
{
  blogs: [],           // All blogs
  myBlogs: [],        // Current user's blogs
  featuredBlogs: [],  // Featured blogs
  loading: false,     // Loading state
  error: null         // Error messages
}
```

**Actions:**

- `fetchBlogs(search, category)` - Get all blogs with filters
- `fetchMyBlogs(userEmail, token)` - Get user's blogs
- `fetchFeaturedBlogs()` - Get featured blogs
- `addBlog(blogData)` - Create new blog
- `updateBlog(blogId, data)` - Update existing blog
- `clearBlogs()` - Clear all blog data

**Features:**

- ✅ Persists to localStorage (20 blogs max)
- ✅ DevTools integration
- ✅ Automatic loading state

---

### 2. **useWishlistStore.js** ❤️

Manages user's wishlist/saved blogs.

**State:**

```javascript
{
  wishlist: [],    // Wishlisted blogs
  loading: false,  // Loading state
  error: null      // Error messages
}
```

**Actions:**

- `fetchWishlist(userEmail, token)` - Get user's wishlist
- `addToWishlist(wishData)` - Add blog to wishlist
- `removeFromWishlist(wishlistId)` - Remove from wishlist
- `isInWishlist(blogId)` - Check if blog is wishlisted
- `clearWishlist()` - Clear wishlist

**Features:**

- ✅ Real-time wishlist checking
- ✅ Optimistic updates
- ✅ Error handling

---

### 3. **useCommentStore.js** 💬

Manages blog comments.

**State:**

```javascript
{
  comments: [],     // All comments
  myComments: [],  // User's comments
  loading: false,  // Loading state
  error: null      // Error messages
}
```

**Actions:**

- `fetchComments()` - Get all comments
- `fetchMyComments(userEmail, token)` - Get user's comments
- `fetchBlogComments(blogId)` - Get comments for a blog
- `addComment(commentData)` - Add new comment
- `clearComments()` - Clear all comments

**Features:**

- ✅ Filtered by blog or user
- ✅ Real-time comment updates
- ✅ Error handling

---

### 4. **useUIStore.js** 🎨

Manages UI state and user preferences.

**State:**

```javascript
{
  theme: 'light',           // Current theme
  sidebarOpen: false,       // Sidebar state
  searchQuery: '',          // Search input
  selectedCategory: 'all'   // Category filter
}
```

**Actions:**

- `setTheme(theme)` - Set theme ('light' or 'dark')
- `toggleTheme()` - Toggle between themes
- `setSidebarOpen(isOpen)` - Set sidebar state
- `toggleSidebar()` - Toggle sidebar
- `setSearchQuery(query)` - Set search query
- `setSelectedCategory(category)` - Set category filter
- `resetFilters()` - Reset search and category

**Features:**

- ✅ Persists to localStorage
- ✅ Theme persistence
- ✅ Filter state management

---

## 🚀 Quick Start

### 1. Import the Store

```javascript
import useBlogStore from "../stores/useBlogStore";
```

### 2. Use in Component

```javascript
const MyComponent = () => {
  const { blogs, loading, fetchBlogs } = useBlogStore();

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  if (loading) return <Loading />;

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};
```

### 3. Selective Subscription (Performance)

```javascript
// Only re-render when blogs change
const blogs = useBlogStore((state) => state.blogs);

// Only re-render when loading changes
const loading = useBlogStore((state) => state.loading);
```

---

## 📖 Usage Examples

### Example 1: Fetch and Display Blogs

```javascript
import useBlogStore from "./stores/useBlogStore";

function BlogList() {
  const { blogs, loading, fetchBlogs } = useBlogStore();

  useEffect(() => {
    fetchBlogs("", "all"); // fetch all blogs
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>{blog.title}</div>
      ))}
    </div>
  );
}
```

### Example 2: Add to Wishlist

```javascript
import useWishlistStore from "./stores/useWishlistStore";

function WishlistButton({ blog }) {
  const { addToWishlist, isInWishlist } = useWishlistStore();
  const wishlisted = isInWishlist(blog._id);

  const handleClick = async () => {
    await addToWishlist({
      blogId: blog._id,
      title: blog.title,
      category: blog.category,
      email: user.email,
    });
  };

  return (
    <button onClick={handleClick}>
      {wishlisted ? "❤️ Wishlisted" : "🤍 Add to Wishlist"}
    </button>
  );
}
```

### Example 3: Theme Toggle

```javascript
import useUIStore from "./stores/useUIStore";

function ThemeToggle() {
  const { theme, toggleTheme } = useUIStore();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
```

### Example 4: Add Comment

```javascript
import useCommentStore from "./stores/useCommentStore";

function CommentForm({ blogId }) {
  const { addComment } = useCommentStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment({
      blogId,
      userName: user.displayName,
      userEmail: user.email,
      comment: e.target.comment.value,
      createdAt: new Date(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="comment" />
      <button type="submit">Post Comment</button>
    </form>
  );
}
```

---

## 🎯 Best Practices

### 1. **Use Selective Subscriptions**

Only subscribe to the data you need:

```javascript
// ❌ Bad - re-renders on any state change
const { blogs, loading, error } = useBlogStore();

// ✅ Good - only re-renders when blogs change
const blogs = useBlogStore((state) => state.blogs);
```

### 2. **Handle Errors**

Always handle errors from store actions:

```javascript
try {
  await addBlog(blogData);
  toast.success("Blog added!");
} catch (error) {
  toast.error("Failed to add blog");
}
```

### 3. **Clear Store on Logout**

Clear user-specific data when user logs out:

```javascript
const { clearBlogs } = useBlogStore();
const { clearWishlist } = useWishlistStore();
const { clearComments } = useCommentStore();

const handleLogout = () => {
  clearBlogs();
  clearWishlist();
  clearComments();
  // Then logout user
};
```

### 4. **Use Loading States**

Always show loading states for better UX:

```javascript
const { blogs, loading } = useBlogStore();

if (loading) return <Loading />;
return <BlogList blogs={blogs} />;
```

---

## 🔧 DevTools

Zustand integrates with Redux DevTools for debugging:

1. Install Redux DevTools extension in your browser
2. Open DevTools
3. Select "Redux" tab
4. See all state changes in real-time
5. Time-travel through state history

---

## 📚 Additional Resources

- **Zustand Docs**: https://docs.pmnd.rs/zustand
- **Implementation Guide**: See `../ZUSTAND_IMPLEMENTATION.md`
- **Installation Steps**: See `../ZUSTAND_INSTALLATION_STEPS.md`

---

## ✅ Summary

You have **4 powerful stores** managing your entire application state:

1. 📝 **useBlogStore** - Blogs management
2. ❤️ **useWishlistStore** - Wishlist management
3. 💬 **useCommentStore** - Comments management
4. 🎨 **useUIStore** - UI state & preferences

All stores include:

- ✅ Type-safe state management
- ✅ Automatic loading states
- ✅ Error handling
- ✅ DevTools integration
- ✅ Persistent storage (where needed)
- ✅ Clean, simple API

Happy coding! 🚀
