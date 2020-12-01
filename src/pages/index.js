import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import '../globalCss/index.scss';

import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import Food from '../components/Food';

const LandingPage = () => {
    const smoothScroll = (pathId) => {
        scrollTo(pathId, "center");
      };

    return (
        <div>
            <Layout />
            <Introduction />
            <Food scroll = {(path) => smoothScroll(path)}/>
        </div>
    ); 
}

export default LandingPage;