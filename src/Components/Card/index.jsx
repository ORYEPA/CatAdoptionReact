import { useContext } from 'react';
import { DonateContext } from '../../Context'
 export const CardContainer = ({data}) => {
    const context = useContext(DonateContext)
    const handleInputChange = (event) => {
        context.setCount(Number(event.target.value));
    };
    const ShowDescription = (infoDetail) => {
        context.OpenDrescription()
        context.setinfoDescriprion(infoDetail)

    }
    const AddToAdoption = (dataAdoption) => {
        context.setAdoption([...context.adoption,dataAdoption])
    }
    
    
    return (
            
                <div 
                className="w-60 md:w-96 bg-white cursor-pointer rounded-lg"
                onClick={() => ShowDescription(data)}>
                    <figure className="relative mb-2 w-full h-4/5">
                        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-8 w-12 h-4"
                        >{data.genero}</span>
                        <img src={data.url} alt="" className=" h-72 md:h-96 object-cover rounded-lg" />
                        
                        <img src="/src/assets/adoption.svg" alt=""
                         title="Adoptar" className="cursor-pointer absolute top-0
                          right-0 justify-center items-center
                           bg-white w-9 h-9 rounded-lg" 
                           onClick={() => AddToAdoption(data)}/>
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
                            <img src="/src/assets/donate.svg" alt="" title="Donar" className=" cursor-pointer  w-9 h-9 " />
                            </div>
                            
                            <div className='grid grid-cols-3 items-center'>
                                <button className="bg-green-400 w-9 h-9 rounded-full " 
                                onClick={() => context.setCount(context.count - 1)}>-</button>
                                <input className='' type="number" value={context.count} onChange={handleInputChange} />

                                <button className="bg-green-400 w-9 h-9 rounded-full"  
                                onClick={() => context.setCount(context.count + 1)}>+</button>
                            </div> 
                        </div>
                    </div>
                    
                </div>
             
        
    );
};

export default CardContainer;