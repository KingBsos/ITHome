import React from 'react';
import ArticalList from '../../ArticalList';

function NewestPage({ articals, className }) {
    //console.log(articals)
    let containerClass = `${className} pX1rem`;
    return (
        <div className={containerClass}>
            <ArticalList articals={articals} />
        </div>
    );
}

export default NewestPage;