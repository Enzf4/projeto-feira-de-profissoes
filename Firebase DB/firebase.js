(function () {

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
      
    apiKey: "AIzaSyCR3pG_nz3JgciXiskGQex-Wx7zTL4U3xg",

    authDomain: "projeto-feira-de-profissoes.firebaseapp.com",

    projectId: "projeto-feira-de-profissoes",

    storageBucket: "projeto-feira-de-profissoes.appspot.com",

    messagingSenderId: "371773390210",

    appId: "1:371773390210:web:f6df69e14d1f943058239b",

    measurementId: "G-RM023SDEJ9"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);

  const analytics = getAnalytics(app);

})()

