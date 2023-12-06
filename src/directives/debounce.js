/*

    v-debounce Directive

        v-debounce:eventname.duration="handler" 

        This will debounce the { handler } for { eventname } 
        calling it only after { duration } ms have passed
        since it was last requested.

*/

export const debounce = {
    mounted(el, binding) {
        _setHandler(el, binding)
    },
    unmounted(el, binding) {
        _removeHandler(el, binding)
    },
}

function _setHandler(el, { value: handler, arg, modifiers, dir }) {

    if (!handler) return
    const wait = +Object.keys(modifiers)[0]

    if (isNaN(wait)) return

    dir._handler = _debounce(handler, wait)
    dir._trackedEvent = arg

    el.addEventListener(arg, dir._handler)
}

function _removeHandler(el, { modifiers, dir }) {
    el.removeEventListener(dir._trackedEvent, dir._handler)

    delete dir._handler
    delete dir._trackedEvent
}

function _debounce(func, wait) {
    let timer

    return function (...args) {
        if (timer) {
            clearTimeout(timer) // clear any pre-existing timer
        }
        const context = this // get the current context
        timer = setTimeout(() => {
            func.apply(context, args) // call the function if time expires
        }, wait)
    }
}
