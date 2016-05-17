export class CyoaAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cyoa-angular-app h1')).getText();
  }
}
