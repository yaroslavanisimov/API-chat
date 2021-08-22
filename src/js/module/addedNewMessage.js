import firebase from 'firebase/app'

import 'firebase/firestore'

import {uid as createUid} from 'uid'

const db = firebase.firestore()
const setMessage = ({message, user}) => {
    try {
        const  id = createUid (16)
        const {uid, displayName, photoURL} = user
        // we will take this data from User
        await db.collection ('message').doc(id).set({
            createAt: Date.now(),
            message,
            uid,
            displayName,
            photoURL
        })
    } catch(e) {}
}


export const handleMessage = user => {
    const messageForm = document.querySelector('.message-form')
    const handleForm = e => {
        e.preventDefault ()
        const input = document.querySelector('.input-message')
        const message = input.value.trim()

        if (message === '') {
            alert('Field should be filled')
            return
        }

    setMessage ({message,user})
        .then(()=>{
            input.value =''
            scroll.scrollTop = scrollHeight
            // will scroll after message sending
        })
    
    }
    messageForm.addEventListener('submit', handleForm)
}