import { userService } from '../../services/user.service.js'

export default {
    state() {
        return {
            users: null,
            currUser: null,
        }
    },
    mutations: {
        setUsers(state, { users }) {
            state.users = users
        },
        updateUser(state, { savedUser }) {
            console.log(savedUser)
            const idx = state.users.findIndex(user => user.username === savedUser.username)
            state.users.splice(idx, 1, savedUser)
        },
        signup(state, { user }) {
            state.users.push(user)
        },
        setCurrUser(state, { user }) {
            state.currUser = user;
            console.log('currUser', state.currUser);
        },
    },
    actions: {
        async loadUsers(context) {
            try {
                const users = await userService.query()
                console.log(users);
                context.commit({ type: 'setUsers', users })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async updateUser(context, { user }) {
            try {
                const savedUser = await userService.update(user)
                context.commit({ type: 'updateUser', savedUser })
                context.commit({ type: 'setCurrUser', savedUser })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async signup(context, { username }) {
            try {
                const existingUser = context.state.users.find(user => user.username === username);
                console.log('existingUser', existingUser);
                if (!existingUser) {
                    const savedUser = await userService.signup(username)
                    context.commit({ type: 'signup', user: savedUser })
                    context.commit({ type: 'setCurrUser', user: savedUser })
                } else {
                    context.commit({ type: 'setCurrUser', user: existingUser })
                }
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        setCurrUser(context, { user }) {
            context.commit({ type: 'setCurrUser', user });
        },
    },
    getters: {
        users(state) { return state.users },
        currUser(state) { return state.currUser }
    },
}