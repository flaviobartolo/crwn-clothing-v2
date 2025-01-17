// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
          getAuth, 
          signInWithRedirect, 
          signInWithPopup, 
          GoogleAuthProvider, 
          createUserWithEmailAndPassword, 
          signInWithEmailAndPassword,
          signOut,
          onAuthStateChanged
        } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs, Query } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBobXMm3dMtrPfTgukRQ3ljXHyHgLan_Oc",
  authDomain: "crwn-clothing-db-b6e96.firebaseapp.com",
  projectId: "crwn-clothing-db-b6e96",
  storageBucket: "crwn-clothing-db-b6e96.appspot.com",
  messagingSenderId: "725103855567",
  appId: "1:725103855567:web:31bff79e7c71d8bcee74ba"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})


export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object[field].toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

  if(!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())

  // if user data does not exist
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating a new user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password ) return
  
  return await createUserWithEmailAndPassword(auth, email, password)
} 

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password ) return
  
  return await signInWithEmailAndPassword(auth, email, password)
} 

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)