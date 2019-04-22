import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = { spans: 0};

        this.imageRef = React.createRef();
    }


    componentDidMount(){
        //this is to wait until all images are loaded before getting image height
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () =>{
        console.log(this.imageRef.current.clientHeight)

        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height  / 10);

        this.setState({spans: spans});
    };


    render(){

        // const {description, urls}=this.props.image;

        return (
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref = {this.imageRef}
                alt={this.props.image.description}
                src = {this.props.image.urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;