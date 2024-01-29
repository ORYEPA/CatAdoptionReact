const OrderAdoption = adopt =>{
    const { id, name, url , priceDonation } = adopt
    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={url} alt="" />
                </figure>
            </div>
            <p className="text-lg font-medium">{name}</p>
            
        </div>
    )
}


export default OrderAdoption