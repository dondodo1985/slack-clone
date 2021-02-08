import React from 'react';
import "./Login.css";
import {Button} from '@material-ui/core';
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Login() {
    const[state,dispatch]= useStateValue();

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).then(
            result => {
                console.log(result);
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                });
            }
        ).catch(error=>{
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp"
                     alt=""/>
                <h1>Sign in to Slack-Clone HQ</h1>
                <p>ragive.slackclone.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login;