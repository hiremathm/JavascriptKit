const {createStore, combineReducers} = require('redux')

const departmentsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_DEPARTMENT' : {
            return state.concat(action.payload)
        }
        case 'REMOVE_DEPARTMENT' : {
            return state.filter((department) => {
                return department.id != action.payload
            })
        }
        case 'EDIT_DEPARTMENT' : {
            return state.map((department) => {
                if(department.id == action.payload.id){
                    return Object.assign({}, department, action.payload)
                }else {
                    return Object.assign({}, department)
                }
            })            
        }
        default: 
            return [...state]
    }
}

const employeesReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_EMPLOYEE' : {
            return state.concat(action.payload)
        }
        case 'REMOVE_EMPLOYEE' : {
            return state.filter((employee) => {
                return employee.id != action.payload
            })
        }
        case 'EDIT_EMPLOYEE' : {
            return state.map((employee) => {
                if(employee.id == action.payload.id){
                    return Object.assign({}, employee, action.payload)
                }else {
                    return Object.assign({}, employee)
                }
            })            
        }
        default: 
            return [...state]
    }
}

const store = createStore(combineReducers({
    departments: departmentsReducer,
    employees: employeesReducer
}))

store.subscribe(() => {
    console.log(store.getState())
})

// Department action generator
const addDept = (body) => {
    return {type: 'ADD_DEPARTMENT', payload: body}
}

const removeDept = (id) => {
    return {type: 'REMOVE_DEPARTMENT', payload: id}
}

const editDept = (body) => {
    return {type: 'EDIT_DEPARTMENT', payload: body}
}

store.dispatch(addDept({id: 1, name: 'tech'}))
store.dispatch(addDept({id: 2, name: 'sales'}))
store.dispatch(addDept({id: 3, name: 'hr'}))
store.dispatch(removeDept(3))
store.dispatch(editDept({id: 2, name: 'sales and mentainces', body: "this is the sales and mentainces department"}))

// Employee action generator 
const addEmp = (body) => {
    return {type: 'ADD_EMPLOYEE',payload: body}
}

const removeEmp = (body) => {
    return {type: 'REMOVE_EMPLOYEE', payload: body}
}


store.dispatch(addEmp({id: 1,name: 'shivakumara m'}))
store.dispatch(addEmp({id: 2,name: 'aishwarya g'}))
store.dispatch(addEmp({id: 3,name: 'sowmya g'}))
store.dispatch(removeEmp(1))