import { useState } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.svg';
import Image3 from '../../assets/image3.svg';
import RightChevron from '../../assets/right-chevron.svg';
import LeftChevron from '../../assets/left-chevron.svg';

function CarousalContent() {
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
            <div className="w-100">
                <Carousel
                    autoPlay={true}
                    useKeyboardArrows={true}
                    onChange={onSlideChange}
                    showThumbs={true}
                    showStatus={false}
                    showIndicators={true}
                    showArrows={false}
                    selectedItem={currentSlide}
                    infiniteLoop={true}
                >
                    {[{ image: Image1, c1: "Search by type of coach or by the coach's specialties" },
                    { image: Image2, c1: "Look at a coach's certifications, <br> check out their socials, or chat with them using messages" },
                    { image: Image3, c1: "Schedule a consult with your coach to learn if you're <br> a good fit for each other.", }].map((data, i) => {
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
            <div className="w-100 position-absolute" style={{ bottom: 0, left: 0, background: 'rgba(255,255,255,0.6)' }}>
                <div className="d-flex justify-content-around py-1 fw-bold" >
                    <div className="cp" style={{ fontSize: 12, color: "#3E3E70" }}>
                        <div className="text-center">
                            <i class="fas fa-search "></i>
                        </div>Browse
                            </div>
                    <div className="cp" style={{ fontSize: 12, color: "#3E3E70" }}>
                        <div className="text-center">
                            <i class="far fa-thumbs-up"></i>
                        </div>Vet
                            </div>
                    <div className="cp" style={{ fontSize: 12, color: "#3E3E70" }}>
                        <div className="text-center">
                            <i class="fas fa-book"></i>
                        </div>
                        <div>
                            Book
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CarousalContent


function Slide({ content }) {
    return (
        <div className="h-100 position-relative" >
            <div
                className="cp text-center w-100 h-100 position-absolute"
                style={{ top: "0", background: 'rgba(0,0,0,0.4)' }}>

            </div>
            <img src={content.image} alt="" className="carousal-image" style={{ zIndex: 999 }} />
            <div
                className="cp text-center w-100"
                style={{ position: "absolute", top: "55%", }}
                // onClick={prevSlide}
                id="cat-prev-slide-btn__dashboard"
            >
                <h4 className="nb-title text-white">How it works!</h4>
                <div className="nb-text w-100 text-center text-white" dangerouslySetInnerHTML={{ __html: content.c1 }} />
            </div>
        </div>
    );
}





