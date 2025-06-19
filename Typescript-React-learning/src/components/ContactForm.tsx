import React, { useState, type ChangeEvent, type FormEventHandler } from 'react'


type contactformstate = {
    name: string;
    email: string;
}
const ContactForm = () => {
    const [formData, setformData] = useState<contactformstate>({
        name:"",
        email:""
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setformData((prevdata)=>({...prevdata,[name]:value}))
    }

  return (
    <div>
        <form>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
            </label>
        </form>

        <h2>Data:</h2>
        <p>Name:{formData.name}</p>
        <p>EMail:{formData.email}</p>
    </div>
  )
}

export default ContactForm