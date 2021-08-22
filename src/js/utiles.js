export const renderInDocument = ({node, oldMessage}, inselector = '#app') => {
    if (oldMessage) {
        oldMessage.insertAdjacentElement ('afterend'. node)
        oldMessage.remove()
        return
        // old messages delete process
    }
    return document.querySelector(inSelector).insertAdjacentElement('beforeend', node)
}

export const removeNode = selector => {
    document.querySelector(selector).remove()
}

export const setLocation = url => {
    try {
        history.pushState(null, null, url)
        return
    } catch(e) {}
    location.hash = url
}
// a function that sets a value to the address bar
export const getUrlHash = () => window.location.hash
//  a function that gets a value from the address bar
