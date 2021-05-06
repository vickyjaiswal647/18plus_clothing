import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    HandleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword( email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    HandleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value});
    };

    render () {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.HandleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.HandleChange} 
                        value={this.state.email} 
                        label="Email"
                        required/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.HandleChange}
                        value={this.state.password} 
                        label="Password"
                        required/>
                    <div className='buttons'>
                        <CustomButton type='submit' > Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;