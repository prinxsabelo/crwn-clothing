import React from 'react';
import './App.css';
import {  Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      currentUser: null
    }
  }
  onsubscribeFromAuth = null;
  componentDidMount(){
    this.onsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.onsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header />
         <Switch>
        
                <Route exact path="/" component={HomePage} />
                <Route  path="/shop" component={ShopPage} />
                <Route path="/signin" component={SignInSignUpPage} />
         </Switch>
         
         
      </div>
    );
  }
}

export default App;
