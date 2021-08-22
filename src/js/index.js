import firebase from 'firebase/app'
import './module/firebaseConfig'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/style.sass'

firebase.auth().onAuthStateChanged(async user => {
    if (!user) {
        const {auth} = await import('./module/auth')
        setLocation(getUrlHash() || '#register')
        // if we have no user -> registration, 
        auth()
        return
    }
    setLocation('/')
    //if we have user -> no register -> return to the Domen
})
