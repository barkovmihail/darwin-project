export const addComment = (testId: string) => {
    cy.getByTestId('AddCommentForm.Input').type('text');
    cy.getByTestId('AddCommentForm.Button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
