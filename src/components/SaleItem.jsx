const SaleItem = ({ image, title, price, rating }) => {
    return (
        <div className="bg-purple-900 text-white">
            <div>
                <img src={image} alt="title" />
            </div>

            <div className="px-2 py-3 flex flex-col justify-between">
                <p className="text-3xl">{title}</p>
                <p className="text-2xl">${price}</p>
                <p className="text-xl">{rating}</p>
            </div>
        </div>
    )
}

export default SaleItem