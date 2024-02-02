import { createContext,useState, useTransition, useEffect } from "react";

 export const DonateContext = createContext ();




export const DonateProvider = ({ children}) => {
    //cuenta de donacion
    const [countDonation, setCountDonation] = useState(0);
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

    //oderDonation
    const [orderDonation,setOrderDonation] =useState ([])

    //get info
    const [info, setInfo] = useState(null);
    //filtrado
    const [infoFiltered, setInfoFiltered] = useState(null);
    console.log(infoFiltered)
    console.log(infoFiltered?.length)
    //search
    const [search, setSearch] = useState(null);
    //filtro por genero
    const [searchGender, setSearchGender] = useState(null);
    
    
     

    const generarGenero = () => Math.random() < 0.5 ? 'Macho' : 'Hembra';

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=25&has_breeds=true&api_key=live_3yLYQDNcJuzGD7LxRbfTRRRAGsvH0w28vHu5oWlek2VFmwvt65uO0OCqfTdePt8y')
        .then(response => response.json())
        .then(data => {
            
            const infoDeGatos = data.map(item => ({
            id: item.id,
            url: item.url,
            nombre: item.breeds[0].name,
            description:item.breeds[0].description,
            genero: generarGenero()
            }));
            setInfo(infoDeGatos);
        });
    }, []);

    const filteredInfoFuntion = (info,search) => {

        return info?.filter(info => info.nombre.toLowerCase().includes(search.toLowerCase()))

    }
    


    const filteredGenderFuntion = (info,searchGender) => {

        return info?.filter(info => info.genero.toLowerCase().includes(searchGender.toLowerCase()))

    }


    
    const filteBY = (searchType,info, searchGender,search)=> {
        if(searchType=== 'nombre'){
            return filteredInfoFuntion(info,search)
        }
        if( searchType === 'genero'){
            return filteredGenderFuntion(info,searchGender)
        }
        if( searchType === 'nombre_and_genero'){
            return filteredGenderFuntion(info,searchGender).filter(info => info.nombre.toLowerCase().includes(search.toLowerCase())) 
        }
        if(!searchType){
            return info
        }
    }
    useEffect(() => {
        if(search && searchGender)setInfoFiltered(filteBY('nombre_and_genero',info,search,searchGender))
        if(search && !searchGender)setInfoFiltered(filteBY('nombre',info,search,searchGender))
        if(searchGender && !search)setInfoFiltered(filteBY('genero',info,searchGender,search))
        if(!searchGender && !search)setInfoFiltered(filteBY(null,info,searchGender,search))
     }, [info,search,searchGender]);
    


    
    return(
        <DonateContext.Provider value={{
            countDonation,
            setCountDonation,
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
            setDonations,
            orderDonation,
            setOrderDonation,
            setInfo,
            info,
            search,
            setSearch,
            infoFiltered,
            setInfoFiltered,
            searchGender,
            setSearchGender
           
        }}>
            {children}
        </DonateContext.Provider>
    )
}