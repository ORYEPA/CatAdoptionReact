import { useContext } from 'react';
import { DonateContext } from '../../Context'

    
   
const Description = () => {
    const context = useContext(DonateContext)
    return (
        <aside className={`${context.isdescriptionOpen ? 'flex' : 'hidden'} flex-col fixed right-0   
        rounded-lg bg-white border-green-300 h-[calc(100vh-80px)] w-[360px]` }>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl"> Description</h2> 
                <img src="/src/assets/close.svg" alt="" className="w-9 h-9 cursor-pointer" 
                onClick={() => context.CloseDrescription()}/>

                

            </div>
            <figure>
                    <img src={context.infoDescriprion.url} alt="" className="  w-full h-full rounded-lg  " />

                </figure>
                <p className='flex flex-col p-6'>
                    <span className='text-2xl font-bold'>
                        {context.infoDescriprion.nombre}
                    </span>
                    <span>
                        {context.infoDescriprion.genero}
                    </span>
                    <span>
                        {context.infoDescriprion.description}
                    </span>
                
                </p>
        </aside>
    )

}

export default Description