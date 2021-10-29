export const signIn = `
    <main class="signing-main">
      <section class="background-image"></section>
      <aside class="signing-block signing-block-sign-in">
        <h1>Sign In</h1>
        <form class="form">
          <div class="form__input-wrapper">
            <div class="form__input-first-icon">
              <img alt="email" src="./icons/message.svg" />
            </div>
            <div class="form__input-text">
              <input placeholder="Email" type="email" />
            </div>
            <div class="form__input-last-icon"></div>
          </div>
          <div class="form__input-wrapper form__input-wrapper_errored-pass">
            <div class="form__input-first-icon">
              <img alt="password" src="./icons/lock.svg" />
            </div>
            <div class="form__input-text">
              <input placeholder="Password" type="password" />
            </div>
            <div class="form__input-last-icon">
              <img alt="eye" src="./icons/eye.svg" />
            </div>
          </div>
          <button class="form__button">
            <span>Sign In</span>
            <span class="form__button-icon"
              ><img alt="button" src="./icons/arrow-right.svg"
            /></span>
          </button>
        </form>
        <div class="link-block forgotPassword-link">
          <u class="link-block__offer" onclick="onNavigate('/restore-password')">Forgot Password?</u>
        </div>
        <footer class="footer-sign-in">
          <div class="link-block">
            <span class="link-block__question">Don’t have an account?</span
            ><u class="link-block__offer" onclick="onNavigate('/')">Sign up</u>
          </div>
        </footer>
      </aside>
    </main>
`;
