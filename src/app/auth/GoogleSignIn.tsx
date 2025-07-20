import React, {useEffect} from 'react';
import {gapi} from 'gapi-script';
import './GoogleSignIn.css';

/**
 * Initializes Google API client and provides a button for Google sign-in.
 * @example
 * GoogleSignIn()
 * Returns a button to authenticate Google users
 * @param {void} No arguments taken.
 * @returns {JSX.Element} A button element for initiating Google authentication.
 * @description
 *   - Uses `useEffect` to initialize the Google API client upon component mount.
 *   - Utilizes Google's OAuth sign-in mechanism to authenticate users.
 *   - Logs the authenticated user's information in the console.
 *   - Relies on the `gapi.auth2` library to manage the user authentication process.
 */
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

    /**
     * Authenticates and retrieves user's basic profile information using Google's auth2 library.
     * @example
     * googleSignIn()
     * { name: 'John Doe', email: 'john.doe@example.com', imageUrl: 'https://example.com/johndoe.jpg' }
     * @returns {Object} Returns an object containing user's name, email, and image URL.
     * @description
     *   - Utilizes gapi.auth2 to handle Google authentication.
     *   - Uses then method to asynchronously process the authenticated Google user data.
     *   - Outputs user data to the console, which can be sent to a backend for further processing.
     */
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
