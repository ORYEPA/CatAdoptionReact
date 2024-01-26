import { useContext } from 'react';
import { DonateContext } from '../../Context';
import  OrderAdoption  from '../../Components/OrderAdoption';
    
   
const CheckoutDonation = () => {
    const context = useContext(DonateContext)
    

    
    return (
        <aside className={`${context.isDonationOpen ? 'flex' : 'hidden'} flex-col fixed right-0   
        rounded-lg bg-white border-green-300 h-[calc(100vh-80px)] w-[360px]` }>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl"> Donaciones</h2> 
                <img src="/src/assets/close.svg" alt="" className="w-9 h-9 cursor-pointer" 
                onClick={() => context.CloseDonation()}/>


                

            </div>
            {/* <p className={`${context.countAdoption > 1 ? 'flex' : 'hidden'} text-red-700 text-2xl font-bold text-center` }>Solo se puede adoptar un peludo a la vez</p> */}
            <div className='px-6 overflow-y-scroll'>
            {
                context.donation.map(adopt => (
                    <OrderAdoption  
                    key={adopt.id}
                    name={adopt.nombre} 
                    url={adopt.url} 
                    genero={adopt.genero}/>

                ))
            }
            </div>
            
                
        </aside>
    )

}

export default CheckoutDonation