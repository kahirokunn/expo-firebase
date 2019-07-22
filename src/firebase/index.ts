import firebase from 'firebase/app'
import { installApp } from 'common-messanger'
import 'firebase/auth'
import 'firebase/firestore'
import config from './config.json';

const app = firebase.initializeApp(config)
const firestore = firebase.firestore(app)
installApp(firestore)

const { auth } = firebase
firebase.auth().signInAnonymously().catch((error) => console.error(error))

export { firebase, firestore, auth }
