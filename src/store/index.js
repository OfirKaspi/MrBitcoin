import { createStore } from 'vuex'
import contact from './modules/contact.js'

// Create a new store instance.
const storeOptions = {
    strict: true,
    state() {
        return {
            count: 99,
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementBy(state, { by }) {
            state.count += by
        },
    },
    actions: {
        incLater(context) {
            setTimeout(() => context.commit({ type: 'increment' }), 1000)
        }
    },
    getters: {
        count(state) { return state.count }
    },
    modules: {
        contact,
    }
}
const store = createStore(storeOptions)
// store.subscribe((cmd, state) => {
//     console.log('cmd', cmd)
//     console.log('state', state)
//     // localStorage.setItem('store', JSON.stringify(state))
// }) 
export default store