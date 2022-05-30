import React from 'react';
import styles from './Banner.module.css'
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className={styles.Banner}>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner} class={styles.Banner} alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={banner} class={styles.Banner} alt="..." />
                    </div>
                </div>
                <p className={styles.BannerText} alt="">Twenty One Pilots </p>
                <p className={styles.BannerTextData} alt="">22.02.23 в 21:00 </p>
                <button class={styles.BannerButtonLeft} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button className={styles.BuyButton}>
                    Купить
                </button>

                <button class={styles.BannerButtonRight} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
};

export default Banner;