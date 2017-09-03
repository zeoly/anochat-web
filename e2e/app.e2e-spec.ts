import { AnochatWebPage } from './app.po';

describe('anochat-web App', () => {
  let page: AnochatWebPage;

  beforeEach(() => {
    page = new AnochatWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
