import { PersonPresenterAppPage } from './app.po';

describe('person-presenter-app App', () => {
  let page: PersonPresenterAppPage;

  beforeEach(() => {
    page = new PersonPresenterAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
