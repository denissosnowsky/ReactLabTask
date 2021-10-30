export const signUp = `
    <main class="signing-main">
      <section class="background-image"></section>
      <aside class="signing-block signing-block-sign-up">
        <h1>Sign Up</h1>
        <form class="form">
          <div class="form__input-wrapper">
            <div class="form__input-first-icon">
              <img alt="name" src="./icons/person.svg" />
            </div>
            <div class="form__input-text">
              <input placeholder="First Name" type="text" class="sign-up-firstName-input"/>
            </div>
            <div class="form__input-last-icon"></div>
          </div>
          <div class="form__input-wrapper">
            <div class="form__input-first-icon">
              <img alt="lastname" src="./icons/person.svg" />
            </div>
            <div class="form__input-text">
              <input placeholder="Last Name" type="text" class="sign-up-lastName-input"/>
            </div>
            <div class="form__input-last-icon"></div>
          </div>
          <div class="form__input-wrapper form__input-wrapper-signUp-email">
            <div class="form__input-first-icon">
              <img alt="email" src="./icons/message.svg" />
            </div>
            <div class="form__input-text">
              <input placeholder="Email" type="email" class="sign-up-email-input"/>
            </div>
            <div class="form__input-last-icon"></div>
          </div>
          <div class="form__input-wrapper form__input-wrapper-signUp-enterPass">
            <div class="form__input-first-icon">
              <img alt="password" src="./icons/lock.svg" />
            </div>
            <div class="form__input-text">
              <input placeholder="Password" type="password" class="enter-password sign-up-enterPass-input"/>
            </div>
            <div class="form__input-last-icon form__input-last-icon-enter-password">
              <img alt="eye" src="./icons/eye.svg" />
            </div>
          </div>
          <div class="form__input-wrapper form__input-wrapper-signUp-confirmPass">
            <div class="form__input-first-icon">
              <img alt="confirm" src="./icons/check.svg" />
            </div>
            <div class="form__input-text">
              <input placeholder="Confirm Password" type="password" class="confirm-password sign-up-confirmPass-input"/>
            </div>
            <div class="form__input-last-icon form__input-last-icon-confirm-password">
              <img alt="eye" src="./icons/eye.svg" />
            </div>
          </div>
          <button class="form__button form__button-sign-up">
            <span>Sign Up</span>
            <span class="form__button-icon"
              ><img alt="button" src="./icons/arrow-right.svg"
            /></span>
          </button>
        </form>
        <footer class="footer-sign-up">
          <div class="link-block">
            <span class="link-block__question">Already have an account?</span
            ><u class="link-block__offer link-block__offer-sign-up" >Sign in</u>
          </div>
        </footer>
      </aside>
    </main>
`;

/* onclick="onNavigate('/sign-in')" */
