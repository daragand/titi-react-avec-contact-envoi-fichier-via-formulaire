const Product = ({ product, setChoosedProduct }) => {

    return (
        <div className="choise-burger center grid-3 dashed" key={product._id}>
            <div className="choise-burger">
                <input type="radio" id={product._id} name="burger" value={product._id} onChange={(e) => setChoosedProduct(e.target.value)} />
                <label htmlFor={product._id} className="work-plan">
                    <img src={product.image} alt={product.name} />
                </label>
            </div>
            <p>{product.name} - {product.price.$numberDecimal}</p>
            <p className="text-left">{product.description}</p>
        </div>
    )
}

export default Product