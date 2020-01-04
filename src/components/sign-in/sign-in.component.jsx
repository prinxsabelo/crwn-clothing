import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import  {signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: '',
            email: ''
        };
    
    }  
    handleSubmit = event =>{
        alert();
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]: value});
    }
    render (){
        const {email, password} = this.state;
        return (
            <div className='sign-in'>
                <h2>Account don dey..</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="Email" value={email} required onChange={this.handleChange} /> 
                 
                    <FormInput name="password" type="password" label="Password" value={password} required   onChange={this.handleChange}/> 
                  
                    <CustomButton  type="submit">Sign In </CustomButton>
                    <CustomButton  onClick={ signInWithGoogle }>Sign In wtih google</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;