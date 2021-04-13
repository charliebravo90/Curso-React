import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

// Import Pages Para App
import HomePage from "./pages/homepage/homepage.component";
import TypePage from "./pages/type/type.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ContactPage from "./pages/contact/contact.component";


// Component 
import Header from "./components/header/header.components";

// firebase conexion 
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  // Ciclos de vida
  // ciclo de vida: montado
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });

          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  // ciclo de vida: desmontado
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/type" component={TypePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />

        </Switch>
      </div>
    );
  }
}

export default App;
