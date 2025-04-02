
import { MarketOverview } from '../components/dashboard/MarketOverview'
import { PortfolioSummary } from '../components/dashboard/PortfolioSummary'

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MarketOverview />
        <PortfolioSummary />
      </div>
    </div>
  )
}