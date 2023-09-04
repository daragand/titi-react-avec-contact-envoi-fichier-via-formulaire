import { useState } from "react"
import "./style.scss"

const Contact = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState(false)
    const [file, setFile] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = new FormData()
        form.append('firstName', firstName)
        form.append('lastName', lastName)
        form.append('email', email)
        form.append('email', email)
        form.append('phoneNumber', phoneNumber)
        form.append('message', message)
        form.append('file', file)

        fetch('http://localhost:3000/contact', {
            method: 'POST',
            body: form
        })
            .then(res => res.json())
            .then((data) => {
                if (data === true) {
                    setSuccessMessage(true)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <form className="contact" onSubmit={handleSubmit} enctype="multipart/form-data">
            <label htmlFor="firstName">Prenom</label>
            <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} />

            <label htmlFor="lastName">Nom</label>
            <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} />

            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="phoneNumber">Numéro de téléphone</label>
            <input type="phone" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />

            <label htmlFor="file">Fichier</label>
            <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} ></textarea>

            <button>Envoyer</button>
            {successMessage === true ? <p>Le message à bien été envoyé</p> : ''}
        </form>
    )
}

export default Contact