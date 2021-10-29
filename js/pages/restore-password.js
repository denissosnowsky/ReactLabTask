export const restorePassword = `
    <main class="signing-main">
        <section class="background-image"></section>
        <aside class="signing-block signing-block-res-pass">
            <h1 onclick="onNavigate('/sign-in')">
                <span class="h1__icon"
                ><img alt="back" src="./icons/arrow-left.svg" /></span
                ><span>Restore Password</span>
            </h1>
            <div class="info-message">
                Please use your email address, and we’ll send you the link to reset
                your password
            </div>
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
                <button class="form__button" onclick="onNavigate('/restore-password-sent')">
                <span>Send Reset Link</span>
                <span class="form__button-icon"
                    ><img alt="button" src="./icons/arrow-right.svg"
                /></span>
                </button>
            </form>
        </aside>
    </main>
`;