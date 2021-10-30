export class Model {
  constructor() {
    this.state = {
      signUp: {
        firstNameInput: "",
        lastNameInput: "",
        emailInput: "",
        enterPass: "",
        confirmPass: "",
      },
      signIn: {
        emailInput: "",
        enterPass: "",
      },
      restorePassword: {
        emailInput: "",
      },
      clients: [],
    };
  }

  changeSignUpFirstNameInput(value) {
    this.state.signUp.firstNameInput = value;
  }
  changeSignUpLastNameInput(value) {
    this.state.signUp.lastNameInput = value;
  }
  changeSignUpEmailInput(value) {
    this.state.signUp.emailInput = value;
  }
  changeSignUpEnterPassInput(value) {
    this.state.signUp.enterPass = value;
  }
  changeSignUpConfirmPassInput(value) {
    this.state.signUp.confirmPass = value;
  }

  changeSignInEmailInput(value) {
    this.state.signIn.emailInput = value;
  }
  changeSignInEnterPassInput(value) {
    this.state.signIn.enterPass = value;
  }

  changeRestorePassEmailInput(value) {
    this.state.restorePassword.emailInput = value;
  }

  resetAllInputs() {
    this.state.signUp.firstNameInput = "";
    this.state.signUp.lastNameInput = "";
    this.state.signUp.emailInput = "";
    this.state.signUp.enterPass = "";
    this.state.signUp.confirmPass = "";
    this.state.signIn.emailInput = "";
    this.state.signIn.enterPass = "";
    this.state.restorePassword.emailInput = "";
  }

  putClientsData(clients){
      this.state.clients = clients.clients;
  }
}
