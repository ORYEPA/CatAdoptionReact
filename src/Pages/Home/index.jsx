import { useState, useEffect } from "react"
import axios from 'axios';


import Layout from "../../Components/Layout"
import CardContainer from "../../Components/Card"
import { data } from "autoprefixer";
import Description from "../../Components/Description";
import CheckoutAdoption from  "../../Components/CheckoutAdoption"
import CheckoutDonation from  "../../Components/CheckoutDonation"

function Home() {
 
  const [info, setInfo] = useState([]);

 

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


  return (
    
        <Layout>
            
            <div className="grid gap-4 grid-cols-2 w-full max-w-screen-lg">
            {
              info?.map(info=>(
                <CardContainer key={info.id} data={info} />
              ))
            }
            </div>
            <Description/>
            <CheckoutAdoption />
            <CheckoutDonation />
        </Layout>
    
  )
}

export default Home
