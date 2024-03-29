import { useContext } from 'react';
import { DonateContext } from '../../Context';
import  OrderAdoption  from '../../Components/OrderAdoption';
    
   
const CheckoutAdoption = () => {
    const context = useContext(DonateContext)

    const handleDelete = (id) => {
        const filteredAdoptions = context.adoption.filter(adoption => adoption.id != id)
        context.setAdoption(filteredAdoptions)
    }
    
    return (
        <aside className={`${context.isAdoptionOpen ? 'flex' : 'hidden'} flex-col fixed right-0   
        rounded-lg bg-white border-green-300 h-[calc(100vh-80px)] w-[360px]` }>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl"> Adopción</h2> 
                <img src="/src/assets/close.svg" alt="" className="w-9 h-9 cursor-pointer" 
                onClick={() => context.CloseAdoption()}/>


                

            </div>
            {/* <p className={`${context.countAdoption > 1 ? 'flex' : 'hidden'} text-red-700 text-2xl font-bold text-center` }>Solo se puede adoptar un peludo a la vez</p> */}
            <div className='px-6'>
            {
                context.adoption.map(adopt => (
                    <OrderAdoption  
                    key={adopt.id}
                    id={adopt.id}
                    name={adopt.nombre} 
                    url={adopt.url} 
                    genero={adopt.genero}
                    handleDelete={handleDelete}/>
                    

                ))
            }
            </div>
            
                
        </aside>
    )

}

export default CheckoutAdoption