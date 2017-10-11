import { MyownhighchartsPage } from './app.po';

describe('myownhighcharts App', () => {
  let page: MyownhighchartsPage;

  beforeEach(() => {
    page = new MyownhighchartsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
