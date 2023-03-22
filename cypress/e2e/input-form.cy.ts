
describe('Testing ToDo', () => {
  beforeEach(() => {
  const typedText = "new todo added";
    cy.visit('/');
    cy.get('[data-cy="add todo input"]').type(`${typedText}{enter}`);
  });
  it('Adds a new todo', () => {
    cy.get('[data-cy="add todo input"]').type(`Another task!{enter}`);
    cy.get('[data-cy="todo card"]').should('have.lengthOf.at.least', 2);
  });
  it('deletes a todo', () => {
    cy.get('[data-cy="delete button"]').click();
    cy.get('[data-cy="todo card"]').should('have.lengthOf', 0);
  });
  it('Updates a todo', () => {
    cy.get('[data-cy="edit button"]').click();
    cy.get('[data-cy="edit input"]').click().clear().type('Todo Edited!{enter}');
    cy.get('[data-cy="todo title"]').should('have.text', 'Todo Edited!');
  })
});

export {};