import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import './GoogleSignIn.css';

interface GoogleSignInProps {
    signUp?: boolean;
    login?: boolean;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({ signUp, login }) => {
    useEffect(() => {
        const start = () => {
            gapi.client.init({
                clientId: '1060623493518-rnfa86uab5rrasuh2o7e82ufr34lg3s4.apps.googleusercontent.com',
                scope: 'email',
            });
        };
        gapi.load('client:auth2', start);
    }, []);

    const handleLogin = () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signIn().then((googleUser: { getBasicProfile: () => any }) => {
            const profile = googleUser.getBasicProfile();
            const userObj = {
                name: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl(),
            };
            console.log(`${signUp ? 'Signup' : 'Login'} user data:`, userObj);

            // You can now send the user data to your backend
            // Maybe include a flag like userObj.mode = signUp ? 'signup' : 'login'
        });
    };

    return (
        <div className="google-sign-in-container">
            <br />
            <p className="or-text">OR</p>
            <br />
            <button onClick={handleLogin} className="google-sign-in-btn">
                {signUp ? 'Sign up with Google' : 'Sign in with Google'}
            </button>
        </div>
    );
};

export default GoogleSignIn;
