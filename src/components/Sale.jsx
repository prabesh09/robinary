import SaleItem from "./SaleItem"

const Sale = () => {
    const items = [{
        title: "Coat",
        price: "1223",
        image: "",
        rating: ""
    }, {
        title: "Coat with Mufller",
        price: "569",
        image: "",
        rating: ""
    }, {
        title: "Straw Hat",
        price: "1022",
        image: "",
        rating: ""
    }, {
        title: "Grey Buggy Tshirt",
        price: "997",
        image: "",
        rating: ""
    }, {
        title: "Vivid Bags",
        price: "1016",
        image: "",
        rating: ""
    }, {
        title: "Pinkey Sweet Shirts",
        price: "882",
        image: "",
        rating: ""
    }, {
        title: "Gol Jewels",
        price: "2992",
        image: "",
        rating: ""
    }]
    return (
        <div>
            <div className="px-10 mt-10">
                <h1 className="text-3xl text-purple-900">
                    Today's Sale
                </h1>
                <div className="flex gap-5 my-4">
                    {items.map((item, index) => (
                        <SaleItem key={index} image={`products/${index + 1}.png`} title={item.title} price={item.price} rating="⭐⭐⭐⭐⭐" />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Sale