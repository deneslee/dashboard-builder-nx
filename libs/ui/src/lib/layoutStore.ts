import { create } from 'zustand';

export type SidebarState = 'open' | 'closed' | 'compact' | 'undocked';

interface LayoutState {
  sidebarState: SidebarState;
  contextBarOpen: boolean;
  setSidebarState: (state: SidebarState) => void;
  toggleContextBar: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  sidebarState: 'open',
  contextBarOpen: false,
  setSidebarState: (sidebarState) => set({ sidebarState }),
  toggleContextBar: () => set((state) => ({ contextBarOpen: !state.contextBarOpen })),
}));
