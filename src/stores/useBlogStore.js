import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";

const useBlogStore = create(
  devtools(
    persist(
      (set) => ({
        // State
        blogs: [],
        myBlogs: [],
        featuredBlogs: [],
        loading: false,
        error: null,

        // Actions
        setBlogs: (blogs) => set({ blogs }),

        setMyBlogs: (blogs) => set({ myBlogs: blogs }),

        setFeaturedBlogs: (blogs) => set({ featuredBlogs: blogs }),

        setLoading: (loading) => set({ loading }),

        setError: (error) => set({ error }),

        // Fetch all blogs
        fetchBlogs: async (search = "", category = "") => {
          set({ loading: true, error: null });
          try {
            let url = "https://readly-server.vercel.app/blogs";
            const params = new URLSearchParams();
            if (search) params.append("search", search);
            if (category && category !== "all")
              params.append("category", category);
            if (params.toString()) url += `?${params.toString()}`;

            const response = await axios.get(url);
            set({ blogs: response.data, loading: false });
            return response.data;
          } catch (error) {
            set({ error: error.message, loading: false });
            throw error;
          }
        },

        // Fetch user's blogs
        fetchMyBlogs: async (userEmail, token) => {
          set({ loading: true, error: null });
          try {
            const response = await axios.get(
              `https://readly-server.vercel.app/my-blogs?email=${userEmail}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            set({ myBlogs: response.data, loading: false });
            return response.data;
          } catch (error) {
            set({ error: error.message, loading: false });
            throw error;
          }
        },

        // Fetch featured blogs
        fetchFeaturedBlogs: async () => {
          set({ loading: true, error: null });
          try {
            const response = await axios.get(
              "https://readly-server.vercel.app/featured-blogs"
            );
            set({ featuredBlogs: response.data, loading: false });
            return response.data;
          } catch (error) {
            set({ error: error.message, loading: false });
            throw error;
          }
        },

        // Add a new blog
        addBlog: async (blogData) => {
          set({ loading: true, error: null });
          try {
            const response = await axios.post(
              "https://readly-server.vercel.app/blogs",
              blogData
            );
            set((state) => ({
              blogs: [response.data, ...state.blogs],
              myBlogs: [response.data, ...state.myBlogs],
              loading: false,
            }));
            return response.data;
          } catch (error) {
            set({ error: error.message, loading: false });
            throw error;
          }
        },

        // Update a blog
        updateBlog: async (blogId, updatedData) => {
          set({ loading: true, error: null });
          try {
            await axios.put(
              `https://readly-server.vercel.app/blogs/${blogId}`,
              updatedData
            );
            set((state) => ({
              blogs: state.blogs.map((blog) =>
                blog._id === blogId ? { ...blog, ...updatedData } : blog
              ),
              myBlogs: state.myBlogs.map((blog) =>
                blog._id === blogId ? { ...blog, ...updatedData } : blog
              ),
              loading: false,
            }));
          } catch (error) {
            set({ error: error.message, loading: false });
            throw error;
          }
        },

        // Clear store
        clearBlogs: () => set({ blogs: [], myBlogs: [], featuredBlogs: [] }),
      }),
      {
        name: "blog-storage", // unique name for localStorage
        partialize: (state) => ({
          // Only persist these fields
          blogs: state.blogs.slice(0, 20), // Limit stored blogs
          featuredBlogs: state.featuredBlogs,
        }),
      }
    )
  )
);

export default useBlogStore;
