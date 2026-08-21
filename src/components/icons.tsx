/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Store, ThumbsUp, MessageSquareCode, Filter, Image, Target, TrendingUp,
  LayoutDashboard, Bell, ReceiptIndianRupee, Cpu, Users2, BarChart3,
  Users, Brain, Lightbulb, LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  store: Store,
  thumbsup: ThumbsUp,
  whatsapp: MessageSquareCode,
  filter: Filter,
  image: Image,
  target: Target,
  trending: TrendingUp,
  crm: LayoutDashboard,
  bell: Bell,
  receipt: ReceiptIndianRupee,
  automation: Cpu,
  team: Users2,
  dashboard: LayoutDashboard,
  chart: BarChart3,
  users: Users,
  brain: Brain,
  lightbulb: Lightbulb,
};

export function BuildIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] || Lightbulb;
  return <Icon className={className ?? 'w-5 h-5 text-brand-primary'} />;
}
