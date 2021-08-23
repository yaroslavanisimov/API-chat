import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const db = firebase.firestore()

export const updateMessage = async (updateData) => {
  try {
    const where = {
      filedPath: id ? 'id' : 'uid',
      opStr: '==',
      value: id || firebase.auth().currentUser.uid
    }
     const messageData = await db
       .collection('message')
       .where(where.filedPath, where.opStr, where.value)
       //sorting method
       .get()

   messageData.forEach(doc => {
     doc.ref.update(updateData)
   })
   //we take link on the users and method "update"


  } catch(e) {
    console.error(e)
  }


}
