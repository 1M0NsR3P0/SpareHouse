import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config'
// const auth = getAuth(app)

import { getAuth } from 'firebase/auth';
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthContxt = ({ children }) => {
  const [BikeData, setBaikeData] = useState([])

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../public/bikes.json');
        const data = await response.json();

        // Now you can work with the 'data' variable
        // console.log(data[1].Suzuki);
        setBaikeData(data)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const user = 'myname working'
  const authInfo = {
    mobile,
    BikeData,
  }

  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
}



export default AuthContxt;