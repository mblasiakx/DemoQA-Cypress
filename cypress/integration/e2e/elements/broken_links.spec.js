import { BasePage } from '../../Objects/base_page';
import { BrokenLinks } from '../../Objects/Elements/broken_links';
describe('Broken Links and Valid Links', () => {
  beforeEach(() => {
    cy.visit('/');
    const basePage = new BasePage();
    basePage.goToSectionFromCategoryCards('Elements');
    basePage.goToSectionFromleftPanel('Broken Links - Images');
  });

  it('Should open Valid link', () => {
    const brokenLinks = new BrokenLinks();
    brokenLinks.clickOnLink('Click Here for Valid Link');
  });
});
