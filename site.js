(() => {
  const supported = ['zh-Hant', 'zh-Hans', 'en', 'ja', 'ko'];
  function choose(languages) {
    for (const raw of languages) {
      const language = String(raw).toLowerCase().replaceAll('_', '-');
      if (language.startsWith('zh')) {
        if (language.includes('hant')) return 'zh-Hant';
        if (language.includes('hans') || /(?:^|-)(cn|sg)(?:-|$)/.test(language)) return 'zh-Hans';
        return 'zh-Hant';
      }
      for (const code of ['en', 'ja', 'ko']) if (language===code || language.startsWith(code+'-')) return code;
    }
    return 'en';
  }
  const kind = document.body.dataset.page;
  const root = document.body.dataset.root === 'true';
  const selector = document.getElementById('language');
  selector.addEventListener('change', () => {
    if (!supported.includes(selector.value)) return;
    const relative = `${root?'':'../'}${selector.value}/${kind}.html`;
    window.location.assign(relative + window.location.hash);
  });
  if (root) {
    const requested = new URL(window.location.href).searchParams.get('lang');
    const language = supported.includes(requested) ? requested : choose(navigator.languages || [navigator.language]);
    window.location.replace(`${language}/${kind}.html${window.location.hash}`);
  }
  // Expand a linked answer, including when a visitor follows a page anchor.
  function revealAnswer() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    const answer = document.getElementById(id);
    if (answer && answer.tagName==='DETAILS') answer.open = true;
  }
  window.addEventListener('hashchange', revealAnswer);
  revealAnswer();
})();
