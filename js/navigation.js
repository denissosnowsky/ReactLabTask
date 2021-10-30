import {
  signUp,
  signIn,
  restorePassword,
  restorePasswordSent,
  doctorView
} from "./pages/script.js";
import { app } from "./app/app.js";

export const routes = {
  "/": signUp,
  "/sign-in": signIn,
  "/restore-password": restorePassword,
  "/restore-password-sent": restorePasswordSent,
  "/doctor-view": doctorView
};

export function onNavigate(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  document.getElementById("root").innerHTML = routes[pathname];
  app();
};