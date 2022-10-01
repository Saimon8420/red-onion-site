import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Form } from 'semantic-ui-react';
import { CartContext } from '../../../App';
import './Checkout.css';
const CheckOut = () => {
    const { value, value2 } = useContext(CartContext);
    const [cartItem] = value;
    const [grandTotal] = value2;
    let count = 0;
    const [sumTotal, setSumTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const handleFormVoucher = (event) => {
        event.preventDefault();
        const code = "PROMO10";
        const voucherCode = event.target.voucher.value;
        if (voucherCode.toUpperCase() === code) {
            setDiscount((grandTotal * 100 / 1000).toFixed(2));
            setSumTotal((grandTotal - discount).toFixed(2));
            document.getElementById('discount-details').style.display = 'block';
        }
        event.target.reset();
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='checkout-container'>
            <div className='display-checkout'>
                <div className='display-bill'>
                    <h3>Bill Details</h3>
                    <div className='bill-details'>
                        <p>Serial</p>
                        <p>Quantity X Name</p>
                        <p>Price Total</p>
                    </div>
                    {
                        cartItem.map(cart => <div className='bill' key={cart.id}>
                            <p>{++count})</p>
                            <p>({cart.quantity} X {cart.name})</p>
                            <p>{cart.quantity * cart.price}$</p>
                        </div>)
                    }
                    <h3>Total: {grandTotal}$</h3>
                    <div className='form-display'>
                        <form onSubmit={handleFormVoucher}>
                            <input type="text" placeholder='Voucher Code,if have any' name='voucher' id='voucher' />
                            <button type="submit">Apply Code</button>
                        </form>
                    </div>
                    <div id='discount-details'>
                        <h3>Discount: {discount}$</h3>
                        <h3>Grand Total: {sumTotal}$</h3>
                    </div>
                </div>
            </div>
            <div className='shipping-info'>
                <h3>Shipping Info:</h3>
                <div className='shipping-form'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field>
                            <label>First Name</label>
                            <input
                                placeholder='First Name'
                                type="text"
                                {...register("firstName", { required: true, maxLength: 10 })}
                            />
                        </Form.Field>
                        {errors.firstName && <p>Please check the First Name</p>}
                        <Form.Field>
                            <label>Last Name</label>
                            <input
                                placeholder='Last Name'
                                type="text"
                                {...register("lastName", { required: true, maxLength: 10 })}
                            />
                        </Form.Field>
                        {errors.lastName && <p>Please check the Last Name</p>}
                        <Form.Field>
                            <label>Email</label>
                            <input
                                placeholder='Email'
                                type="email"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                            />
                        </Form.Field>
                        {errors.email && <p>Please check the Email</p>}
                        <Form.Field>
                            <label>Phone</label>
                            <input
                                placeholder='Phone'
                                type="text"
                                {...register("phone", {
                                    required: true,
                                    pattern: /[0-9]/
                                })}
                            />
                        </Form.Field>
                        {errors.phone && <p>Please check the Phone Number</p>}
                        <Form.Field>
                            <label>Address</label>
                            <input
                                placeholder='Address'
                                type="text"
                                {...register("address",
                                    {
                                        required: true,
                                        maxLength: 30
                                    })}
                            />
                        </Form.Field>
                        <Button type='submit'>Place Order</Button>
                    </Form>
                </div>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    {errors.email && errors.email.message}


                    {errors.username && errors.username.message}

                    <button type="submit">Submit</button>
                </form> */}

            </div>
        </div>
    );
};

export default CheckOut;