import './style.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from '../../Component/Product'

const Burgers = () => {
    const [burgers, setBurgers] = useState([])
    const [choosedProduct, setChoosedProduct] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://titi.startwin.fr/products/type/burger')
            .then(res => res.json())
            .then(data => setBurgers(data))
            /*.then((data) => { equivalent de la ligne du dessus
                setBurgers(data)
            })*/
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (choosedProduct === undefined) {
            alert('Veuillez choisir un produit, s\'il vous plait')
            return
        }

        fetch('https://titi.startwin.fr/products/' + choosedProduct)
            .then(res => res.json())
            .then((data) => {
                localStorage.setItem('burger', JSON.stringify(data))
                navigate('/nos-accompagnements')
            })
    }

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
                            <div className="slider-burger"></div>
                        </div>
                        <div className="slider-burger-block">
                            <div className="slider-burger"></div>
                        </div>
                        <div className="slider-burger-block">
                            <div className="slider-burger"></div>
                        </div>
                        <div className="slider-burger-block ">
                            <div className="slider-burger"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-grid" id="nos-burgers">
                <form id="burger-form" onSubmit={handleSubmit}>
                    {burgers.map((burger, index) => (
                        <Product product={burger} setChoosedProduct={setChoosedProduct} />
                    ))}
                </form>
                <button className="call-to-action btn-form" form="burger-form">Suivant</button>
            </div>
        </main>
    )
}

export default Burgers