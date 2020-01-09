import React from 'react';
import './App.css';
import {  Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth , createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      currentUser: null
    }
  }
  onsubscribeFromAuth = null;
  componentDidMount(){
    this.onsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          },() => {
            console.log(this.state);
          })
        })
      }
      this.setState({currentUser: userAuth})
      // this.setState({currentUser:user});
      // console.log(user);
      // console.log(this.state.currentUser);
      createUserProfileDocument(userAuth);
    })
  }
  componentWillUnmount(){
    this.onsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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
