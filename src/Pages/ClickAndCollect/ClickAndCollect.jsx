import './style.scss'
import { Link } from 'react-router-dom'
const ClickAndCollect = () => {

    return (
        <div className="clickandcollect">
            <main className="optimal-width">
                <h1>Click & Collect</h1>
                <img className="dashed-line" src="/icons/dashed-line.svg" alt="Ligne pointillé" />
                <h3>Commandez et dégustez</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at ultrices praesent posuere sit. Pulvinar
                </p>
            </main>
            <div className="newsletter">
                <div className="optimal-width">
                    <div className="newsletter-content">
                        <Link to="/nos-burgers" className="call-to-action">Commencer</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClickAndCollect