import { createContext,useState } from "react";

 export const DonateContext = createContext ();




export const DonateProvider = ({ children}) => {
    const [count, setCount] = useState(0);
    //show description
    const [isdescriptionOpen, setdescriptionOpen] = useState(false)
    const OpenDrescription = () => setdescriptionOpen (true)
    const CloseDrescription = () => setdescriptionOpen (false)

    //info description
    const [infoDescriprion, setinfoDescriprion] = useState({})
    //adopciones
    const [adoption, setAdoption] = useState([])

    
    return(
        <DonateContext.Provider value={{
            count,
            setCount,
            OpenDrescription,
            CloseDrescription,
            isdescriptionOpen,
            infoDescriprion,
            setinfoDescriprion,
            adoption,
            setAdoption
            
        }}>
            {children}
        </DonateContext.Provider>
    )
}