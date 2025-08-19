import React from 'react';
import { Users, Trophy, Coins, Clock } from 'lucide-react';

interface StatsDisplayProps {
  stats: {
    totalUsers: number;
    totalClaimed: number;
    totalPayouts: number;
    avgClaimTime: string;
  };
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  const statItems = [
    {
      icon: Users,
      label: 'Total Users',
      value: stats.totalUsers.toLocaleString(),
      color: 'text-[#21C7E6]',
      bg: 'bg-[#21C7E6]/10',
    },
    {
      icon: Trophy,
      label: 'Total Claimed',
      value: `${stats.totalClaimed.toLocaleString()} TRX`,
      color: 'text-[#FF6200]',
      bg: 'bg-[#FF6200]/10',
    },
    {
      icon: Coins,
      label: 'Total Payouts',
      value: stats.totalPayouts.toLocaleString(),
      color: 'text-[#21C7E6]',
      bg: 'bg-[#21C7E6]/10',
    },
    {
      icon: Clock,
      label: 'Avg Claim Time',
      value: stats.avgClaimTime,
      color: 'text-[#FF6200]',
      bg: 'bg-[#FF6200]/10',
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Platform Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B] rounded-xl p-6 border border-[#21C7E6]/20 hover:border-[#21C7E6]/40 transition-colors"
            >
              <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={item.color} size={24} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-[#A0A0A0] text-sm">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}