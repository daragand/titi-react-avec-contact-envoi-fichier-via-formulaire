import { useEffect, useState } from 'react'
import './style.scss'

const Merci = () => {
    const [order, setOrder] = useState({
        purchasedProducts: []
    })

    useEffect(() => {
        fetch('http://localhost:3000/orders/' + localStorage.getItem('order'))
            .then(data => data.json())
            .then((data) => {
                setOrder(data)
            })
    }, [])

    console.log(order)
    return (
        <main class="optimal-width">
            <div class="main-grid">

                <div class="percent33">
                    <p>Commande <span id="orderId">{order._id}</span></p>
                </div>
                <div class="percent66">
                    <h2>Click & Collect</h2>
                    <h3>commander et déguster</h3>
                </div>
            </div>
            <div class="main-grid" id="paiement">
                <form action="/action_page.php">
                    <div class="commande grid-3 dashed">
                        <div class="commande-faite">
                            <p>Merci pour votre commande</p>
                        </div>
                        <ul id="order-list">
                            {order.purchasedProducts.map((purchasedProduct, index) => (
                                <li>{purchasedProduct.product.name} - {purchasedProduct.unitPrice.$numberDecimal} €</li>
                            ))}
                        </ul>
                        <div class="retirer-commande">
                            <p>Vous pouvez venir la chercher à</p>
                        </div>
                        <div class="clock">
                            <p>12h45</p>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Merci