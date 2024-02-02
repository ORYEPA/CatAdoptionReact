import { useState } from "react"
import axios from 'axios';


import Layout from "../../Components/Layout"
import CardContainer from "../../Components/Card"
import { data } from "autoprefixer";
import Description from "../../Components/Description";
import CheckoutAdoption from  "../../Components/CheckoutAdoption"
import CheckoutDonation from  "../../Components/CheckoutDonation"
import { useContext } from 'react';
import { DonateContext } from '../../Context'

function Home() {
  const context = useContext(DonateContext)

  

  const renderView = () => {
    
    
    if(context.infoFiltered?.length > 0){
      console.log('dentro del if de info filtrada')

      return(
        <div className="grid gap-4 grid-cols-2 w-full max-w-screen-lg">
          {
            context.infoFiltered?.map(info=>(
              <CardContainer key={info.id} data={info} />
            ))
          }
          </div>

      )
    }
      
      
    else{
      console.log('entra al else')

      return(
        <div className="grid gap-4 grid-cols-2 w-full max-w-screen-lg">
          {
            context.info?.map(info=>(
              <CardContainer key={info.id} data={info} />
            ))
          }
          </div>
      )
    
    }
      

    
  }



  return (
    
        <Layout>
          <div className="flex items-center justify-center relative w-80 mb-4">
            <h1 className="font-medium text-xl">Todos</h1>
          </div>
          <input type="text" placeholder="Buscar"
          className="rounded-lg border border-black w-60 p-4 mb-8 focus:outline-none" 
          onChange={(event)=> context.setSearch(event.target.value)}/>
            
            {renderView()}
            <Description/>
            <CheckoutAdoption />
            <CheckoutDonation />
        </Layout>
    
  )
}

export default Home
