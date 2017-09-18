import React, { Component} from 'react';

class Gallery extends Component{
    render(){
        return(
            <div>
                {
               this.props.item.map((item,index) => {
                   let {title} = item.volumeInfo;
                   return (
                       <div key={index}>{title}</div>
                   )
               })
                }
            </div>
        ) 
    }
}

export default Gallery;