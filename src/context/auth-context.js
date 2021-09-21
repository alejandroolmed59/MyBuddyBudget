import {createContext} from 'react'

const AuthContext = createContext({
    currentUser: {},
    register: (username, email, password)=>{},
    login: (email, password)=>{},
    logut: ()=>{}
});
AuthContext.displayName = "ContextoCool"
export default AuthContext;