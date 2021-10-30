import { onNavigate } from "../navigation.js";
import { EmptyBoard } from "../components/EmptyBoard.js";
import { Card } from "../components/Card.js";

export class View {
  constructor() {
    this.app = this.getElement("#root");

    this.SignUpFirstNameInput = this.getElement(".sign-up-firstName-input");
    this.SignUpLastNameInput = this.getElement(".sign-up-lastName-input");
    this.SignUpEmailInput = this.getElement(".sign-up-email-input");
    this.SignUpEnterPassInput = this.getElement(".sign-up-enterPass-input");
    this.SignUpConfirmPassInput = this.getElement(".sign-up-confirmPass-input");
    this.SignInEmailInput = this.getElement(".sign-in-email-input");
    this.SignInEnterPassInput = this.getElement(".sign-in-enterPass-input");
    this.RestorePassEmailInput = this.getElement(".restorePass-email-input");

    this.SignUpButton = this.getElement(".form__button-sign-up");
    this.SignInButton = this.getElement(".form__button-sign-in");
    this.RestorePassButton = this.getElement(".form__button-restore-pass");

    this.SignUpEmailWrapper = this.getElement(
      ".form__input-wrapper-signUp-email"
    );
    this.SignUpEnterPassWrapper = this.getElement(
      ".form__input-wrapper-signUp-enterPass"
    );
    this.SignUpConfirmPassWrapper = this.getElement(
      ".form__input-wrapper-signUp-confirmPass"
    );
    this.SignInEmailWrapper = this.getElement(
      ".form__input-wrapper-signIn-email"
    );
    this.SignInEnterPassWrapper = this.getElement(
      ".form__input-wrapper-signIn-enterPass"
    );
    this.RestorePassEmailWrapper = this.getElement(
      ".form__input-wrapper-restorePass-email"
    );

    //navigation realization
    const signUpNav = this.getElement(".link-block__offer-sign-up");
    signUpNav &&
      signUpNav.addEventListener("click", () => {
        onNavigate("/sign-in");
      });

    const signInNav = this.getElement(".link-block__offer-sign-in");
    signInNav &&
      signInNav.addEventListener("click", () => {
        onNavigate("/");
      });

    const restorePassNav = this.getElement(".link-block__offer-forgetPass");
    restorePassNav &&
      restorePassNav.addEventListener("click", () => {
        onNavigate("/restore-password");
      });

    const backFromRestoreNav = this.getElement(".back-from-passRestore");
    backFromRestoreNav &&
      backFromRestoreNav.addEventListener("click", () => {
        onNavigate("/sign-in");
      });

    const signUpFromBtn = this.getElement(".form__button-sign-up");
    //end of navigation realization

    document.querySelectorAll("input").forEach((item) => {
      item.addEventListener("focus", (e) => {
        if (
          !e.target.parentElement.parentElement.classList.contains(
            "form__input-wrapper_errored-email"
          ) &&
          !e.target.parentElement.parentElement.classList.contains(
            "form__input-wrapper_errored-pass"
          )
        ) {
          e.target.parentElement.parentElement.classList.add(
            "form__input-wrapper_focused"
          );
        }
      });
    });

    document.querySelectorAll("input").forEach((item) => {
      item.addEventListener("blur", (e) => {
        e.target.parentElement.parentElement.classList.remove(
          "form__input-wrapper_focused"
        );
      });
    });
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  bindEventListeners() {
    const enterPassInput = document.querySelector(".enter-password");
    const enterPassInputBtn = document.querySelector(
      ".form__input-last-icon-enter-password"
    );
    enterPassInputBtn &&
      enterPassInputBtn.addEventListener("click", (e) => {
        if (enterPassInput.type === "password") {
          enterPassInput.type = "text";
        } else {
          enterPassInput.type = "password";
        }
      });

    const confirmPassInput = document.querySelector(".confirm-password");
    const confirmPassInputBtn = document.querySelector(
      ".form__input-last-icon-confirm-password"
    );
    confirmPassInputBtn &&
      confirmPassInputBtn.addEventListener("click", (e) => {
        if (confirmPassInput.type === "password") {
          confirmPassInput.type = "text";
        } else {
          confirmPassInput.type = "password";
        }
      });

    const formButtons = document.querySelector(".form__button");
    formButtons &&
      formButtons.addEventListener("click", (e) => {
        e.preventDefault();
      });
  }

  bindChangeSignUpFirstNameInput(handler) {
    this.SignUpFirstNameInput &&
      this.SignUpFirstNameInput.addEventListener("change", (e) => {
        handler(e.target.value);
      });
  }
  bindChangeSignUpLastNameInput(handler) {
    this.SignUpLastNameInput &&
      this.SignUpLastNameInput.addEventListener("change", (e) => {
        handler(e.target.value);
      });
  }
  bindChangeSignUpEmailInput(handler) {
    this.SignUpEmailInput &&
      this.SignUpEmailInput.addEventListener("change", (e) => {
        handler(e.target.value);
      });
  }
  bindChangeSignUpEnterPassInput(handler) {
    this.SignUpEnterPassInput &&
      this.SignUpEnterPassInput.addEventListener("change", (e) => {
        handler(e.target.value);
      });
  }
  bindChangeSignUpConfirmPassInput(handler) {
    this.SignUpConfirmPassInput &&
      this.SignUpConfirmPassInput.addEventListener("change", (e) => {
        handler(e.target.value);
      });
  }
  bindChangeSignInEmailInput(handler) {
    this.SignInEmailInput &&
      this.SignInEmailInput.addEventListener("change", (e) => {
        handler(e.target.value);
      });
  }
  bindChangeSignInEnterPassInput(handler) {
    this.SignInEnterPassInput &&
      this.SignInEnterPassInput.addEventListener("change", (e) => {
        handler(e.target.value);
      });
  }
  bindChangeRestorePassEmailInput(handler) {
    this.RestorePassEmailInput &&
      this.RestorePassEmailInput.addEventListener("change", (e) => {
        handler(e.target.value);
      });
  }

  bindSignUpButton(email, enterPass, confirmPass) {
    this.SignUpButton &&
      this.SignUpButton.addEventListener(
        "click",
        (e) => {
          if (email.length === 0) {
            this.SignUpEmailWrapper.classList.add(
              "form__input-wrapper_errored-email"
            );
          } else {
            this.SignUpEmailWrapper.classList.remove(
              "form__input-wrapper_errored-email"
            );
          }
          if (enterPass.length === 0) {
            this.SignUpEnterPassWrapper.classList.add(
              "form__input-wrapper_errored-pass"
            );
          } else {
            this.SignUpEnterPassWrapper.classList.remove(
              "form__input-wrapper_errored-pass"
            );
          }
          if (confirmPass.length === 0) {
            this.SignUpConfirmPassWrapper.classList.add(
              "form__input-wrapper_errored-pass"
            );
          } else {
            this.SignUpConfirmPassWrapper.classList.remove(
              "form__input-wrapper_errored-pass"
            );
          }
        },
        { once: true }
      );
  }

  bindSignInButton(email, enterPass) {
    this.SignInButton &&
      this.SignInButton.addEventListener(
        "click",
        (e) => {
          if (email.length === 0) {
            this.SignInEmailWrapper.classList.add(
              "form__input-wrapper_errored-email"
            );
          } else {
            this.SignInEmailWrapper.classList.remove(
              "form__input-wrapper_errored-email"
            );
          }
          if (enterPass.length === 0) {
            this.SignInEnterPassWrapper.classList.add(
              "form__input-wrapper_errored-pass"
            );
          } else {
            this.SignInEnterPassWrapper.classList.remove(
              "form__input-wrapper_errored-pass"
            );
          }
        },
        { once: true }
      );
  }

  bindRestorePassButton = (email) => {
    this.RestorePassButton &&
      this.RestorePassButton.addEventListener("click", (e) => {
        if (email.length === 0) {
          this.RestorePassEmailWrapper.classList.add(
            "form__input-wrapper_errored-email"
          );
        } else {
          this.RestorePassEmailWrapper.classList.remove(
            "form__input-wrapper_errored-email"
          );
        }
      });
  };

  buildEmptyClientsPage() {
    const boardWrapper = this.getElement(
      ".doctor-view__patient-board-mainWrapper"
    );
    boardWrapper.innerHTML = EmptyBoard;
  }

  buildFilledCLientsPage(clients) {
    const boardWrapper = this.getElement(
      ".doctor-view__patient-board-mainWrapper"
    );

    const mainFilled = this.createElement(
      "div",
      "doctor-view__patient-board-mainFilled"
    );
    boardWrapper.append(mainFilled);

    clients.forEach((item) => {
      const wrapper = this.createElement("div");
      wrapper.innerHTML = Card(
        item.name,
        item.date,
        item.invitation,
        item.confirmed
      );
      mainFilled.append(wrapper);
    });
  }

  //navigation logic
  bindSignUpBtnFormNavigation = (email, enterPass, confirmPass, clients) => {
    this.SignUpButton &&
      this.SignUpButton.addEventListener("click", (e) => {
        if (
          confirmPass.length > 0 &&
          enterPass.length > 0 &&
          email.length > 0
        ) {
          onNavigate("/doctor-view");
          if (clients.length === 0) {
            this.buildEmptyClientsPage();
          } else {
            this.buildFilledCLientsPage(clients);
          }
        }
      });
  };

  bindSignInBtnFormNavigation = (email, enterPass, clients) => {
    this.SignInButton &&
      this.SignInButton.addEventListener("click", (e) => {
        if (enterPass.length > 0 && email.length > 0) {
          onNavigate("/doctor-view");
          if (clients.length === 0) {
            this.buildEmptyClientsPage();
          } else {
            this.buildFilledCLientsPage(clients);
          }
        }
      });
  };

  bindRestorePassBtnFormNavigation = (email) => {
    this.RestorePassButton &&
      this.RestorePassButton.addEventListener("click", (e) => {
        if (email.length > 0) {
          onNavigate("/restore-password-sent");
        }
      });
  };
}
