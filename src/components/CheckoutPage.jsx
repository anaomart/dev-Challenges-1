import React, { useState } from 'react'
import './CheckoutPage.css'
import bagImage from '../checkout-page-master/photo1.png'
import secondImage from '../checkout-page-master/photo2.png'
export default function CheckoutPage() {
    const [counter, setCounter] = useState(0)
    return (
        <section className='checkoutPage'>
            <h1> Checkout</h1>
            <div>

                <div className='info'>
                    <h2>Contact information</h2>
                    <label htmlFor='email'>E-mail
                        <span className="material-symbols-rounded">
                            mail
                        </span>
                        <input type='text' name='email' placeholder='Enter your email...' />
                    </label>
                    <label htmlFor='phone'>Phone
                        <span className="material-symbols-rounded">
                            call
                        </span>
                        <input type='text' name='phone' placeholder='Enter your phone...' />
                    </label>
                    <h2>Shipping address</h2>
                    <label htmlFor='name'>Full name
                        <span className="material-symbols-rounded">
                            account_circle
                        </span>
                        <input type='text' name='name' placeholder='Enter your name...' />
                    </label>
                    <label htmlFor='address'>Address
                    <span class="material-symbols-rounded">
home
</span>
                        <input type='text' name='address' placeholder='Enter your Address...' />
                    </label>
                    <label htmlFor='city'>City
                    <span class="material-symbols-rounded">
apartment
</span>
                        <input type='text' name='City' placeholder='Enter your city...' />
                    </label>
                    <div className='countryAndPostalcode'>
                        <label htmlFor='country'>Country
                        <span class="material-symbols-rounded">
language
</span>
                            <select id="country" name="country" className="form-control">
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>


                            </select>
                        </label>
                        <label htmlFor='Postal code'>Postal code
                        <span class="material-symbols-rounded">
markunread_mailbox
</span>
                            <input type='text' name='Postal code' placeholder='Enter your Postal code...' />
                        </label>
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" name='checkbox' placeholder='checkbox' />
                        <span>Save this information for next time</span>
                    </div>
                    <button className='btn' type="button" >Conform</button>
                </div>

                    <div className="test">
                    <div className='items'>
                        <div>
                            <img src={bagImage} alt='itemImage' />
                        </div>
                        <div className='items-info'>
                            <p>Vintage Backbag</p>
                            <span className='price'>$74.99</span>
                            <div className='counterBtn'>
                                <button className='counter'
                                    onClick={() => setCounter((prev) => prev - 1)}
                                >-</button>
                                <span className='numberOfItems'>
                                    {counter}
                                </span>
                                <button className='counter'
                                    onClick={() => {
                                        setCounter((prev) => prev + 1)
                                        console.log(counter)
                                    }}
                                >+</button>
                            </div>
                        </div>
                    </div>
                    <div className='items'>
                        <div>
                            <img src={secondImage} alt='itemImage' />
                        </div>
                        <div className='items-info'>
                            <p>Vintage Backbag</p>
                            <span className='price'>$74.99</span>
                            <div className='counterBtn'>
                                <button className='counter'
                                    onClick={() => setCounter((prev) => prev - 1)}
                                >-</button>
                                <span className='numberOfItems'>
                                    {counter}
                                </span>
                                <button className='counter'
                                    onClick={() => {
                                        setCounter((prev) => prev + 1)
                                        console.log(counter)
                                    }}
                                >+</button>
                            </div>
                        </div>
                    </div>
                    <div className='end-info'>
                        <p>Shipping</p>
                        <p>$19</p>
                    </div>
                    <div className='end-info'>
                        <p>Total</p>
                        <p>$148.98</p>
                    </div>
                    </div>
                   
            </div>


        </section>
    )
}
