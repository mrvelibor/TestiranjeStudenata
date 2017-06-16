import { TestiranjePage } from './app.po';

describe('testiranje App', () => {
  let page: TestiranjePage;

  beforeEach(() => {
    page = new TestiranjePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
