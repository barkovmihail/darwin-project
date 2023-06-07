describe('Пользователь заходит на страницу списка статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('articles');
        });
    });
    it('Статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });

        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it.skip('Пример заскипанного теста', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);

        cy.getByTestId('edfsdf').should('exist');
    });
});