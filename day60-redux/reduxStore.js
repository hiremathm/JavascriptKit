const { createStore } = require('redux')
// from your reducer whatever you are returning , it must be object , and reducers are pure functions
// pure functions - pure functions are those which will not change the parameter value , and it will always return the new value
// whenever the state value changes, the subscribe method will get called
const reducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT' : {
            return {
                count: state.count + 1
            }
        }
        case 'DECREMENT' : {
            return {
                count: state.count - 1
            }
        }
        case 'RESET' : {
            return {
                count: 0
            }
        }
        case 'INCREMENT_BY' : {
            return {
                count: state.count + action.payload
            }
        }
        case 'DECREMENT_BY' : {
            return {
                count: state.count - action.payload
            }
        }
        default : {
            return {
                count: state.count
            }
        }
    }
}

const store = createStore(reducer)
// console.log(store)


store.subscribe( () => {
    console.log(store.getState())
})

const increment = () => {
    return {type: 'INCREMENT'}
}

const decrement = () => {
    return {type: 'DECREMENT'}
}

const increment_by = () => {
    return {type: 'INCREMENT_BY', payload: 1}
}

const decrement_by = () => {
    return {type: 'DECREMENT_BY', payload: 1}
}

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment_by())
store.dispatch(decrement_by())

