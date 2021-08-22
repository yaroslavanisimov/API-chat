import firebase from 'firebase/app'
import 'firebase/auth'
import './module/firebaseConfig'

import {getUrlHash, renderInDocument, setLocation} from './utiles'
import {mainContent} from './component/mainContent'
import {handleMessage} from './module/addedNewMessage'
import {viewMessage} from './module/viewMessage'
import {userSettingsModal} from './components/userSettingsModal'
import {userSettings} from './module/userSettings'
import {userProfile} from './components/userProfile'
import { manageMessage } from './module/manageMessage'

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
    renderInDocument(mainContent(user))
    renderInDocument(userSettingsModal())
    renderInDocument(userProfile())
    userSettings(user)
    handleMessage(user)
    manageMessage()
    viewMessage()
    //if we have user -> no register -> return to the Domen
})
