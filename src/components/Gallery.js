import React, { useCallback } from 'react';
import LightGallery from 'lightgallery/react';
import Image from 'react-bootstrap/Image';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = (props) => {
    const items = props.items;
    const itemCLass = props.itemClass === '' ? "gallery-item" : props.itemClass;
    const images = require.context("../assets/artImages", true);

    const getItems = useCallback(() => {
        return items.map((item) => {
            return (
                <div
                    key={item.id}
                    data-lg-size={item.size}
                    className="gallery-item"
                    data-src={images("./" + item.src)}
                    title={item.title}
                >
                    <Image src={images("./" + item.thumb)} rounded  loading="lazy" fluid className='gallery-image'/>
                </div>
            );
        });
    }, [items, images]);

    return (
        <LightGallery
            plugins={[lgZoom]}
            download={false}
            elementClassNames="galleryContainer"
        >
            {getItems()}
        </LightGallery>
    )
}

export default Gallery