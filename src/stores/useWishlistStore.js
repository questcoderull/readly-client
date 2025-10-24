import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const useWishlistStore = create(
  devtools((set) => ({
    // State
    wishlist: [],
    loading: false,
    error: null,

    // Actions
    setWishlist: (wishlist) => set({ wishlist }),

    setLoading: (loading) => set({ loading }),

    setError: (error) => set({ error }),

    // Fetch wishlist
    fetchWishlist: async (userEmail, token) => {
      set({ loading: true, error: null });
      try {
        const response = await axios.get(
          `https://readly-server.vercel.app/wishlist?email=${userEmail}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        set({ wishlist: response.data, loading: false });
        return response.data;
      } catch (error) {
        set({ error: error.message, loading: false });
        throw error;
      }
    },

    // Add to wishlist
    addToWishlist: async (wishData) => {
      set({ loading: true, error: null });
      try {
        const response = await axios.post(
          "https://readly-server.vercel.app/wishlist",
          wishData
        );
        set((state) => ({
          wishlist: [response.data, ...state.wishlist],
          loading: false,
        }));
        return response.data;
      } catch (error) {
        set({ error: error.message, loading: false });
        throw error;
      }
    },

    // Remove from wishlist
    removeFromWishlist: async (wishlistId) => {
      set({ loading: true, error: null });
      try {
        await axios.delete(
          `https://readly-server.vercel.app/wishlist/${wishlistId}`
        );
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item._id !== wishlistId),
          loading: false,
        }));
      } catch (error) {
        set({ error: error.message, loading: false });
        throw error;
      }
    },

    // Check if blog is in wishlist
    isInWishlist: (blogId) => {
      const { wishlist } = useWishlistStore.getState();
      return wishlist.some((item) => item.blogId === blogId);
    },

    // Clear wishlist
    clearWishlist: () => set({ wishlist: [] }),
  }))
);

export default useWishlistStore;
