import firebase from 'firebase/app'
import 'firebase/firestore'

import {message} from '../components/message'
import {renderInDocument} from '../utiles'

const db = firebase.firestore()

export const viewMessage =  () => {
    const messageRef = db.collection('message')
    const query = messageRef.orderBy('createAt')
    query.onSnapshot(docsData => {
        docsData.docs.forEach((doc,i) => {
            const data = doc.data()
            renderInDocument(message(data, data.id), '.messages')
        })
        const scroll = document.querySelector('.messages')
        scroll.scrollTop = scroll.scrollHeight
    })
}