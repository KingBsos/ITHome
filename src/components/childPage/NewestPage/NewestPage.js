import React from 'react';
import ArticalList from '../../ArticalList';
import cn from './index.module.css';
import { Carousel } from 'antd';

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
function NewestPage({ articals, className, carouselData }) {
    let containerClass = `${className} pX1rem h-100 o-a`;
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