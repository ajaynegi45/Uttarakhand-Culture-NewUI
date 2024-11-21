import React, {useEffect} from 'react';
import {gapi} from 'gapi-script';
import './GoogleSignIn.css';

const GoogleSignIn = () => {
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
        auth2.signIn().then((googleUser: { getBasicProfile: () => any; }) => {
            const profile = googleUser.getBasicProfile();
            const userObj = {
                name: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl(),
            };
            console.log('User data:', userObj);
            // You can now send the user data to your backend for further processing
        });
    };

    return (
        <div>
            <br></br>
            <p>OR</p>
            <br></br>
            <button onClick={handleLogin} className="google-sign-in-btn" text-align="centre">Sign in with Google
            </button>
        </div>
    );
};

export default GoogleSignIn;
