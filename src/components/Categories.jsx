const Categories = () => {
    let list = [
        "Men's Clothing",
        "Women's Clothing",
        "Kids' Clothing",
        "Footwear",
        "Accessories",
        "Jewelry",
        "Handbags",
        "Watches",
        "Eyewear",
        "Sportswear",
        "Lingerie",
        "Swimwear",
        "Ethnic Wear",
        "Outerwear",
        "Formal Wear"
    ];

    return (
        <ul className="flex flex-col gap-3 overflow-auto w-[25em]">
            {list.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default Categories