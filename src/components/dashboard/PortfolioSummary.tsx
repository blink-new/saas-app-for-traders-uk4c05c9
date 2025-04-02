
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export function PortfolioSummary() {
  return (
    <div className="bg-card rounded-lg p-4 border border-border">
      <h2 className="text-lg font-semibold mb-4">Portfolio Summary</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Total Value</p>
          <p className="text-2xl font-bold">$124,532.89</p>
          <div className="flex items-center text-green-500">
            <ArrowUpRight className="h-4 w-4" />
            <span className="text-sm">+2.4%</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Today's P/L</p>
          <p className="text-2xl font-bold">$1,234.56</p>
          <div className="flex items-center text-red-500">
            <ArrowDownRight className="h-4 w-4" />
            <span className="text-sm">-0.8%</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <h3 className="text-sm font-medium mb-2">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="px-3 py-2 bg-secondary hover:bg-secondary/80 rounded-md text-sm transition-colors">
            New Trade
          </button>
          <button className="px-3 py-2 bg-secondary hover:bg-secondary/80 rounded-md text-sm transition-colors">
            Add Alert
          </button>
        </div>
      </div>
    </div>
  )
}