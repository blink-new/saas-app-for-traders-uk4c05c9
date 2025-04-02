
import { create } from 'zustand'

interface TradeHubStore {
  sidebarCollapsed: boolean
  toggleSidebar: () => void
}

export const useStore = create<TradeHubStore>((set) => ({
  sidebarCollapsed: false,
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}))