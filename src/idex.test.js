import { expect } from "chai";
import jsdom, { JSDOM } from "jsdom";
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', () => {
    const index = fs.readFileSync("./src/index.html", "stf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('Users')
    dom.window.close();
  });
});
