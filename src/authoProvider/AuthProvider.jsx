    import { createContext, useEffect, useState } from "react";
    import app from '../firebase/firebase.config'
    // const auth = getAuth(app)

    import { getAuth } from 'firebase/auth';
    const auth = getAuth(app);

    export const AuthContext = createContext();

    const AuthContxt = ({children})=>{


        const [mobile, setMobile] = useState(window.innerWidth <= 768);

        useEffect(() => {
          const handleResize = () => {
            setMobile(window.innerWidth <= 768);
          };
      
          window.addEventListener('resize', handleResize);
      
          // Cleanup the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []); 

        const user = 'myname working'
        const authInfo = {
            mobile,
        }
        
            return <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    }



    export default AuthContxt;