import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import * as S from './src/data/site.js';
const css = readFileSync('./src/styles/global.css','utf8');
const year = new Date().getFullYear();
const esc = (s)=>s;
const html = `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${S.firm.name} — Estate, Trust &amp; Legacy Planning</title>
<meta name="description" content="Tercet Law — estate, trust, and legacy planning for Alabama families."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
<style>${css}</style></head>
<body>
<header class="site"><div class="wrap bar">
<a class="brand" href="/">${S.firm.name}</a>
<a class="navbtn" href="${S.firm.bookingUrl}">Book a conversation</a></div></header>
<main><div class="wrap">
<section class="hero"><p class="kicker">${S.firm.kicker}</p>
<h1>${S.hero.h1}</h1><p class="subline">${S.hero.subline}</p></section>
<div class="lede">${S.hero.lede.map(p=>`<p>${p}</p>`).join('')}</div>
<div class="cta"><a class="btn-fill" href="${S.firm.bookingUrl}">${S.hero.cta}</a></div>
<hr class="rule"/>
<section class="cols">${S.pillars.map(c=>`<div><h3>${c.title}</h3><p>${c.body}</p></div>`).join('')}</section>
<hr class="rule"/>
<p class="turn">${S.turn}</p>
<hr class="rule"/>
<h2 class="sec">Why Tercet</h2>
<div class="why">${S.whyTercet.map(p=>`<p>${p}</p>`).join('')}</div>
<hr class="rule"/>
<h2 class="sec">Three ways in — you choose which, not whether</h2>
<section class="pkgs">${S.plans.map(pl=>`<div class="pkg"><div class="nm">${pl.name}</div><div class="pr">${pl.price}</div><ul>${pl.features.map(f=>`<li>${f}</li>`).join('')}</ul></div>`).join('')}</section>
<p class="note">${S.pricingNote}</p>
<hr class="rule"/>
<h2 class="sec">How it works</h2>
<ol class="steps">${S.steps.map(s=>`<li><span class="rn">${s.n}</span><b>${s.title}</b> ${s.body}</li>`).join('')}</ol>
<hr class="rule"/>
<p class="closing">${S.closing}</p>
<div class="ctarow" id="start">
<a class="btn-line" href="${S.firm.bookingUrl}">Start with a conversation</a>
<a class="btn-fill" href="mailto:${S.firm.email}">Email the firm</a></div>
<hr class="rule"/>
<h2 class="sec">Areas of practice</h2>
<section class="areas">${S.practiceAreas.map(a=>`<div class="area"><h4>${a.name}</h4><p>${a.blurb}</p></div>`).join('')}</section>
</div></main>
<footer class="site"><div class="wrap">
<p class="disc">${S.disclaimer}</p>
<p class="sig">${S.firm.legalName.toUpperCase()}</p>
<p class="meta">&copy; ${year} ${S.firm.legalName}. All&nbsp;rights&nbsp;reserved. &middot; ${S.firm.attorneyDisplay}, Esq. &middot; <a href="mailto:${S.firm.email}">${S.firm.email}</a></p>
</div></footer></body></html>`;
mkdirSync('dist',{recursive:true});
writeFileSync('dist/index.html', html);
console.log('wrote dist/index.html ('+html.length+' bytes)');
