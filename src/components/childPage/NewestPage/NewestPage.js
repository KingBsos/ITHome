import React, { useEffect } from 'react';

import { Carousel } from 'antd';

import ArticalList from '../../ArticalList';
import cn from './index.module.css';

function carouselInner(data) {
    return (
        data.map((item, index) => {
            return (
                <div key={index} className={cn['carousel-item']}>
                    <img className="w-100 h-100" src={item.imgUrl} alt={index} />
                </div>
            );
        })
    );
}
function NewestPage({ articals, className, carouselData, fetchArtical, fetchCarousel }) {
    let containerClass = `${className} pX1rem h-100 o-a`;
    useEffect(function () {
        fetchCarousel();
        fetchArtical();
    }, [fetchArtical, fetchCarousel]);
    return (
        <div className={containerClass}>
            <div>
                <Carousel>
                    {
                        carouselInner(carouselData)
                    }
                </Carousel>
            </div>
            <ArticalList articals={articals} />
        </div>
    );
}

export default NewestPage;