import { signUp, signIn, restorePassword, restorePasswordSent, doctorView, doctorViewClients } from "./pages/script.js";

const routes = {
  "/": signUp,
  "/sign-in": signIn,
  "/restore-password": restorePassword,
  "/restore-password-sent": restorePasswordSent,
  "/doctor-view": doctorView,
  "/doctor-view-clients": doctorViewClients,
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

function onNavigate(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};
document.onNavigate = onNavigate;

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};