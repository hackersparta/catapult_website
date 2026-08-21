/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../components/Hero';
import { Friction } from '../components/Friction';
import { WhatsAppTeaser } from '../components/WhatsAppTeaser';
import { CostComparison } from '../components/CostComparison';
import { DoorsOverview } from '../components/DoorsOverview';
import { CaseStudy } from '../components/CaseStudy';
import { FinalCTA } from '../components/FinalCTA';

export function HomePage() {
  return (
    <div>
      <Hero />
      <Friction />
      <WhatsAppTeaser />
      <CostComparison />
      <DoorsOverview />
      <CaseStudy />
      <FinalCTA />
    </div>
  );
}
