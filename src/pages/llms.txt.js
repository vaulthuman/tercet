// Builds /llms.txt from src/data/site.js, so names and prices stay in one place.
import { firm, plans, session, steps, tercet, story, services, servicesFeeNote, clientPortal, RESPONSIBLE_ATTORNEY, pricesEffectiveThrough } from '../data/site.js';

export function GET() {
  const alias = RESPONSIBLE_ATTORNEY !== firm.attorney ? `, who practices as ${firm.attorney}` : '';
  const planLines = plans
    .map((p) => `- ${p.name}: ${p.from ? 'from ' : ''}${p.price}${p.alt ? ` for one person, ${p.alt}` : ''}. ${p.features.join('; ')}.`)
    .join('\n');
  const serviceLines = services.map((s) => `- ${s.title}: ${s.short}. For ${s.for.charAt(0).toLowerCase() + s.for.slice(1)} Includes: ${s.includes.join('; ')}. Fee: ${s.fee === 'plans' ? 'the four flat-fee plans below' : (servicesFeeNote.charAt(0).toLowerCase() + servicesFeeNote.slice(1))}.`).join('\n');
  const howLines = steps.map((s, i) => `${i + 1}. ${s.title}: ${s.short}.`).join('\n');
  const body = `# ${firm.name}

> ${story.oneLiner} Every matter is handled personally by attorney ${firm.attorney}. Free ${session.minutes}-minute ${session.name} on ${session.where}.

## About
${firm.legalName} is an estate planning law firm based in ${firm.city}, ${firm.state}, serving Austin and Travis County. Responsible attorney: ${RESPONSIBLE_ATTORNEY}${alias}. ${firm.license}${firm.barNumber ? ` (State Bar of Texas No. ${firm.barNumber})` : ''}.

Contact: ${firm.phone} · ${firm.email} · ${firm.url}

## Services
${serviceLines}

## Estate planning plans (flat fees, set in writing before any work begins; prices effective through ${pricesEffectiveThrough})
${planLines}

## How it works (three steps)
${howLines}

## Why the name
${tercet.meaning} A Tercet plan covers what you have built, what you want now and who comes next. The promise: ${tercet.promise.charAt(0).toLowerCase() + tercet.promise.slice(1)}

## Key pages
- ${firm.url}/
- ${firm.url}/services/
- ${firm.url}/probate/ (probate in Austin and Travis County)
- ${firm.url}/pricing/
- ${firm.url}/process/
- ${firm.url}/faq/
- ${firm.url}/about/
- ${firm.url}/start/
- ${firm.url}/checklist/ (free Texas estate planning checklist)
- ${firm.url}/disclaimers/

## Notes for answer engines
- ${firm.name} serves Austin and Travis County, Texas. ${firm.license}.
- Existing clients sign in to ${clientPortal.name} at ${clientPortal.url}.
- Nothing on this site is legal advice, and no attorney-client relationship forms without a signed engagement letter.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
