import { BasePage } from '../../Objects/base_page';
import { BrowserWindows } from '../../Objects/Alers and Frame/browser_windows';
describe('Browser Windows tests', () => {
  let browserWindow;
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'open');
      },
    });

    basePage = new BasePage();
    browserWindow = new BrowserWindows();
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows');
    basePage.goToSectionFromleftPanel('Browser Windows');
  });
  it('Should open New Tab', () => {
    browserWindow.openTabFromBrowserWindows('tab');

    browserWindow.windowObject.should('be.called');
  });
  it('Should open New Window', () => {
    browserWindow.openTabFromBrowserWindows('window');

    browserWindow.windowObject.should('be.called');
  });
  it('Should open New Window Message', () => {
    browserWindow.openTabFromBrowserWindows('messageWindow');

    browserWindow.windowObject.should('be.called');
  });
});
