import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
//import Carousel from 'react-material-ui-carousel'

function Content() {
  return (
    <ImageList xs={2} cols={12} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            className="Images"
            src={`${item.img}?w=164&h=164`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "./coming/34.JPG",
    title: "Breakfast",
    className: "Image",
  },
  {
    img: "./coming/2.jpeg",
    title: "Burger",
  },
  {
    img: "./coming/33.JPG",
    title: "Camera",
  },
  {
    img: "./coming/18.jpeg",
    title: "Coffee",
  },
  {
    img: "./coming/22.jpeg",
    title: "Hats",
  },
  {
    img: "./coming/10.jpeg",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "./coming/9.jpeg",
    title: "Basketball",
  },
  {
    img: "./coming/17.jpeg",
    title: "Fern",
  },
  {
    img: "./coming/4.png",
    title: "Mushrooms",
  },
  {
    img: "./coming/20.jpeg",
    title: "Tomato basil",
  },
  {
    img: "./coming/13.jpeg",
    title: "Sea star",
  },
  {
    img: "./coming/32.JPG",
    title: "Bike",
  },
];

export default Content;
