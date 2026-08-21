/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// We must use standard enum declarations as requested.
export enum SystemStep {
  UNDERSTAND = 'UNDERSTAND',
  STRATEGIZE = 'STRATEGIZE',
  AUTOMATE = 'AUTOMATE',
  GROW = 'GROW'
}

export interface MetricCardData {
  title: string;
  description: string;
  metric: string;
  tooltip: string;
}

export interface CostItem {
  label: string;
  cost: string;
  percent: number;
}

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CaseStudyData {
  tag: string;
  title: string;
  content: string;
  stats: StatItem[];
}

export interface DoorData {
  number: number;
  badge: string;
  title: string;
  description: string;
  problems: string[];
  builds: { title: string; description: string; iconName: string }[];
  results: string[];
}
