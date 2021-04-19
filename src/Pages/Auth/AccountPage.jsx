import React, { useState } from 'react'
import Header from '../../Components/Header'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image3 from '../../assets/image3.svg';
import RightChevron from '../../assets/right-chevron.svg';
import LeftChevron from '../../assets/left-chevron.svg';
import GoogleIcom from '../../assets/google.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import TextInput from '../../Components/TextInput';
import PasswordInput from '../../Components/PasswordInput';

function AccountPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    let onSlideChange = (e) => {
        setCurrentSlide(e);
    };

    let prevSlide = () => {
        setCurrentSlide(currentSlide - 1);
    };

    let nextSlide = () => {
        setCurrentSlide(currentSlide + 1);
    };
    return (
        <div>
            <Header context="login" />
            <div className="row overflow-hidden" style={{ height: 'calc(100vh - 60px)' }}>
                <div className="col-7 position-relative p-0 overflow-hidden">
                    <div className="w-100">
                        <Carousel
                            autoPlay={true}
                            useKeyboardArrows={true}
                            onChange={onSlideChange}
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            showArrows={false}
                            selectedItem={currentSlide}
                        // infiniteLoop={true}
                        >
                            {[Image3, Image3, Image3].map((data, i) => {
                                return <Slide content={data} key={i} />;
                            })}
                        </Carousel>
                    </div>
                    <div
                        className="cp"
                        style={{ position: "absolute", top: "45%", right: "30px" }}
                        id="cat-next-slide-btn__dashboard"
                        onClick={nextSlide}
                    >
                        <img src={RightChevron} alt="" />
                    </div>
                    <div
                        className="cp"
                        style={{ position: "absolute", top: "45%", left: "30px" }}
                        onClick={prevSlide}
                        id="cat-prev-slide-btn__dashboard"
                    >
                        <img src={LeftChevron} alt="" />

                    </div>
                    <div className="w-100 position-absolute" style={{ bottom: 0, left: 0, background: 'rgba(255,255,255,0.4)' }}>
                        <div className="d-flex justify-content-between px-5 py-1">
                            <div>
                                <div className="cp">
                                    <i class="fas fa-search"></i>
                                </div>Browse
                                </div>
                            <div>
                                <div className="cp">
                                    <i class="far fa-thumbs-up"></i>
                                </div>Vet
                                </div>
                            <div>
                                <div className="cp">
                                    <i class="fas fa-book"></i>
                                </div>Book
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-5 px-5" style={{ borderLeft: '1px solid #000', overflow: 'hidden' }}>
                    <div>
                        <div className="text-center fw-bold fs-2">
                            Login
                        </div>
                        <div className="text-center fw-bold">
                            Hello again!
                        </div>
                        <div className="text-center fw-bold">
                            sign in with your username & password
                        </div>
                        <form>
                            <div className="my-3">
                                <TextInput label="Email" placeholder="Enter Email" />
                            </div>
                            <div>
                                <PasswordInput label="Password" placeholder="Enter Password" />
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <div>
                                    <label htmlFor="sgi">
                                        <input type="checkbox" defaultChecked={false} /> Keep me signed in
                                    </label>
                                </div>
                                <div className="fs-6">Forgot password ?</div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary w-50 my-4 br py-2">Next </button>
                            </div>
                        </form>
                        <div className="position-relative my-3 mx-5" style={{ border: ".1px solid rgba(0,0,0,0.2)" }}>
                            <span className="position-absolute bg-white px-3" style={{ right: "50%", transform: 'translateX(50%)', top: "-13px" }}>OR</span>
                        </div>
                        <div className="text-center">
                            <div className="cp my-4">
                                <button className="btn btn-rounded">
                                    <img src={GoogleIcom} alt="" style={{ width: 25, height: 30 }} className="mx-2" /> Continue With google
                                    </button>
                            </div>
                            <div className="cp my-4">
                                <button className="btn btn-rounded fs-6">
                                    <img src={LinkedInIcon} alt="" style={{ width: 25, height: 30 }} className="mx-2" /> Continue With LinkedIn
                                    </button>
                            </div>
                        </div>
                        <div className="cp mt-1">
                            New to 'nBloom? <span >Sign up here</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage

function Slide({ content }) {
    return (
        <div className="h-100 w-100  position-relative">
            <div className="">
                <img src={content} alt="" className="h-100 w-100" />
            </div>
        </div>
    );
}
