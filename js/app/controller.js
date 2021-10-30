import { getData } from "../services/dbGet.js";

export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindEventListeners();
    this.model.resetAllInputs();

    this.view.bindChangeSignUpFirstNameInput(
      this.handleChangeSignUpFirstNameInput
    );
    this.view.bindChangeSignUpLastNameInput(
      this.handleChangeSignUpLastNameInput
    );
    this.view.bindChangeSignUpEmailInput(this.handleChangeSignUpEmailInput);
    this.view.bindChangeSignUpEnterPassInput(
      this.handleChangeSignUpEnterPassInput
    );
    this.view.bindChangeSignUpConfirmPassInput(
      this.handleChangeSignUpConfirmPassInput
    );
    this.view.bindChangeSignInEmailInput(this.handleChangeSignInEmailInput);
    this.view.bindChangeSignInEnterPassInput(
      this.handleChangeSignInEnterPassInput
    );
    this.view.bindChangeRestorePassEmailInput(
      this.handleChangeRestorePassEmailInput
    );

    this.view.SignUpFirstNameInput &&
      (this.view.SignUpFirstNameInput.value =
        this.model.state.signUp.firstNameInput);

    this.view.SignUpLastNameInput &&
      (this.view.SignUpLastNameInput.value =
        this.model.state.signUp.lastNameInput);

    this.view.SignUpEmailInput &&
      (this.view.SignUpEmailInput.value = this.model.state.signUp.emailInput);

    this.view.SignUpEnterPassInput &&
      (this.view.SignUpEnterPassInput.value =
        this.model.state.signUp.enterPass);

    this.view.SignUpConfirmPassInput &&
      (this.view.SignUpConfirmPassInput.value =
        this.model.state.signUp.confirmPass);

    this.view.SignInEmailInput &&
      (this.view.SignInEmailInput.value = this.model.state.signIn.emailInput);

    this.view.SignInEnterPassInput &&
      (this.view.SignInEnterPassInput.value =
        this.model.state.signIn.enterPass);

    this.view.RestorePassEmailInput &&
      (this.view.RestorePassEmailInput.value =
        this.model.state.restorePassword.emailInput);

    this.view.bindSignUpButton(
      this.model.state.signUp.emailInput,
      this.model.state.signUp.enterPass,
      this.model.state.signUp.confirmPass
    );
    this.view.bindSignInButton(
      this.model.state.signIn.emailInput,
      this.model.state.signIn.enterPass
    );
    this.view.bindRestorePassButton(
      this.model.state.restorePassword.emailInput
    );
    this.view.bindSignUpBtnFormNavigation(
      this.model.state.signUp.emailInput,
      this.model.state.signUp.enterPass,
      this.model.state.signUp.confirmPass,
      this.model.state.clients
    );
    this.view.bindSignInBtnFormNavigation(
      this.model.state.signIn.emailInput,
      this.model.state.signIn.enterPass,
      this.model.state.clients
    );
    this.view.bindRestorePassBtnFormNavigation(
      this.model.state.restorePassword.emailInput
    );

    this.fetchClients("../../db.json"); //To test empty doctor window replace "db.json" by "testEmptyDb.json"
  }

  fetchClients = async (url) => {
    const clients = await getData(url);
    this.model.putClientsData(clients);
  };

  handleChangeSignUpFirstNameInput = (value) => {
    this.model.changeSignUpFirstNameInput(value);
    this.view.SignUpFirstNameInput &&
      (this.view.SignUpFirstNameInput.value =
        this.model.state.signUp.firstNameInput);
  };
  handleChangeSignUpLastNameInput = (value) => {
    this.model.changeSignUpLastNameInput(value);
    this.view.SignUpLastNameInput &&
      (this.view.SignUpLastNameInput.value =
        this.model.state.signUp.lastNameInput);
  };
  handleChangeSignUpEmailInput = (value) => {
    this.model.changeSignUpEmailInput(value);
    this.view.SignUpEmailInput &&
      (this.view.SignUpEmailInput.value = this.model.state.signUp.emailInput);
    this.view.bindSignUpButton(
      this.model.state.signUp.emailInput,
      this.model.state.signUp.enterPass,
      this.model.state.signUp.confirmPass
    );
    this.view.bindSignUpBtnFormNavigation(
      this.model.state.signUp.emailInput,
      this.model.state.signUp.enterPass,
      this.model.state.signUp.confirmPass,
      this.model.state.clients
    );
  };
  handleChangeSignUpEnterPassInput = (value) => {
    this.model.changeSignUpEnterPassInput(value);
    this.view.SignUpEnterPassInput &&
      (this.view.SignUpEnterPassInput.value =
        this.model.state.signUp.enterPass);
    this.view.bindSignUpButton(
      this.model.state.signUp.emailInput,
      this.model.state.signUp.enterPass,
      this.model.state.signUp.confirmPass
    );
    this.view.bindSignUpBtnFormNavigation(
      this.model.state.signUp.emailInput,
      this.model.state.signUp.enterPass,
      this.model.state.signUp.confirmPass,
      this.model.state.clients
    );
  };
  handleChangeSignUpConfirmPassInput = (value) => {
    this.model.changeSignUpConfirmPassInput(value);
    this.view.SignUpConfirmPassInput &&
      (this.view.SignUpConfirmPassInput.value =
        this.model.state.signUp.confirmPass);
    this.view.bindSignUpButton(
      this.model.state.signUp.emailInput,
      this.model.state.signUp.enterPass,
      this.model.state.signUp.confirmPass
    );
    this.view.bindSignUpBtnFormNavigation(
      this.model.state.signUp.emailInput,
      this.model.state.signUp.enterPass,
      this.model.state.signUp.confirmPass,
      this.model.state.clients
    );
  };
  handleChangeSignInEmailInput = (value) => {
    this.model.changeSignInEmailInput(value);
    this.view.SignInEmailInput &&
      (this.view.SignInEmailInput.value = this.model.state.signIn.emailInput);
    this.view.bindSignInButton(
      this.model.state.signIn.emailInput,
      this.model.state.signIn.enterPass
    );
    this.view.bindSignInBtnFormNavigation(
      this.model.state.signIn.emailInput,
      this.model.state.signIn.enterPass,
      this.model.state.clients
    );
  };
  handleChangeSignInEnterPassInput = (value) => {
    this.model.changeSignInEnterPassInput(value);
    this.view.SignInEnterPassInput &&
      (this.view.SignInEnterPassInput.value =
        this.model.state.signIn.enterPass);
    this.view.bindSignInButton(
      this.model.state.signIn.emailInput,
      this.model.state.signIn.enterPass
    );
    this.view.bindSignInBtnFormNavigation(
      this.model.state.signIn.emailInput,
      this.model.state.signIn.enterPass,
      this.model.state.clients
    );
  };
  handleChangeRestorePassEmailInput = (value) => {
    this.model.changeRestorePassEmailInput(value);
    this.view.RestorePassEmailInput &&
      (this.view.RestorePassEmailInput.value =
        this.model.state.restorePassword.emailInput);
    this.view.bindRestorePassButton(
      this.model.state.restorePassword.emailInput
    );
    this.view.bindRestorePassBtnFormNavigation(
      this.model.state.restorePassword.emailInput
    );
  };
}
