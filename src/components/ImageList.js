import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props.images);

    const images = props.images.map((image)=>{
        return <ImageCard image = {image} key = {image.id}/>
    })

    return <div className = 'image-list'>{images} </div>


}

export default ImageList;