import {createContext} from 'react'

const AuthContext = createContext({
    currentUser: {},
    register: (username, email, password)=>{},
    login: (email, password)=>{},
    logout: ()=>{}
});
AuthContext.displayName = "ContextoCool"
export default AuthContext;