import { content } from './content.mjs';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
const config = JSON.parse(await readFile(new URL('./site-config.json', import.meta.url), 'utf8'));
if (!config.email && !process.argv.includes('--draft')) throw Error('Set the public support email in site-config.json before publishing.');
if (config.email && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(config.email)) throw Error('Invalid email');
const out = new URL('../', import.meta.url);
const escape = v => String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const links = ['https://www.apple.com/legal/privacy/','https://www.apple.com/legal/privacy/data/en/location-services/','https://tdx.transportdata.tw/','https://www.metro.taipei/','https://apps.apple.com/account/subscriptions','https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'];
function page(lang, kind, root = false) {
 const t=content[lang], support=kind==='support', prefix=root?'':'../';
 const url=(page)=>root?`${lang}/${page}.html`:`${page}.html`;
 const contact=`<section id="contact" class="section contact-box"><h2>${escape(t.contactTitle)}</h2><p>${escape(support?t.contactText:t.contactPrivacy)}</p>${config.email?`<a class="button" href="mailto:${escape(config.email)}?subject=${encodeURIComponent('捷道地圖 '+t.support)}">${escape(t.contactButton)} ↗</a><p><a href="mailto:${escape(config.email)}">${escape(config.email)}</a></p>`:'<p>Contact configuration pending · 尚待設定聯絡信箱</p>'}</section>`;
 const side=support?[["faq",t.faqTitle],["subscriptions",t.quick[1]],["contact",t.quick[2]]]:t.privacySections.map(([id,title])=>[id,title]).concat([["contact",t.quick[2]]]);
 const faq=t.faqs.map(([id,q,a],i)=>`<details id="${id}"${i===0?' open':''}><summary>${escape(q)}</summary><p>${escape(a)}</p></details>`).join('');
 const policy=t.privacySections.map(([id,title,text],i)=>`<section class="section" id="${id}"><h2>${String(i+1).padStart(2,'0')} · ${escape(title)}</h2><p>${escape(text)}</p></section>`).join('');
 return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light"><title>${escape(support?t.support:t.privacy)} — ${escape(t.brand)}</title><meta name="description" content="${escape(support?t.intro:t.privacyIntro)}"><link rel="icon" href="${prefix}favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="${prefix}styles.css"><script src="${prefix}site.js" defer></script></head>
<body data-page="${kind}" data-root="${root}"><a class="skip" href="#main">${escape(t.skip)}</a>
<header><div class="wrap header-inner"><a class="brand" href="${url('support')}"><span class="mark" aria-hidden="true">↗</span>${escape(t.brand)}</a><div class="toolbar"><nav aria-label="${escape(t.contents)}"><a href="${url('support')}"${support?' aria-current="page"':''}>${escape(t.support)}</a><a href="${url('privacy')}"${!support?' aria-current="page"':''}>${escape(t.privacy)}</a></nav><label><span class="visually-hidden">${escape(t.language)}</span><select id="language">${Object.entries(content).map(([key,value])=>`<option value="${key}" lang="${key}"${key===lang?' selected':''}>${value.label}</option>`).join('')}</select></label></div></div></header>
<main id="main" class="wrap"><section class="hero"><div class="eyebrow">${escape(t.tag)}</div><h1>${escape(support?t.title:t.privacyTitle)}</h1><p class="lead">${escape(support?t.intro:t.privacyIntro)}</p><div class="route" aria-hidden="true"><span></span><i></i><span></span><i></i><span></span><i></i><span></span><i></i><span></span></div>${!support?`<p class="updated">${escape(t.updated)} · <time datetime="${config.updated}">${config.updated}</time></p>`:''}</section>
${support?`<div class="quick">${['arrivals','subscriptions','contact'].map((id,i)=>`<a href="#${id}">${escape(t.quick[i])}<b aria-hidden="true">↗</b></a>`).join('')}</div>`:''}
<div class="layout"><aside class="side"><nav class="side-inner" aria-label="${escape(t.contents)}"><h2>${escape(t.contents)}</h2>${side.map(([id,title])=>`<a href="#${id}">${escape(title)}</a>`).join('')}</nav></aside><div class="content">${support?`<section class="section" id="faq"><h2>${escape(t.faqTitle)}</h2>${faq}</section><p class="section note">${escape(t.note)}</p>`:policy}${contact}<section class="section"><h2>${escape(t.providerTitle)}</h2><div class="provider-links">${links.map((href,i)=>`<a href="${href}" rel="noopener noreferrer">${escape(t.providerLabels[i])} ↗</a>`).join('')}</div></section></div></div></main>
<footer><div class="wrap footer-inner"><span>© ${config.updated.slice(0,4)} ${escape(t.rights)}</span><div class="footer-links"><a href="${url('support')}">${escape(t.support)}</a><a href="${url('privacy')}">${escape(t.privacy)}</a><a href="https://apps.apple.com/app/id6476777075">${escape(t.download)} ↗</a></div></div></footer></body></html>`;
}
await mkdir(out,{recursive:true});
for(const lang of Object.keys(content)) {
 await mkdir(new URL(`${lang}/`,out),{recursive:true});
 for(const kind of ['support','privacy']) await writeFile(new URL(`${lang}/${kind}.html`,out),page(lang,kind));
}
for(const kind of ['support','privacy']) await writeFile(new URL(`${kind}.html`,out),page('zh-Hant',kind,true));
await writeFile(new URL('index.html',out),page('zh-Hant','support',true));
console.log('Generated 13 complete pages in 5 languages.');
