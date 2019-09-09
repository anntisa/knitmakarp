import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import '@firebase/storage';
import firebase from '@firebase/app';
import logo from './../logo.svg';
import './Main.css';



// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyDpu-_7qDAM810dMI6UoZWXVaJfjVWSKs0",
    authDomain: "knitmakarp-1.firebaseapp.com",
    databaseURL: "https://knitmakarp-1.firebaseio.com",
    projectId: "knitmakarp-1",
    storageBucket: "knitmakarp-1.appspot.com",
    messagingSenderId: "936040263204",
    appId: "1:936040263204:web:cfb3ab9a776394384df2b1"
};
firebase.initializeApp(firebaseConfig);

const LogInPage: React.FC = () => {

    // Get a reference to the storage service, which is used to create references in your storage bucket
    var fireStorage = firebase.storage();
    // Create a storage reference from our storage service
    var storageRef = fireStorage.ref();
    // Child references can also take paths delimited by '/'
    var headerImageRef = storageRef.child('images/magikarp-hat-official.jpg');

    return (

        <div class="agileits_main">
            <div class="banner_text_w3layouts">
                <h3>KnitMaKarp</h3>
                <span> </span>
                <p>Personally Hand Crafted and Designed</p>
            </div>

        </div>
    );
};



export default LogInPage;
