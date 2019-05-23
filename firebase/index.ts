import firebase from 'firebase';
import config from './config';

const app = firebase.initializeApp(config)
const firestore = firebase.firestore(app)

export { firestore }
