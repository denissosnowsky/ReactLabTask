export const restorePasswordSent = `
    <main class="signing-main">
        <section class="background-image"></section>
        <aside class="signing-block signing-block-res-pass-sent">
            <h1 onclick="onNavigate('/sign-in')">
                <span class="h1__icon"
                ><img alt="back" src="./icons/arrow-left.svg" /></span
                ><span>Restore Password</span>
            </h1>
            <div class="info-message">
                An email has been sent to <u class="email-link">example@exam.com</u>.
                Check your inbox, and click the reset link provided.
            </div>
        </aside>
    </main>
`;
