export const message = () => {
    const $el = document.createElement('div')
    $el.innerHTML = `
        <div class="message d-flex justify-content-between align-items-center" data-key="key">
            <div class="message-of d-flex">
                <button class="btn d-flex p-0 message-user_img" data-user="uid">
                    <img src="photoURL" alt="user img">
                </button>
                <div class="message__info d-flex flex-column ml-2">
                    <strong class="message__username">displayName</strong>
                    <div class="d-flex mr-2">
                    <span class="message__text">message</span>
                    <button class="material-icons icon-edit">edit</button>
                </div>
            </div>
        </div>
        <span class="date small">createAt</span>
    </div>
    `
    return {
        node: $el
    }
}
