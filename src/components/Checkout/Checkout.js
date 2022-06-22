import { useState } from "react"

export const Checkout = () =>{

    const [values, setValues] = useState({
        name: '',
        email: '',
        address: ''
    })

    return(
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form>
                <input
                    value={values.name}
                    name="name"
                    type={"text"}
                    placeholder="Jon Doe"
                    className="form-control my-2"
                    />

                <input
                    value={values.email}
                    name="email"
                    type={"jon@doe.com"}
                    placeholder="email"
                    className="form-control my-2"
                    />

                <input
                    value={values.address}
                    name="address"

                    type={"Street 123"}
                    placeholder="text"
                    className="form-control my-2"
                    />

                    <button type="submit" >Send</button>
            </form>


        </div>
    )
}