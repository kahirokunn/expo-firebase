import Ballcap from '@1amageek/ballcap'
import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config';

const app = firebase.initializeApp(config)
const firestore = firebase.firestore(app)
Ballcap.initialize(app.firestore())

const { auth } = firebase

type Timestamp = firebase.firestore.Timestamp

export { firestore, auth, Timestamp }
