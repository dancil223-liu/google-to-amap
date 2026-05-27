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
  navigator: { clipboard: { readText: async () => '' } },
  window: { location: { hash: '', href: '' } },
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

assert.ok(html.includes('捷徑直開高德'), 'shortcut instructions should be visible');

console.log('link-builder tests passed');
