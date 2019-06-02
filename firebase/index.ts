import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import config from './config';

const app = firebase.initializeApp(config)
const firestore = firebase.firestore(app)

const { auth } = firebase

export { firebase, firestore, auth }
