/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DoorData } from '../types';

export const doors: DoorData[] = [
  {
    number: 1,
    badge: 'START',
    title: 'Get More Customers',
    description: "Nobody knows your business? We'll help customers find you.",
    problems: [
      'No enquiries or leads',
      'Not visible on Google or Social Media',
      'No system to capture leads',
      'Depending only on referrals',
      'Inconsistent marketing & content',
    ],
    builds: [
      { title: 'Google Business Profile Setup', description: 'Be found when people search nearby.', iconName: 'store' },
      { title: 'Social Media Setup', description: 'Look professional across all platforms.', iconName: 'thumbsup' },
      { title: 'WhatsApp Lead Collection', description: 'Capture leads directly from WhatsApp.', iconName: 'whatsapp' },
      { title: 'Lead Capture System', description: 'Collect enquiries automatically.', iconName: 'filter' },
      { title: 'Automatic Content Machine', description: 'Keep posting regularly without worrying.', iconName: 'image' },
      { title: 'Paid Ads Setup', description: 'Reach more people & get quality leads.', iconName: 'target' },
      { title: 'Customer Growth Plan', description: 'Know who to target and how to grow consistently.', iconName: 'trending' },
    ],
    results: ['More Enquiries', 'More Leads', 'More Customers', 'More Sales'],
  },
  {
    number: 2,
    badge: 'SYSTEMIZE',
    title: 'Organize Your Business',
    description: "Getting customers is great. But if your business is messy, you're losing opportunities.",
    problems: [
      'Leads are getting lost',
      'Too many WhatsApp messages',
      'Follow-ups are forgotten',
      'No sales process in place',
      'Staff don’t follow the same process',
      'Hard to track payments & tasks',
      'Everything depends on you',
    ],
    builds: [
      { title: 'CRM System', description: 'Keep all your leads & customers in one place.', iconName: 'crm' },
      { title: 'WhatsApp Intelligence', description: 'Track every conversation and never miss a lead.', iconName: 'whatsapp' },
      { title: 'Lead Qualification', description: 'Focus on serious buyers and save your time.', iconName: 'target' },
      { title: 'Sales Pipeline', description: 'See where every lead is in your sales process.', iconName: 'filter' },
      { title: 'Automatic Follow-Ups', description: 'Follow up on time, close more deals.', iconName: 'bell' },
      { title: 'Invoices & Payments', description: 'Create invoices, track payments, get paid faster.', iconName: 'receipt' },
      { title: 'Business Automation', description: 'Automate repetitive tasks and save hours every day.', iconName: 'automation' },
      { title: 'Team Task Management', description: 'Assign tasks, set deadlines and track progress easily.', iconName: 'team' },
    ],
    results: ['Faster Sales', 'Less Manual Work', 'Better Customer Experience', 'More Closed Deals', 'More Profitability'],
  },
  {
    number: 3,
    badge: 'SCALE',
    title: 'Scale Your Business',
    description: "Your business is running. Now let's make it grow smarter and faster.",
    problems: [
      "Don't know what's working",
      'Revenue is unpredictable',
      'No visibility into profits',
      "Can't measure team performance",
      "Don't know where money is being lost",
      'Unsure where to invest next',
    ],
    builds: [
      { title: 'Live Sales Dashboard', description: 'See your sales, revenue and performance in real time.', iconName: 'dashboard' },
      { title: 'Revenue & Profit Reports', description: 'Know exactly how much you earn and where it comes from.', iconName: 'chart' },
      { title: 'Customer Insights', description: 'Understand who your best customers are and why they buy.', iconName: 'users' },
      { title: 'Lead Conversion Reports', description: 'Find out why leads drop off and how to convert more.', iconName: 'filter' },
      { title: 'AI Business Reports', description: 'AI analyzes your data and shows what really matters.', iconName: 'brain' },
      { title: 'Profit Analysis', description: 'Identify profit leaks and increase your margins.', iconName: 'trending' },
      { title: 'AI Growth Recommendations', description: 'Get AI-powered suggestions to grow faster.', iconName: 'lightbulb' },
      { title: 'Growth Strategy Roadmap', description: 'A clear action plan to scale your business with confidence.', iconName: 'target' },
    ],
    results: ['Higher Profits', 'Better Decisions', 'Smarter Investments', 'Stronger Team Performance', 'Scale With Confidence'],
  },
];
