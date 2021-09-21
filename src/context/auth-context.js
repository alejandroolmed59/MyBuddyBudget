import {createContext} from 'react'

const AuthContext = createContext({
    currentUser: {},
    register: (email, password)=>{},
    login: (email, password)=>{},
    logut: ()=>{}
});

export default AuthContext;