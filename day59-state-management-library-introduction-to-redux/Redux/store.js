// Reducer are those , used to write the main logic 
// Dispatch is the method which is used to call the reducer

// Redux == MocX == ReactContext
const storeReducer = function(action){
    switch(action.type){
        case 'INCREMENT' : {
            this.state.count++;
            break
        }
        case 'DECREMENT' : {
            this.state.count--;
            break
        }
        case 'INCREMENT_BY' : {
            this.state.count += action.payload;
            break
        }
        case 'RESET' : {
            this.state.count = 0
            break
        }
        case 'ADD_USER' : {
            this.state.users = this.state.users.concat(action.payload)
            break
        }
        case 'REMOVE_USER' : {
            this.state.users = this.state.users.filter((user) => {
                return user.id != action.payload.id
            })
            break
        }
        default: {
            this.state.count
            break
        } 
    }
}

const configureStore = () => {
    const store = {
        state: {
            count: 0,
            users: [{id: 1, name: 'aishwarya'}]
        },
        getState: function(){
            return this.state
        },
        dispatch: function(action){
            storeReducer.bind(this)(action)
        }
    }
    return store
}

const store = configureStore()

// action generators or action creators
const increment = () => {
    return {type: 'INCREMENT'} //action
}

const increment_by = (value) => {
    return {type: 'INCREMENT_BY', payload: value}
}

const decrement = () => {
    return {type: 'DECREMENT'}
}

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
console.log(store.getState())
store.dispatch(decrement())
console.log(store.getState())
store.dispatch(increment_by(4))
console.log(store.getState())

// console.log("count : ", store.getState())
// store.dispatch({type: 'INCREMENT'})
// console.log("count : ", store.getState())
// store.dispatch({type: 'INCREMENT'})
// console.log("count : ", store.getState())
// store.dispatch({type: 'INCREMENT_BY', payload: 2})
// console.log("count : ", store.getState())
// store.dispatch({type: 'RESET'})
// console.log("count : ", store.getState())
// store.dispatch({type: 'ADD_USER', payload: {id: 2,name: 'shivakumar'}})
// console.log("count : ", store.getState())
// store.dispatch({type: 'ADD_USER', payload: {id: 3,name: 'sowmya'}})
// console.log("count : ", store.getState())

// store.dispatch({type: 'REMOVE_USER', payload: {id: 3,name: 'sowmya'}})
// console.log("count : ", store.getState())