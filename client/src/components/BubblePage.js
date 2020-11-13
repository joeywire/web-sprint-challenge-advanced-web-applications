import React, { useState, useEffect } from "react";
import axios from "axios";

import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  const getColors = () => {
    axiosWithAuth().get('/api/colors')
      .then(res => {
        // console.log(res);
        setColorList(res.data);  
      })
      .catch(err => console.log(err));
  };
  
  useEffect(() => {
    getColors();
  }, [])

  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={getColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
