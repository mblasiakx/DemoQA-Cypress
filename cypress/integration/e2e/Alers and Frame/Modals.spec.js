import { BasePage } from '../../Objects/base_page';
import { Modals } from '../../Objects/Alers and Frame/modals';

describe('Test Modals', () => {
  beforeEach(() => {
    cy.visit('/');
    const basePage = new BasePage();
    basePage.goToSectionFromCategoryCards('Alerts, Frame & Windows');
    basePage.goToSectionFromleftPanel('Modal Dialogs');
  });

  it('Should show small modal ', () => {
    const modals = new Modals();
    modals.openModal('Small');

    modals.modalContent.should('be.visible');
  });

  it('Should show large modal ', () => {
    const modals = new Modals();
    modals.openModal('Large');

    modals.modalContent.should('be.visible');
  });
});
