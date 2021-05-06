import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-jb9d2m06.us.auth0.com"
    clientId="X8ZW4vS28NZEtFhv3neN8yBWNOqJPmG3"
    redirectUri={window.location.origin}
    audience="https://dev-jb9d2m06.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);