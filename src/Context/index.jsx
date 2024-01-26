import { createContext,useState } from "react";

 export const DonateContext = createContext ();




export const DonateProvider = ({ children}) => {
    //cuenta de donacion
    const [count, setCount] = useState(0);
    //cuenta de adopcion
    const [countAdoption, setCountAdoption] = useState(0);
    
    //show description
    const [isdescriptionOpen, setdescriptionOpen] = useState(false)
    const OpenDrescription = () => setdescriptionOpen (true)
    const CloseDrescription = () => setdescriptionOpen (false)

    //info description
    const [infoDescriprion, setinfoDescriprion] = useState({})

    //adopciones
    const [adoption, setAdoption] = useState([])

    //ventana de adopcion
    const [isAdoptionOpen, setAdoptionOpen] = useState(false)
    const OpenAdoption = () => setAdoptionOpen (true)
    const CloseAdoption = () => setAdoptionOpen (false)


    //ventana de donacion
    const [isDonationOpen, setDonationOpen] = useState(false)
    const OpenDonation = () => setDonationOpen (true)
    const CloseDonation = () => setDonationOpen (false)

    //donaciones
    const [donation, setDonations] = useState([])

    
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
            setAdoption,
            OpenAdoption,
            CloseAdoption,
            isAdoptionOpen,
            countAdoption,
            setCountAdoption,
            isDonationOpen,
            OpenDonation,
            CloseDonation,
            donation,
            setDonations
        }}>
            {children}
        </DonateContext.Provider>
    )
}