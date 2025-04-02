
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Sidebar } from './components/layout/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { useStore } from './lib/store'
import { cn } from './lib/utils'

const queryClient = new QueryClient()

function App() {
  const { sidebarCollapsed } = useStore()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Sidebar />
          <main className={cn(
            'transition-all duration-300 ease-in-out',
            sidebarCollapsed ? 'ml-16' : 'ml-64'
          )}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/portfolio" element={<div className="p-6">Portfolio (Coming Soon)</div>} />
              <Route path="/journal" element={<div className="p-6">Journal (Coming Soon)</div>} />
              <Route path="/alerts" element={<div className="p-6">Alerts (Coming Soon)</div>} />
              <Route path="/settings" element={<div className="p-6">Settings (Coming Soon)</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App