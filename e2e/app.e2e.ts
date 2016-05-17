import { CyoaAngularPage } from './app.po';

describe('cyoa-angular App', function() {
  let page: CyoaAngularPage;

  beforeEach(() => {
    page = new CyoaAngularPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cyoa-angular works!');
  });
});
