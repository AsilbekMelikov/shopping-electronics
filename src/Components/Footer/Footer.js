import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer bg-body-white'>
            <div className='container'>
                <div className='row text-center pb-3'>
                    <div className='col-6 mb-3 col-sm-3 me-sm-3 mb-sm-0'>
                        <div className='mb-3'>
                            <img src='/Assets/images/logo.svg' alt='logo'/>
                            <span className='brand-text'>Brand</span>
                        </div>
                        <p>Best information about the companies here but now lorem ipsum is</p>
                        <div className='social-icons'>
                            <a className='social-icon me-2'>
                                <img src='/Assets/icons/facebook3.svg' alt='facebook'/>
                            </a>
                            <a className='social-icon me-2'>
                                <img src='/Assets/icons/twitter3.svg' alt='twitter'/>
                            </a>
                            <a className='social-icon me-2'>
                                <img src='/Assets/icons/linkedin3.svg' alt='linkedin'/>
                            </a>
                            <a className='social-icon me-2'>
                                <img src='/Assets/icons/instagram3.svg' alt='instagram'/>

                            </a>
                            <a className='social-icon'>
                                <img src='/Assets/icons/youtube3.svg' alt='youtube'/>
                            </a>
                        </div>
                    </div>
                    <div className='col-6 mb-3 mb-sm-0 col-sm-1  mx-sm-5'>
                        <div className='d-flex flex-column'>
                            <h6>About</h6>
                            <span className='text-secondary'>About us</span>
                            <span className='text-secondary'>Find store</span>
                            <span className='text-secondary'>Categories</span>
                            <span className='text-secondary'>Blogs</span>
                        </div>
                    </div>
                    <div className='col-6 mb-3 mb-sm-0 col-sm-1 me-sm-5'>
                        <div className='d-flex flex-column'>
                            <h6>Partnership</h6>
                            <span className='text-secondary'>About us</span>
                            <span className='text-secondary'>Find store</span>
                            <span className='text-secondary'>Categories</span>
                            <span className='text-secondary'>Blogs</span>
                        </div>
                    </div>
                    <div className='col-6 mb-3 mb-sm-0 col-sm-2 me-sm-0'>
                        <div className='d-flex flex-column'>
                            <h6>Information</h6>
                            <span className='text-secondary'>Help center</span>
                            <span className='text-secondary'>Money refund</span>
                            <span className='text-secondary'>Shipping</span>
                            <span className='text-secondary'>Contact us</span>
                        </div>
                    </div>
                    <div className='col-6 col-sm-1 me-sm-5'>
                        <div className='d-flex flex-column'>
                            <h6>For users</h6>
                            <span className='text-secondary'>Login</span>
                            <span className='text-secondary'>Register</span>
                            <span className='text-secondary'>Settings</span>
                            <span className='text-secondary'>My orders</span>
                        </div>
                    </div>
                    <div className='col-6 col-sm-1'>
                        <div className='d-flex flex-column align-items-center'>
                            <h6>Get app</h6>
                            <button type='button' className='btn btn-dark d-flex app' style={{cursor:'pointer'}}>
                                <span className='text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                         className="bi bi-apple" viewBox="0 0 16 16">
                                    <path
                                        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                                    <path
                                        d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                                </svg>
                                </span>
                                <div className='d-flex flex-column text-start app_text' >
                                    <span className='text-secondary'>Download on the</span>
                                    <span>App Store</span>
                                </div>
                            </button>
                            <button type='button' className='btn btn-dark d-flex mt-3 app' style={{cursor:'pointer'}}>
                                <span className='text-white'>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-google-play" viewBox="0 0 16 16">
                                    <path
                                      d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
                                   </svg>
                                </span>
                                <div className='d-flex flex-column app_text text-start'>
                                    <span className='text-secondary'>Get it on</span>
                                    <span>Google play</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;