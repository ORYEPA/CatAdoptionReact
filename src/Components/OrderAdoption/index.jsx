const OrderAdoption = adopt =>{
    const { id, name, url , genero , handleDelete} = adopt
    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={url} alt="" />
                </figure>
            </div>
            <p className="text-lg font-medium">{name}</p>
            <div>
                <div className="flex items-center gap-2">
                    <p className="text-sm font-light">{genero}</p>
                    <img className="w-6 h-6 cursor-pointer" src="./src/assets/close.svg" alt="" 
                    onClick={() => handleDelete(id)}/>
                </div>
            </div>
        </div>
    )
}


export default OrderAdoption