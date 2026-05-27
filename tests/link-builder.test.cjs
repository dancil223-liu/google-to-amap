const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const script = html.match(/<script>([\s\S]*)<\/script>/)[1];

const elements = new Map();
function element(id) {
  if (!elements.has(id)) {
    elements.set(id, {
      value: '',
      textContent: '',
      className: '',
      classList: { add() {}, remove() {}, toggle() {} },
      addEventListener() {},
      style: {},
    });
  }
  return elements.get(id);
}

const sandbox = {
  console,
  encodeURIComponent,
  decodeURIComponent,
  parseFloat,
  isNaN,
  document: {
    body: { innerHTML: '' },
    getElementById: element,
    querySelectorAll: () => [],
  },
  navigator: {
    clipboard: { readText: async () => '' },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    platform: 'Win32',
    maxTouchPoints: 0,
  },
  window: {
    location: { hash: '', href: '' },
    opened: [],
    open(url, target, features) {
      this.opened.push({ url, target, features });
    },
  },
};

vm.createContext(sandbox);
vm.runInContext(script, sandbox);

vm.runInContext("parsed = { lat: 25.033964, lon: 121.564468, name: '台北101' }", sandbox);

assert.equal(
  sandbox.getAmapShortcutUrl('navi'),
  'iosamap://navi?sourceApplication=googleToAmap&poiname=%E5%8F%B0%E5%8C%97101&lat=25.033964&lon=121.564468&dev=1&style=0'
);

assert.equal(
  sandbox.getAmapUniversalUrl('navi'),
  'https://uri.amap.com/navigation?to=121.564468,25.033964,%E5%8F%B0%E5%8C%97101&src=googleToAmap&coordinate=wgs84&mode=car&callnative=1'
);

assert.equal(
  sandbox.getAmapWebUrl('navi'),
  'https://uri.amap.com/navigation?to=121.564468,25.033964,%E5%8F%B0%E5%8C%97101&src=googleToAmap&coordinate=wgs84&mode=car'
);

assert.equal(sandbox.isIOS(), false);
sandbox.openAmap('navi');
assert.deepEqual(sandbox.window.opened.pop(), {
  url: 'https://uri.amap.com/navigation?to=121.564468,25.033964,%E5%8F%B0%E5%8C%97101&src=googleToAmap&coordinate=wgs84&mode=car',
  target: '_blank',
  features: 'noopener',
});

sandbox.navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)';
sandbox.window.location.href = '';
assert.equal(sandbox.isIOS(), true);
sandbox.openAmap('navi');
assert.equal(
  sandbox.window.location.href,
  'iosamap://navi?sourceApplication=googleToAmap&poiname=%E5%8F%B0%E5%8C%97101&lat=25.033964&lon=121.564468&dev=1&style=0'
);

assert.ok(html.includes('手機怎麼用'), 'mobile instructions should be visible');
assert.ok(html.includes('高德網頁導航'), 'desktop web navigation button should be visible');
assert.ok(html.includes('展開 URL'), 'shortcut setup steps should mention Expand URL');
assert.ok(html.includes('不用捷徑'), 'mobile fallback should avoid requiring Shortcuts');
assert.ok(html.includes('文字動作'), 'shortcut setup should explain the Text action');
assert.ok(html.includes('autoOpenShortcutTarget'), 'shortcut hash page should auto-attempt opening Amap');
assert.ok(html.includes('正在嘗試打開高德'), 'shortcut hash page should explain auto-open state');

console.log('link-builder tests passed');
