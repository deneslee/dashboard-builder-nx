import { create } from 'zustand';

interface PanelConfig {
  id: string;
  type: string;
  datasourceId: string;
  config: any;
}

interface DashboardState {
  title: string;
  layout: any[];
  panels: PanelConfig[];
  setTitle: (title: string) => void;
  updateLayout: (layout: any[]) => void;
  addPanel: (panel: PanelConfig) => void;
  removePanel: (id: string) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  title: 'Untitled Dashboard',
  layout: [],
  panels: [],
  setTitle: (title) => set({ title }),
  updateLayout: (layout) => set({ layout }),
  addPanel: (panel) => set((state) => ({ panels: [...state.panels, panel] })),
  removePanel: (id) => set((state) => ({ panels: state.panels.filter((p) => p.id !== id) })),
}));
