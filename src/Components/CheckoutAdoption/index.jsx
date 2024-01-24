import { useContext } from 'react';
import { DonateContext } from '../../Context'

    
   
const CheckoutAdoption = () => {
    const context = useContext(DonateContext)
    return (
        <aside className={`${context.isdescriptionOpen ? 'flex' : 'hidden'} flex-col fixed right-0   
        rounded-lg bg-white border-green-300 h-[calc(100vh-80px)] w-[360px]` }>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl"> Adopción</h2> 
                <img src="/src/assets/close.svg" alt="" className="w-9 h-9 cursor-pointer" 
                onClick={() => context.CloseDrescription()}/>

                

            </div>
            
                
        </aside>
    )

}

export default CheckoutAdoption