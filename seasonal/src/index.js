import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App.js";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";


const domain = process.env.REACT_APP_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;


function isLocalStorageAvailable() {
  let storage;
  try {
      storage =  window['localStorage'];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  } catch (e) {
    return false;
  }
}
let redirect = ''
if (isLocalStorageAvailable()){
  redirect = `${window.location.origin}/home`
}else{
  redirect = 'https://seasonal-food-development.netlify.app/home'
}

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      // redirectUri={`${window.location.origin}/home`}
      redirectUri={redirect}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
