'use client';

import Link from 'next/link';
import { FadeFromBottom, SlideFromLeft, SlideFromRight } from '../animation';

const USES: [string, string][] = [
  ['Customer replies', 'WhatsApp, Instagram and website chat'],
  ['Lead qualification', 'Ask the right questions, hand over warm leads'],
  ['Bookings and orders', 'Appointments, tables, enquiries, 24/7'],
  ['Follow-ups', 'Remind, re-engage and report back to your team'],
];

export default function AIAgentsBand() {
  return (
    <section className="band" id="ai-agents">
      <div className="band__inner">
        <SlideFromLeft delay="200ms" duration="slow">
          <div>
            <p className="band__kicker">New service</p>
            <h2>AI Agents that work while your team sleeps.</h2>
            <p>
              We build AI agents trained on your products, prices and tone of voice. They answer customers, qualify leads and
              book appointments across the channels your customers already use, and pass the conversation to a person when it matters.
            </p>
            <ul>
              {USES.map(([a, b]) => (
                <li key={a}>
                  {a} <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="band__cta">
              Book an AI Agent demo
            </Link>
          </div>
        </SlideFromLeft>
        <SlideFromRight delay="300ms" duration="slow">
          <div className="chat" aria-label="Example conversation with an Evoyul AI agent">
            <div className="chat__head">
              <span className="chat__dot" /> Evoyul AI Agent
            </div>
            <FadeFromBottom delay="500ms" duration="slow">
              <div className="chat__b me">Do you deliver to Thimphu, and how much is it?</div>
            </FadeFromBottom>
            <FadeFromBottom delay="900ms" duration="slow">
              <div className="chat__b ai">Yes. Delivery to Thimphu is Nu. 150 and takes 2 days. Want me to place the order?</div>
            </FadeFromBottom>
            <FadeFromBottom delay="1300ms" duration="slow">
              <div className="chat__b me">Yes please, two of the large size.</div>
            </FadeFromBottom>
            <FadeFromBottom delay="1700ms" duration="slow">
              <div className="chat__b ai">Done. I have sent the order to the team and a confirmation to your phone.</div>
            </FadeFromBottom>
          </div>
        </SlideFromRight>
      </div>
    </section>
  );
}
