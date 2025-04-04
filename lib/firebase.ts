// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANr_zlU7xfv7owcdus-8xtxD85-vKgP1s",
    authDomain: "canal-seguro-independente.firebaseapp.com",
    projectId: "canal-seguro-independente",
    storageBucket: "canal-seguro-independente.firebasestorage.app",
    messagingSenderId: "285405639622",
    appId: "1:285405639622:web:656284e901c441675db8c7"
  };

// Inicializa o Firebase com as configurações do seu projeto
const app = initializeApp(firebaseConfig);

// Exporta o banco de dados Firestore para uso no projeto
const db = getFirestore(app);

export { db };
