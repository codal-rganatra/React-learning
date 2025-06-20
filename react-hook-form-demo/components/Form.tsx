import React from 'react'
import { useForm, type SubmitHandler } from "react-hook-form"


type Formdata = {
    name: string;
    email: string;
    password: string;
}
const Form = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Formdata>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: <input type="text" id="name" {...register("name", { required: "Name is required" })} /></label><br />
                {errors.name && <p style={{ color: "red", fontFamily: "sans-serif" }}>{errors.name.message}</p>}

                <label>Email: <input type="email" id="email" {...register("email", { required: "Email is required", pattern:{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"Invalid email address"
                } })} /></label><br />
                {errors.email && <p style={{ color: "red", fontFamily: "sans-serif" }}>{errors.email.message}</p>}

                <label>Password: <input type="password" id="password" {...register("password", { required: "Password is required" })} /></label><br />
                {errors.password && <p style={{ color: "red", fontFamily: "sans-serif" }}>{errors.password.message}</p>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form