import { Link } from 'react-router-dom'
import './style.scss'

const Home = () => {

    return (
        <>
            <main className="optimal-width">
                <h1>Titi Burger - Restaurant authentique</h1>
                <div className="main-grid">
                    <figure id="resto" className="percent33">
                        <h2>Le Resto</h2>
                        <img loading="lazy" src="./images/le-resto.webp" alt="Restaurant Titi burger" />
                    </figure>
                    <div id="story" className="percent66">
                        <h2>Titi Story</h2>
                        <h3>Une équipe Authentique</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at ultrices praesent posuere sit.
                            Pulvinar est sagittis in ultrices. Mauris est sed id orci, massa in. Leo duis sed eu lacinia
                            bibendum fermentum ac cras.Lorem ipsum </p>
                        <Link to="#">Lire la suite</Link>
                    </div>
                </div>
                <div className="main-grid" id="nos-burgers">
                    <div className="percent33">
                        <h2>Nos Burgers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at ultrices praesent posuere sit.
                            Pulvinar </p>
                    </div>
                    <div className="percent66">
                        <div id="diapo">
                            <img loading="lazy" src="./images/hamburger-double.jpg" alt="Hamburger Double" />
                            <img loading="lazy" src="./images/hamburger-just-eat.jpg" alt="Hamburger just-Eat" />
                            <img loading="lazy" src="./images/hamburger-gourmet.jpg" alt="Hamburger Gourmet" />
                            <img loading="lazy" src="./images/buger-delicious.jpg" alt="Hamburger Delicious" />
                            <img loading="lazy" src="./images/hamburger-crafters.jpg" alt="Hamburger Crafters" />
                        </div>
                    </div>
                </div>
                <h2 className="center">Actus</h2>
                <div className="grid-3" id="add-burgers">
                </div>
            </main>
            <div className="newsletter">
                <div className="newsletter-content optimal-width">
                    <div className="percent40">
                        <h4>Des offres et des actus<br />Chaque semaine sur Titi Burger</h4>
                    </div>
                    <div className="percent60 right">
                        <h4>Inscription à Newsletter</h4>
                        <form action="#" method="POST">
                            <span>c'est par ici</span>
                            <input type="text" name="email" />
                            <button className="call-to-action"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                            </svg></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home