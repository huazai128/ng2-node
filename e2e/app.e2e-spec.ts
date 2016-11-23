import { Ng2AdminPage } from './app.po';

describe('ng2-admin App', function() {
  let page: Ng2AdminPage;

  beforeEach(() => {
    page = new Ng2AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
