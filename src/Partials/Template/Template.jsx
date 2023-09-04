import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from 'react-router-dom'

const Template = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Template