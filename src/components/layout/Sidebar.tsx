
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, LineChart, BookOpen, Bell, Settings, ChevronLeft } from 'lucide-react'
import { useStore } from '../../lib/store'
import { cn } from '../../lib/utils'

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebar } = useStore()
  const [hovering, setHovering] = useState(false)

  const links = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/portfolio', icon: LineChart, label: 'Portfolio' },
    { to: '/journal', icon: BookOpen, label: 'Journal' },
    { to: '/alerts', icon: Bell, label: 'Alerts' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div
      className={cn(
        'h-screen bg-card fixed left-0 top-0 z-40 flex flex-col transition-all duration-300 ease-in-out',
        sidebarCollapsed ? 'w-16' : 'w-64',
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h1 className={cn('font-bold text-xl transition-opacity', 
          sidebarCollapsed ? 'opacity-0' : 'opacity-100'
        )}>
          TradeHub
        </h1>
        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-secondary rounded-md transition-colors"
        >
          <ChevronLeft className={cn(
            'h-5 w-5 transition-transform',
            sidebarCollapsed ? 'rotate-180' : ''
          )} />
        </button>
      </div>

      <nav className="flex-1 p-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              cn(
                'flex items-center space-x-2 px-3 py-2 rounded-md transition-colors',
                'hover:bg-secondary',
                isActive ? 'bg-secondary text-primary' : 'text-muted-foreground',
                sidebarCollapsed ? 'justify-center' : ''
              )
            }
          >
            <link.icon className="h-5 w-5" />
            <span className={cn(
              'transition-opacity duration-200',
              sidebarCollapsed && !hovering ? 'opacity-0 w-0' : 'opacity-100'
            )}>
              {link.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}