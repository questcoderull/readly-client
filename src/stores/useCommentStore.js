import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const useCommentStore = create(
  devtools((set) => ({
    // State
    comments: [],
    myComments: [],
    loading: false,
    error: null,

    // Actions
    setComments: (comments) => set({ comments }),

    setMyComments: (comments) => set({ myComments: comments }),

    setLoading: (loading) => set({ loading }),

    setError: (error) => set({ error }),

    // Fetch all comments
    fetchComments: async () => {
      set({ loading: true, error: null });
      try {
        const response = await axios.get(
          "https://readly-server.vercel.app/all-comments"
        );
        set({ comments: response.data, loading: false });
        return response.data;
      } catch (error) {
        set({ error: error.message, loading: false });
        throw error;
      }
    },

    // Fetch user's comments
    fetchMyComments: async (userEmail, token) => {
      set({ loading: true, error: null });
      try {
        const response = await axios.get(
          `https://readly-server.vercel.app/my-comments?email=${userEmail}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        set({ myComments: response.data, loading: false });
        return response.data;
      } catch (error) {
        set({ error: error.message, loading: false });
        throw error;
      }
    },

    // Fetch comments for a specific blog
    fetchBlogComments: async (blogId) => {
      set({ loading: true, error: null });
      try {
        const response = await axios.get(
          "https://readly-server.vercel.app/comments"
        );
        const blogComments = response.data.filter(
          (comment) => comment.blogId === blogId
        );
        set({ loading: false });
        return blogComments;
      } catch (error) {
        set({ error: error.message, loading: false });
        throw error;
      }
    },

    // Add a comment
    addComment: async (commentData) => {
      set({ loading: true, error: null });
      try {
        const response = await axios.post(
          "https://readly-server.vercel.app/comments",
          commentData
        );
        set((state) => ({
          comments: [response.data, ...state.comments],
          myComments: [response.data, ...state.myComments],
          loading: false,
        }));
        return response.data;
      } catch (error) {
        set({ error: error.message, loading: false });
        throw error;
      }
    },

    // Clear comments
    clearComments: () => set({ comments: [], myComments: [] }),
  }))
);

export default useCommentStore;
