import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../assets/style.css";
import "../assets/main.css";
import "../assets/Tailwind.css";
export const ServicesResponsive = () => {

    const arrowStyles = {
        position: "absolute",
        zIndex: "40",
        top: "calc(50% - 15px)",
        width: 30,
        height: 30,
        cursor: "pointer",
      };


  return (
    <div>
         <Carousel
    /* autoPlay */
    showStatus={false}
    showArrows
    className="color-fondo cursor-pointer"
    style={{ height: "20rem" }}
    infiniteLoop
    showThumbs={false}
    useKeyboardArrows
    stopOnHover
    swipeable
    dynamicHeight
    emulateTouch
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{ ...arrowStyles, left: 15 }}
        >
          <KeyboardArrowLeft
            style={{ fontSize: "50px", color: "white" }}
          />
        </button>
      )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          style={{ ...arrowStyles, right: 30 }}
        >
          <KeyboardArrowRight
            style={{ fontSize: "50px", color: "white" }}
          />
        </button>
      )
    }
  >
     <div>
          <img
            alt=""
            src="imagenMinera60.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
       <div>
          <img
            alt=""
            src="/imagenMinera23.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera6.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera11.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera38.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera10.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera24.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera25.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera27.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera40.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera42.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>

        {/* asdasd */}
        {/* sssssssssssssssssssssssssssssssssssssssssssss */}

        <div>
          <img
            alt=""
            src="/imagenMinera19.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera21.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>

        <div>
          <img
            alt=""
            src="/imagenMinera34.jpg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera62.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera64.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera65.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "fill",
              border: 0,
              height: "30rem",
            }}
          />
        </div>
        <div>
          <img
            alt=""
            src="/imagenMinera66.jpeg"
            style={{
              width: "100%",
              verticalAlign: "top",
              objectFit: "cover",
              border: 0,
              height: "30rem",
            }}
          />
        </div>

    
  </Carousel>
  </div>
  )
}
