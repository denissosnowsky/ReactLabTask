import { app } from "./app/app.js";
import { routes } from "./navigation.js";

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];
app();