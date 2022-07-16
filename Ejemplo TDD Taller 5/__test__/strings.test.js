
describe('email validation', () => {

  test('this is an email',() => {
    const email = 'eduardo@mail.com'

    expect(email).toMatch(/\S+@\S+\.\S+/)
  })

  test('this is not an email', () => {
    const email = 'eduardomailcom'

    expect(email).not.toMatch(/\S+@\S+\.\S+/)
  })

})