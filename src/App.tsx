import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { routes } from "./pages/routes";
import { GlobalStyles, lightTheme } from "./styles";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles></GlobalStyles>
        <Router>
          <Switch>
            <Route path={routes.home} exact>
              <Home></Home>
            </Route>
            <Route path={routes.login} exact>
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
