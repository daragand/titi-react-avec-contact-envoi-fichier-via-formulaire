import { Link } from 'react-router-dom'
import './style.scss'
import { useState, useEffect } from 'react'

const Recap = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const burger = JSON.parse(localStorage.getItem('burger'))
        const accompagnement = JSON.parse(localStorage.getItem('accompagnement'))
        const boisson = JSON.parse(localStorage.getItem('boisson'))
        const dessert = JSON.parse(localStorage.getItem('dessert'))
        setProducts([burger, accompagnement, boisson, dessert])
    }, [])

    return (
        <main className="optimal-width choice">
            <div className="main-grid">

                <div className="percent50 text-left">
                    <h1 className="text-left">Nos burgers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at ultrices praesent posuere sit.
                        Pulvinar est sagittis in ultrices. Mauris est sed id orci, massa in. Leo duis sed eu lacinia
                        bibendum fermentum ac cras.Lorem ipsum </p>
                </div>

                <div className="percent50">
                    <h2>Click & Collect</h2>
                    <h3>commandez et dégustez</h3>
                    <div className="grid-4 bar-slider-burger">
                        <div className="bar-slider-burger-after"></div>
                        <div className="slider-burger-block ">
                            <img className="slider-burger" src={products[0]?.image} alt="" />
                        </div>
                        <div className="slider-burger-block">
                            <img className="slider-burger" src={products[1]?.image} alt="" />
                        </div>
                        <div className="slider-burger-block">
                            <img className="slider-burger" src={products[2]?.image} alt="" />
                        </div>
                        <div className="slider-burger-block ">
                            <img className="slider-burger" src={products[3]?.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-grid" id="nos-burgers">
                <div id="burger-form">
                    {products.map((burger, index) => (
                        <div className="choise-burger center grid-3 dashed" key={burger._id}>
                            <div className="choise-burger">
                                <label htmlFor={burger._id} className="work-plan">
                                    <img src={burger.image} alt={burger.name} />
                                </label>
                            </div>
                            <p>{burger.name} - {burger.price.$numberDecimal}</p>
                            <p className="text-left">{burger.description}</p>
                        </div>
                    ))}
                </div>
                <Link className="call-to-action btn-form" to="/paiement">Suivant</Link >
            </div>
        </main>
    )
}

export default Recap