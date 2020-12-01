import React, {useState, useEffect} from 'react';

import NavBar from '../NavBar';
import SEO from '../SEO';


const LayOut = (props) => {

    const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.pageYOffset);
  };

  useEffect(() => {
    setScroll(window.pageYOffset);
    console.log(window.pageYOffset);
    window.addEventListener("scroll", handleScroll),
      () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);


    return (
        <div>
          <SEO />
          <NavBar isFixed = {scroll > 36}/>
        </div>
    );
}

export default LayOut;