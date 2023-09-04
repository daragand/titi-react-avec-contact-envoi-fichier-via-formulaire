import './style.scss'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Paiement = () => {
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const burger = JSON.parse(localStorage.getItem('burger'))
        const accompagnement = JSON.parse(localStorage.getItem('accompagnement'))
        const boisson = JSON.parse(localStorage.getItem('boisson'))
        const dessert = JSON.parse(localStorage.getItem('dessert'))
        setTotal(
            parseFloat(burger.price.$numberDecimal) +
            parseFloat(accompagnement.price.$numberDecimal) +
            parseFloat(boisson.price.$numberDecimal) +
            parseFloat(dessert.price.$numberDecimal)
        )
    }, [])

    const sendOrder = (orderData) => {
        fetch('http://localhost:3000/orders', {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify([
                orderData,
                [
                    JSON.parse(localStorage.getItem('burger')),
                    JSON.parse(localStorage.getItem('accompagnement')),
                    JSON.parse(localStorage.getItem('boisson')),
                    JSON.parse(localStorage.getItem('dessert')),
                ]
            ])
        })
            .then(result => result.json())
            .then((data) => {
                localStorage.clear()
                localStorage.setItem('order', data._id)
                navigate("/merci")
            })
            .catch(error => console.log(error))
    }

    console.log(total)
    return (
        <main className="optimal-width paiement">
            <div className="main-grid">
                <div className="percent33">
                    <p>commande TITI03FTP092201</p>
                </div>
                <div className="percent66">
                    <h2>Click & Collect</h2>
                    <h3>commander et déguster</h3>
                </div>
            </div>
            <div className="paiement">
                <div className="main-grid" id="paiement">
                    <form action="/action_page.php">
                        <div className="choise-paiement center grid-3 dashed">
                            <p className="text-left">Paiement</p>
                        </div>
                        <PayPalScriptProvider options={{ clientId: "AWYIF76W1ToMO8jzvEAArqYAQceS7Jr4dMx0bPlX0wiV0sN0qYjtCBne592v41M7CZCwwZ8ExOaskUt-", currency: 'EUR' }}>
                            <PayPalButtons
                                createOrder={(data, actions) => {
                                    return actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: total,
                                                },
                                            },
                                        ],
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((orderData) => {
                                        sendOrder(orderData)
                                    });
                                }}
                            />
                        </PayPalScriptProvider>
                    </form>
                    <div className="right-image">
                        <p>Promo pour votre prochaine commande</p>
                        <img src="/images/buger-delicious.jpg" alt="promo burger" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Paiement