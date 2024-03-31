import React, { memo } from 'react'
import "./Contact.scss"
import Input from '../../components/input/Input'
import { INPUTS } from '../../static'

import mapImg from "../../assets/images/map.png"

function Contact() {
    return (
        <section id="contact">
            <div className="container contact">
                <div className="contact__header">
                    <div className="contact__left">
                        <h1 className="contact__title">Have a question ? Let’s get in touch with us.</h1>
                        <p className="contact__body">Fill up the Form  and ou team will get back to within 24 hrs</p>
                    </div>
                    <div className="contact__right">
                        <span>
                            <h5>Location</h5>
                            <p>DLF Cybercity, Bhubaneswar,India, &52050</p>
                        </span>
                        <span>
                            <h4>Contact Us</h4>
                            <h6>020 7993 2905</h6>
                            <h6>hi@finsweet.com</h6>
                        </span>
                    </div>
                </div>
                <div className="contact__map">
                    <form className="contact__map__left">
                        {
                            INPUTS.map((el, inx) => <Input key={inx} title={el} />)
                        }
                        <button type='button'>Submit</button>
                    </form>
                    <div className="contact__map__right">
                        <img src={mapImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Contact)