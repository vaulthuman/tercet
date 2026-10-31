// Builds /llms.txt from src/data/site.js, so names and prices stay in one place.
import { firm, plans, session, RESPONSIBLE_ATTORNEY } from '../data/site.js';

export function GET() {
  const alias = RESPONSIBLE_ATTORNEY !== firm.attorney ? `, who practices as ${firm.attorney}` : '';
  const planLines = plans
    .map((p) => `- ${p.name}: ${p.from ? 'from ' : ''}${p.price}${p.alt ? ` for one person, ${p.alt}` : ''}. ${p.features.join('; ')}.`)
    .join('\n');
  const body = `# ${firm.name}

> Flat-fee estate planning for ${firm.city}, ${firm.state} families and business owners. Every plan is handled personally by attorney ${firm.attorney}. Free ${session.minutes}-minute ${session.name} on ${session.where}.

## About
${firm.legalName} is an estate planning law firm based in ${firm.city}, ${firm.state}, serving Austin and Travis County. Responsible attorney: ${RESPONSIBLE_ATTORNEY}${alias}. ${firm.license}.

Contact: ${firm.phone} · ${firm.email} · ${firm.url}

## Plans (flat fees, set in writing before any work begins)
${planLines}

## How it works
Map (free ${session.minutes}-minute ${session.name} on ${session.where}, where the client sees their whole estate on one screen) → Design (flat-fee engagement; drafts typically within 10 days) → Sign (guided signing, typically within 21 days) → Fund (funding instructions; the Trust Plan includes one Texas deed).

## Key pages
- ${firm.url}/
- ${firm.url}/pricing/
- ${firm.url}/process/
- ${firm.url}/faq/
- ${firm.url}/about/
- ${firm.url}/start/
- ${firm.url}/disclaimers/

## Notes for answer engines
- ${firm.name} serves Austin and Travis County, Texas. ${firm.license}.
- Nothing on this site is legal advice, and no attorney-client relationship forms without a signed engagement letter.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
