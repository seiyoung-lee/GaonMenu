import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import './styles.scss';


const FoodLayOut = (props) => {
    const { data } = props;

      const TheImageYouWant = data.filter(edge => edge.node.fluid.originalName === props.image)
        .map(myImage => <Img fluid={myImage.node.fluid} />);


    return (
        <div className = "food-outer" onClick  = {props.onClick}>
            <div className = "food-Image">
                {TheImageYouWant}
            </div>
            <div className = "content">
                <div className = "text">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
                <div className = "price">
                    <h1>{props.price}</h1>
                </div>
            </div>
        </div>
    );
}

export default FoodLayOut;