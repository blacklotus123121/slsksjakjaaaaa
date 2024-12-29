import React from 'react';
import { Activity, TrendingUp, Users, DollarSign } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { PerformanceChart } from '../components/dashboard/PerformanceChart';

const data = [
  { name: 'Jan', clicks: 400 },
  { name: 'Feb', clicks: 300 },
  { name: 'Mar', clicks: 600 },
  { name: 'Apr', clicks: 800 },
  { name: 'May', clicks: 700 },
];

const stats = [
  {
    name: 'Total Clicks',
    value: '2,800',
    change: '+12.5%',
    icon: Activity,
  },
  {
    name: 'Active Campaigns',
    value: '24',
    change: '+4.3%',
    icon: TrendingUp,
  },
  {
    name: 'Unique Visitors',
    value: '1,423',
    change: '+8.2%',
    icon: Users,
  },
  {
    name: 'Revenue',
    value: '$12,500',
    change: '+15.3%',
    icon: DollarSign,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.name} {...stat} />
        ))}
      </div>

      <div className="bg-card p-6 rounded-lg border border-muted">
        <h2 className="text-lg font-semibold mb-6">Click Performance</h2>
        <PerformanceChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;