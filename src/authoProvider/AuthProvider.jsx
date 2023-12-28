    import { createContext } from "react";
    import app from '../firebase/firebase.config'
    // const auth = getAuth(app)

    import { getAuth } from 'firebase/auth';
    const auth = getAuth(app);

    export const AuthContext = createContext();

    const AuthContxt = ({children})=>{

        const user = 'myname working'
        const authInfo = {
            user
        }
        
            return <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    }



    export default AuthContxt;