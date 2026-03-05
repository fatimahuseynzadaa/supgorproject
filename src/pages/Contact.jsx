import React from 'react'
import '../assets/css/contact.css'

const Contact = () => {
    return (
        <>
            <div className="container contact-section">
                <div className="contact-top row">
                    <div className="col-12 col-md-3">
                        <h4>Fast Shipping</h4>
                        <p>Receive your order anywhere in the world</p>

                    </div>
                      <div className="col-12 col-md-3">
                        <h4>Fast Shipping</h4>
                        <p>Receive your order anywhere in the world</p>

                    </div>
                      <div className="col-12 col-md-3">
                        <h4>Fast Shipping</h4>
                        <p>Receive your order anywhere in the world</p>

                    </div>
                      <div className="col-12 col-md-3">
                        <h4>Fast Shipping</h4>
                        <p>Receive your order anywhere in the world</p>

                    </div>

                </div>
                <div className="row contact-inner">
                    <div className="col-12 col-md-5">
                        <div className="top">
                            <h2>Our Stores</h2>
                            <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.</p>
                        </div>
                        <div className="btm row">
                            <div className="left col-12 col-md-6">
                                <div className="contact-info">
                                    <span>United States</span>
                                    <h4>United States</h4>
                                    <p>205 Middle Road, 2nd Floor, New York 2485</p>
                                    <a className="phone" href="tel:+02 1234 567 88">+02 1234 567 88</a>
                                    <a className="email" href="mailto:info@example.com">info@example.com</a></div>
                            </div>
                            <div className="right  col-12 col-md-6">
                                <div class="contact-info">
                                    <span>Nedherlands</span>
                                    <h4>Amsterdam
                                    </h4>
                                    <p>205 Middle Road, 2nd Floor, New York 2485</p>
                                    <a class="phone" href="tel:+02 1234 567 88">+02 1234 567 88</a>
                                    <a class="email" href="mailto:info@example.com">info@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 connect ">
                        <h3>Write us...</h3>
                        <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.</p>
                        <form >
                            <div className="personal-info row mb-3">

                                <div className="name-inpt col-12 col-md-6 ">
                                    <label for="name" className="form-label">name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="name"></input>
                                </div>
                                <div className=' email-inpt col-12 col-md-6 '>
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" className="form-control" id="subject" aria-describedby="subject"></input>


                            </div>

                            <div class="mb-3 nn">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <input
                                className="contact-submit-btn"
                                type="submit"
                                value="Send Message"
                            />
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact