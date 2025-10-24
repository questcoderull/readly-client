import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUIStore = create(
  devtools(
    persist(
      (set) => ({
        // State
        theme: "light",
        sidebarOpen: false,
        searchQuery: "",
        selectedCategory: "all",

        // Actions
        setTheme: (theme) => set({ theme }),

        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === "light" ? "dark" : "light",
          })),

        setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),

        toggleSidebar: () =>
          set((state) => ({ sidebarOpen: !state.sidebarOpen })),

        setSearchQuery: (query) => set({ searchQuery: query }),

        setSelectedCategory: (category) => set({ selectedCategory: category }),

        // Reset filters
        resetFilters: () => set({ searchQuery: "", selectedCategory: "all" }),
      }),
      {
        name: "ui-storage", // unique name for localStorage
      }
    )
  )
);

export default useUIStore;
