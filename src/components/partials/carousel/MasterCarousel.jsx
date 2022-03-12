import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import cls from "../../../scss/components/partials/mastercarousel.module.scss";
import "swiper/css/navigation";
import "swiper/css";

const MasterCarousel = () => {
    return (
        <div className={cls.carousel_container}>
            <Swiper
                style={{ marginTop: "30px", height: "100%" }}
                modules={[Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                speed={1000}
                navigation
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className={cls.carousel_container_child}>
                        <img src="/img/mainBanner1.jpg" alt="banner1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.carousel_container_child}>
                        <img src="/img/mainBanner2.jpg" alt="banner2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cls.carousel_container_child}>
                        <img src="/img/mainBanner3.jpg" alt="banner3" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export { MasterCarousel };
