import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.config';

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/*
steps for authentication
----------------------
Step-1: Initial Setup

1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

Step-2:
1.Create Login Component
2.Create Register Compoentn
3.Create Route for Logic and Register

------------------
Step 3:
1.set up sign in method
2. setup sign out method
3. user state
4. special observe
5. return necessary methods and states from useFirebase

-----------------
Step 4:
1. create a auth contex
2. create context provider
3. use auth provider
4.create useAuth hook
*/
