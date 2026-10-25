import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import vm from 'node:vm';
import { content } from './content.mjs';
const scripts = await readFile(new URL('../site.js', import.meta.url),'utf8');
const locales = Object.keys(content);
for (const [locale,t] of Object.entries(content)) {
 assert.equal(t.faqs.length,6); assert.equal(t.privacySections.length,9); assert.equal(t.providerLabels.length,6);
 for (const entries of [t.faqs,t.privacySections]) {
  assert.equal(new Set(entries.map(e=>e[0])).size,entries.length);
  for(const entry of entries) assert(entry.every(v=>typeof v==='string'&&v.trim()));
 }
 for (const kind of ['support','privacy']) {
  const html = await readFile(new URL(`../${locale}/${kind}.html`,import.meta.url),'utf8');
  assert(html.includes(`<html lang="${locale}">`));assert(html.includes('id="language"'));
  for(const l of locales)assert(html.includes(`value="${l}"`));
  if (!process.argv.includes('--draft')) assert(!/Contact configuration pending/.test(html),'Contact email required for release');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length);
  for(const [,href]of html.matchAll(/href="([^"]+)"/g)){
   if(href.startsWith('#'))assert(ids.includes(href.slice(1)),`Missing anchor ${href}`);
   else if(!/^[a-z]+:/i.test(href))await access(new URL(`../${locale}/${href}`,import.meta.url));
  }
 }
}
function run(languages, root=true, query=''){
 const result={}; const events={}; const select={addEventListener:(name,handler)=>events[name]=handler,value:'ko'};
 const window={location:{href:'https://example.test/privacy.html'+query,hash:'#location',replace:v=>result.redirect=v,assign:v=>result.assign=v},addEventListener:()=>{}};
 const document={body:{dataset:{page:'privacy',root:String(root)}},getElementById:id=>id==='language'?select:null};
 vm.runInNewContext(scripts,{window,document,navigator:{languages},URL,decodeURIComponent});
 return {result,events,select};
}
for(const [language,expected]of [['zh-TW','zh-Hant'],['zh-Hant-HK','zh-Hant'],['zh-CN','zh-Hans'],['zh-SG','zh-Hans'],['zh-Hans-TW','zh-Hans'],['en-US','en'],['ja-JP','ja'],['ko-KR','ko'],['fr-FR','en']]) assert.equal(run([language]).result.redirect,`${expected}/privacy.html#location`);
assert.equal(run(['fr','ko-KR']).result.redirect,'ko/privacy.html#location');
assert.equal(run(['en'],true,'?lang=ja').result.redirect,'ja/privacy.html#location');
const switcher=run(['en'],false);switcher.events.change();assert.equal(switcher.result.assign,'../ko/privacy.html#location');
console.log('Passed: 10 translated pages, local links, unique anchors, language negotiation and page-preserving language switch.' + (process.argv.includes('--draft') ? ' Draft: contact details still required.' : ' Contact details present.'));
