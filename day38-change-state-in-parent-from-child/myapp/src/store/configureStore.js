import {createStore , combineReducers} from 'redux'
import usersReducers from '../reducers/users'

const configureStore  = () => {
    const store = createStore(combineReducers({
        user: usersReducers
        // posts: postsReducers
    }))
    return store
}

export default configureStore;