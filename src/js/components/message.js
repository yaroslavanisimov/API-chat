import firebase from 'firebase/app'
import 'firebase/auth'

export const message = ({photoURL, create , displayName, uid, message } , key) => {
    const $el = document.createElement('div')

    const oldMessage = [...document.querySelectorAll('.message')].find((e) => {
        return e.dataset.key === key
    })

    const className = uid === furebase.auth().currentUser.uid ? 'my-message' : ''

    $el.innerHTML = `
        <div class="message d-flex justify-content-between align-items-center ${className}" data-key="${key}">
            <div class="message-of d-flex">
                <button class="btn d-flex p-0 message-user_img" data-user="${uid}">
                    <img src="${photoURL}" alt="user img">
                </button>
                <div class="message__info d-flex flex-column ml-2">
                    <strong class="message__username">${displayName}</strong>
                    <div class="d-flex mr-2">
                    <span class="message__text">message</span>
                    <button class="material-icons icon-edit">edit</button>
                </div>
            </div>
        </div>
        <span class="date small">${new Date(createAt).toLocaleTimeString()}</span>
    </div>
    `
    return {
        node: $el,
        oldMessage
    }
}
