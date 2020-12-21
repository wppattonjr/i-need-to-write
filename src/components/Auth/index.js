import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import JournalImage from './JournalImage.png';

export default class Auth extends Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className='Auth'>
        <img src={JournalImage} alt='journal icon' />
          <><i class="fa fa-google-plus"></i></>
          <a onClick={this.loginClickEvent} class='btn btn-danger' href='/journals'> Sign in with Google</a>
      </div>
    );
  }
}
