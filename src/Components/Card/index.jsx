import { useContext } from 'react';
import { DonateContext } from '../../Context'
import { useState } from "react";

 export const CardContainer = ({data}) => {
    const context = useContext(DonateContext)
    const [priceDonation,setDonationPrice]= useState(0);
    const handleInputChange = (event) => {
        setDonationPrice(Number(event.target.value));
    };
    const ShowDescription = (infoDetail) => {
        context.OpenDrescription()
        context.setinfoDescriprion(infoDetail)

    }
    const AddToAdoption = (event,dataAdoption) => {
        event.stopPropagation()
        context.setCountAdoption(context.countAdoption + 1) 
        context.setAdoption([...context.adoption,dataAdoption])
        context.OpenAdoption()
    }
    const AddToDonation= (event, dataDonation) => {
        event.stopPropagation()
        context.setCountDonation(context.countDonation + 1)
        
    
        context.setDonations([...context.donation, dataDonation]);
        context.OpenDonation();

    }
    const renderDonateIcon  = (id) => {
        const isInCart = context.donation.some(donation => donation.id === id)
        return(
            isInCart ? (
                <button className=' mt-2 bg-green-200 rounded-lg w-44 h-8 flex justify-center items-center'
            >
                <img src="./src/assets/check.svg" alt="" className='w-6 h-6' />
            </button>

            ):
            (
                <button className=' mt-2 bg-green-400 rounded-lg w-44 h-8'
            onClick={(event) => AddToDonation(event,data,priceDonation)}>Donar</button>

            )

        )
        
        
    }
    const renderAdoptionIcon  = (id) => {
        const isInCart = context.adoption.some(adoption => adoption.id === id)
        return(
            isInCart ? (
                
                <img src="./src/assets/check.svg" alt="" className="cursor-pointer absolute top-0
                right-0 justify-center items-center
                 bg-white w-9 h-9 rounded-lg" />
            

            ):
            (
                <img src="./src/assets/adoption.svg" alt=""
                         title="Adoptar" className="cursor-pointer absolute top-0
                          right-0 justify-center items-center
                           bg-white w-9 h-9 rounded-lg" 
                           onClick={(event) => AddToAdoption(event,data)}/>

            )

        )
        
        
    }

    
    return (
            
                <div 
                className="w-60 md:w-96 bg-white cursor-pointer rounded-lg mb-4"
                >
                    <figure className="relative mb-2 w-full h-4/5">
                        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-8 w-12 h-4"
                        >{data.genero}</span>
                        <img src={data.url} alt="descripcion" className=" h-72 md:h-96 object-cover rounded-lg" 
                        onClick={() => ShowDescription(data)}/>
                        
                        {renderAdoptionIcon(data.id)}
                    </figure>
                    <div className='grid grid-cols-2 mt-5'>
                        <div>
                            <p className="justify-right mt-3">
                                <span className='text-lg font-medium'>
                                    {data.nombre}
                                </span>
                            </p>
                        </div>
                        
                    
                        <div className=' justify-center'>
                            <div className='grid grid-cols-2 items-center'>
                            <h2 className='flex items-center justify-center'>Donar</h2>
                            <img src="/src/assets/donate.svg" alt="" title="Donar" className=" cursor-pointer  w-9 h-9 " 
                            onClick={() => context.OpenDonation()}/>
                            </div>
                            
                            <div className='grid grid-cols-3 items-center'>
                                <button className="bg-green-400 w-9 h-9 rounded-full " 
                                onClick={() => setDonationPrice(priceDonation - 1)}>-</button>
                                <input className='' type="number" value={priceDonation}  onChange={handleInputChange} />
                                <button className="bg-green-400 w-9 h-9 rounded-full"  
                                onClick={() => setDonationPrice(priceDonation + 1)}>+</button>

                                {renderDonateIcon (data.id)}

                            </div> 
                            

                        </div>
                    </div>
                    
                </div>
             
        
    );
};

export default CardContainer;