import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTcmEfm8Rd5JC1bQTNCRR_4Q6L_uFt5wo",
  authDomain: "expence-tracker-8fdca.firebaseapp.com",
  projectId: "expence-tracker-8fdca",
  storageBucket: "expence-tracker-8fdca.appspot.com",
  messagingSenderId: "590675270473",
  appId: "1:590675270473:web:a255cd326c46578da49898",
};

const app = initializeApp(firebaseConfig);
export default app;
