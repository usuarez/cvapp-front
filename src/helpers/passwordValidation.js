import passwordValidator from 'password-validator'

export const passwordValidation = (password)=> {
    const schema = new passwordValidator()
    schema
          .is().min(8)
          .has().uppercase()
          .has().lowercase()
          .has().digits(1)
          .has().not().spaces()
          const validation = schema.validate(password, {list: true})
          return validation
}