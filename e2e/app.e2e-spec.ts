import { Ng2BudgetMateSimplePage } from './app.po';

describe('ng2-budget-mate-simple App', function() {
  let page: Ng2BudgetMateSimplePage;

  beforeEach(() => {
    page = new Ng2BudgetMateSimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
