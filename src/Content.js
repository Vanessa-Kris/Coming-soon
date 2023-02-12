import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import ImageList from "@mui/material/ImageList";
//import ImageListItem from "@mui/material/ImageListItem";
//import Carousel from 'react-material-ui-carousel'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";

function Content() {
  return (
    <Carousel>
      <CarouselItem interval={2500}>
        <Container fluid>
          <Row>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/34.JPG" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/4.png" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/17.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/22.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/5.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/9.jpeg" alt="Gown" />
            </Col>
          </Row>
        </Container>
      </CarouselItem>

      <CarouselItem interval={2500}>
        <Container fluid>
          <Row>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/20.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/25.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/32.JPG" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/28.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/10.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/2.jpeg" alt="Gown" />
            </Col>
          </Row>
        </Container>
      </CarouselItem>

      <CarouselItem interval={2500}>
        <Container fluid>
          <Row>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/3.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/8.jpg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/18.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/19.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/21.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/33.JPG" alt="Gown" />
            </Col>
          </Row>
        </Container>
      </CarouselItem>

      <CarouselItem interval={2500}>
        <Container fluid>
          <Row>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/30.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/24.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/29.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/15.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/14.jpeg" alt="Gown" />
            </Col>
            <Col xs={6} md={2} className="bannerimg">
              <img src="./coming/13.jpeg" alt="Gown" />
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    </Carousel>
  );
}

// const itemData = [
//   {
//     img: "./coming/34.JPG",
//     title: "Breakfast",
//     className: "Image",
//   },
//   {
//     img: "./coming/2.jpeg",
//     title: "Burger",
//   },
//   {
//     img: "./coming/33.JPG",
//     title: "Camera",
//   },
//   {
//     img: "./coming/18.jpeg",
//     title: "Coffee",
//   },
//   {
//     img: "./coming/22.jpeg",
//     title: "Hats",
//   },
//   {
//     img: "./coming/10.jpeg",
//     title: "Honey",
//     author: "@arwinneil",
//   },
//   {
//     img: "./coming/9.jpeg",
//     title: "Basketball",
//   },
//   {
//     img: "./coming/17.jpeg",
//     title: "Fern",
//   },
//   {
//     img: "./coming/4.png",
//     title: "Mushrooms",
//   },
//   {
//     img: "./coming/20.jpeg",
//     title: "Tomato basil",
//   },
//   {
//     img: "./coming/13.jpeg",
//     title: "Sea star",
//   },
//   {
//     img: "./coming/32.JPG",
//     title: "Bike",
//   },
// ];

export default Content;
