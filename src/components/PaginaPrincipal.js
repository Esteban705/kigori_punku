import React, { useCallback, useEffect, useRef, useState } from "react";
import "../assets/style.css";
import "../assets/main.css";
import "../assets/Tailwind.css";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Grid } from "@material-ui/core";
import { text, textConfianza, textProyect } from "./helpers/textHelpers";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { PaginaForm } from "./PaginaForm";
import { Carrousel } from "./Carrousel";
import "animate.css";
import {
  Services,
  ServicesResponsibo,
  TextConfianza,
  TextConfianzaResponsibo,
  TextProyect,
} from "./Services";
import { ServicesResponsive } from "./ServicesResponsive";
import { handleTime } from "./helpers/time";

export default function PaginaPrincipal() {
  const [first, setfirst] = useState("");
  let classNameFeatures = "className";
  let classNameActived = "classNameActived";
  let classDisplayNone = "classDisplayNone";
  let classNameH6 = "classNameH6";
  let classNameH7 = "classNameH7";
  let clasNameFeature = "clasNameFeature";
  let classNameOrigin = "classNameOrigin";
  let classNameOriginLeft = "classNameOriginLeft";
  let clase = "clase";
  let claseOut = "claseOut";
  const refServices = useRef(null);
  const refAbout = useRef(null);
  const scrollToServices = () =>
    refServices.current.scrollIntoView({ behavior: "smooth" });
  const scrollAbout = () =>
    refAbout.current.scrollIntoView({ behavior: "smooth" });
  const [showMore, setShowMore] = useState(false);
  const [showMoreProyects, setShowMoreProyects] = useState(false);
  const [showMoreClientes, setShowMoreClientes] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(true);
  const [handlePlay, setHandlePlay] = useState(false);

  const [clasess, setClasess] = useState(clase);
  const [clasNameFeature1, setClasNameFeature1] = useState();
  const [clases, setClases] = useState();
  const [clasesFeature2, setClasesFeature2] = useState();
  const [clasesFeature3, setClasesFeature3] = useState();
  const [classNameSecond, setClassNameSecond] = useState();

  const handleButton = (option) => {
    if (option === "showMore") {
      setShowMore(!showMore);
    } else if (option === "showMoreProyecs") {
      setShowMoreProyects(!showMoreProyects);
    } else if (option === "showMoreClientes") {
      setShowMoreClientes(!showMoreClientes);
    }
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
    setCloseMenu(false);
  };
  const handleCloseMenu = () => {
    setCloseMenu(true);
    setOpenMenu(false);
  };

  const handleWhattsapp = () => {
    const wspNumber = "3834212896";
    const url = `https://api.whatsapp.com`;
    window.open(url);
  };

  useEffect(() => {
    handleTime(setfirst);
    if (
      showMore === false &&
      showMoreProyects === false &&
      showMoreClientes === false
    ) {
      setClases(classNameOriginLeft);
      setClasesFeature2(classNameOrigin);
      setClasesFeature3(classNameOrigin);
      setClassNameSecond(classNameH6);
      setClasNameFeature1(clasNameFeature);
    } else if (showMore && !showMoreProyects && !showMoreClientes) {
      setClasesFeature2(classDisplayNone);
      setClasesFeature3(classDisplayNone);
      setClases(classNameActived);
      setClassNameSecond(classNameH7);
      setClasNameFeature1(classNameFeatures);
    } else if (showMoreProyects && !showMore && !showMoreClientes) {
      setClases(classDisplayNone);
      setClasesFeature3(classDisplayNone);
      setClasesFeature2(classNameActived);
      setClassNameSecond(classNameH7);
      setClasNameFeature1(classNameFeatures);
    } else if (showMoreClientes && !showMore && !showMoreProyects) {
      setClases(classDisplayNone);
      setClasesFeature2(classDisplayNone);
      setClasesFeature3(classNameActived);
      setClassNameSecond(classNameH7);
      setClasNameFeature1(classNameFeatures);
    }
  }, [handleButton]);
  /* 
  if (first.toString() === "06/30/2022") {
    setClasess(claseOut);
  } */

  return (
    <body>
      <div className="md:hidden responsive">
        <img
          src={"/Logo_Kgori_Punku_Consultora_SRL.png"}
          className="img-responsive"
          alt="logo"
        />
        <div
          className="cursor-pointer"
          hidden={openMenu}
          onClick={handleOpenMenu}
        >
          <MenuIcon
            style={{
              position: "absolute",
              right: "0px",
              height: "3.5rem",
              width: "6rem",
              top: "31px",
            }}
          />
        </div>

        <div className="nave" hidden={closeMenu}>
          <ul className="grid grid-cols-1 ">
            <Link style={{ textDecoration: "none", color: "#556cac" }} to="/">
              <li className="text-left block p-4 border-b-2 border-indigo-100 cursor-pointer">
                inicio
              </li>
            </Link>
            <a
              className="cursor-pointer"
              style={{ color: "#556cac" }}
              onClick={scrollAbout}
            >
              <li className="text-left block p-4 border-b-2 border-indigo-100 cursor-pointer">
                Nuestros Clientes
              </li>
            </a>
            <a
              className="cursor-pointer"
              style={{ color: "#556cac" }}
              onClick={scrollToServices}
            >
              <li className="text-left block p-4 border-b-2 border-indigo-100 cursor-pointer">
                Servicios
              </li>
            </a>
            <li className="text-left no-underline block text-white p-4 border-b-2 border-indigo-100 cursor-pointer">
              <Link
                style={{ textDecoration: "none", color: "#556cac" }}
                to="/form"
              >
                {" "}
                Contacto{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="page" onClick={handleCloseMenu}>
        <div className="hidden sm:flex">
          <WhatsAppIcon
            onClick={handleWhattsapp}
            className="bg-green-500 text-white"
            style={{
              cursor: "pointer",
              fontSize: "60px",
              position: "fixed",
              zIndex: "40",
              right: "25px",
              bottom: "44px",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="sm:flex hidden page-header">
          <img
            src={"/Logo_Kgori_Punku_Consultora_SRL.png"}
            className="h-20 w-52"
            alt="logo"
          />
          {/* <h2></h2> */}
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "#556cac" }} to="/">
                {" "}
                Inicio{" "}
              </Link>
            </li>
            <li>
              <a
                className="cursor-pointer"
                style={{ color: "#556cac" }}
                onClick={scrollAbout}
              >
                Nuestros Clientes
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer"
                style={{ color: "#556cac" }}
                onClick={scrollToServices}
              >
                Servicios
              </a>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#556cac" }}
                to="/form"
              >
                {" "}
                Contacto{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative z-10 hidden sm:flex">
          <Carrousel></Carrousel>
        </div>
        <div className="mb-10 relative z-10 sm:hidden flex">
          <ServicesResponsive></ServicesResponsive>
        </div>

        <div className="subject">
          <h1 ref={refServices} style={{ color: "#3f51b5" }}>
            Kgori Punku consultora SRL
          </h1>
          <p>
            Es una empresa que se encuentra enfocada en el análisis y estudio de
            emprendimientos productivos para la detección temprana de
            alternativas y soluciones ambientales, Hidrológicas,
            Hidrogeológicas, Geotécnicas, Sociales y Legales. Nuestro equipo de
            trabajo, conformado por profesionales con vasta experiencia, es
            capaz de detectar posibilidades de mejoras productivas, Ambientales
            y Sociales, todo desde una visión Interdisciplinaria, Holística y
            con respeto hacia el Ambiente realizando el Trabajo Seguro.
          </p>
        </div>
        <div className="subject" style={{ paddingTop: "2px" }}>
          <img
            src="/Logo_Kgori_Punku_Consultora_SRL.png"
            style={{ width: "17rem" }}
          />{" "}
        </div>

        {/* 
  responsivo===============
 */}
        {
          <div
            className={"md:hidden content-center text-center justify-center"}
          >
            <div className={"feature-1 mt-5"}>
              <h2 className="font-bold text-xl mb-2 mt-5">Servicios</h2>
              <p className="">
                <h6 className={"classResponsive"}>
                  {showMore ? (
                    <ServicesResponsibo></ServicesResponsibo>
                  ) : (
                    text.substring(0, 150)
                  )}
                </h6>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginLeft: "10px",
                    padding: "7px",
                    width: "7rem",
                    height: "2rem",
                  }}
                  onClick={() => {
                    handleButton("showMore");
                  }}
                >
                  {showMore ? "Ver Menos" : "Ver Mas"}
                </Button>
              </p>
            </div>
            <div className={"feature-3"}>
              <h2 className="font-bold text-xl mb-2 mt-5">
                Proyectos Desarrollados
              </h2>
              <p className="">
                <h6 className={"classResponsive"}>
                  {showMoreClientes ? (
                    <TextConfianzaResponsibo />
                  ) : (
                    textConfianza.substring(0, 150)
                  )}
                </h6>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginLeft: "10px",
                    padding: "7px",
                    width: "7rem",
                    height: "2rem",
                  }}
                  onClick={() => {
                    handleButton("showMoreClientes");
                  }}
                >
                  {showMoreClientes ? "Ver Menos" : "Ver Mas"}
                </Button>
              </p>
            </div>
          </div>
        }
        {/*  Responsivo ==============*/}

        {/*Destock ==================*/}
        <div className={`hidden sm:flex   mt-3 mb-3 ${clasNameFeature1}`}>
          <div className={clases}>
            {/*  <img src="logo2.jpeg" alt="monitor" /> */}
            <h2 className="font-bold mb-3 color">Servicios</h2>
            <p className="">
              <h6 className={classNameSecond}>
                {showMore ? <Services></Services> : text.substring(0, 150)}
              </h6>
            </p>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginLeft: "10px",
                padding: "7px",
                width: "7rem",
                height: "2rem",
              }}
              onClick={() => {
                handleButton("showMore");
                scrollToServices();
              }}
            >
              {showMore ? "Ver Menos" : "Ver Mas"}
            </Button>
          </div>
          {/* <div className={clasesFeature2} style={{display: 'none'}}>
            <img src="imgMision_preview_rev_1.jpeg" style={{width: '97px'}} alt="tag" />
            <h2 className="font-bold text-xl mb-2">
            Seguridad en el Trabajo
            </h2>
            <p className="">
              <h6 className={classNameSecond}>
                {showMoreProyects ? (
                  <TextProyect />
                ) : (
                  textProyect.substring(0, 150)
                )}
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginLeft: "10px",
                    padding: "7px",
                    width: "7rem",
                    height: "2rem",
                  }}
                  onClick={() => {
                    handleButton("showMoreProyecs");
                    scrollToServices();
                  }}
                >
                  {showMoreProyects ? "Ver Menos" : "Ver Mas"}
                </Button>
              </h6>
            </p>
          </div> */}
          <div className={clasesFeature3}>
            {/* <img
              src="
              logo3.jpeg
"
              alt="fast"
            /> */}
            <h2 className="font-bold mb-3 color">Proyectos Desarrollados</h2>
            <p className="">
              <h6 className={classNameSecond}>
                {showMoreClientes ? (
                  <TextConfianza />
                ) : (
                  textConfianza.substring(0, 150)
                )}
              </h6>
            </p>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginLeft: "10px",
                padding: "7px",
                width: "7rem",
                height: "2rem",
              }}
              onClick={() => {
                handleButton("showMoreClientes");
                scrollToServices();
              }}
            >
              {showMoreClientes ? "Ver Menos" : "Ver Mas"}
            </Button>
          </div>
        </div>
        {/* destock */}

        <div className="hidden sm:flex about  ">
          <img src="imagenSobrenosotros.webp" alt="team-working" />
          <div className="right-box">
            <h2 style={{ color: "#3f51b5" }}>Sobre Nosotros</h2>
            <p className="caption">
              Contamos con un Equipo de Profesionales que trabajan
              interdisciplinariamente para garantizar un servicio a medida,
              asegurar resultados y hacer cumplir las normativas vigentes de
              Seguridad e Higiene en el trabajo. Además, Kgori Punku Consultora
              SRL le ofrece Gestoría Social, abarca no sólo la viabilización de
              las tramitaciones pertinentes a la concreción de proyectos,
              subsidios, becas, inclusión de programas sociales sino también la
              búsqueda de recursos internacionales, nacionales y locales con el
              fin de favorecer el desarrollo social y comunitario de grupo o
              población determinada.
            </p>
          </div>
        </div>

        <div className="sm:hidden aboutResponsive">
          <img
            src="imagenSobrenosotros.webp"
            alt="team-working"
            className="hidden sm:flex"
          />
          <div className="">
            <h2
              className={"text-cemter mb-5 mt-5 text-center text-2xl font-bold"}
              style={{ color: "#3f51b5" }}
            >
              Sobre Nosotros
            </h2>
            <p className="text-center w-full text-xl mb-5">
              Contamos con un Equipo de Profesionales que trabajan
              interdisciplinariamente para garantizar un servicio a medida,
              asegurar resultados y hacer cumplir las normativas vigentes de
              Seguridad e Higiene en el trabajo. Además, Kgori Punku le ofrece
              Gestoría Social, abarca no sólo la viabilización de las
              tramitaciones pertinentes a la concreción de proyectos, subsidios,
              becas, inclusión de programas sociales sino también la búsqueda de
              recursos internacionales, nacionales y locales con el fin de
              favorecer el desarrollo social y comunitario de grupo o población
              determinada.
            </p>
          </div>
        </div>
        {/* <div className="grid-cols-6">
           </div>  */}

        <div className={"w-full h-full "}>
          <h1
            className="text-center text-3xl font-medium font-sans mb-5 mt-5"
            ref={refAbout}
            style={{ color: "#3f51b5" }}
          >
            Nuestros Clientes
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 pl-8 pr-8  sm:gap-2 sm:pl-20 sm:pr-20 sm:mb-10 sm:mt-16">
            <a>
              <img
                style={{ margin: "auto" }}
                src="logoImagen1.png"
                alt="logoImagen1.png"
              />{" "}
            </a>
            <a>
              <img
                style={{ margin: "auto" }}
                src="Logo LEA.png"
                alt="logoImagen1.png"
              />{" "}
            </a>
            <a>
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="logoImagen3.png"
                alt="logoImagen3.png"
              />{" "}
            </a>
            <a href={"https://www.worley.com/"}>
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="worley.png"
                alt="worley.png"
              />{" "}
            </a>
            <a href="https://www.allkem.co/projects/sal-de-vida">
              <img
                style={{ margin: "auto", objectFit: "contain" }}
                src="logoImagen4.png"
                alt="logoImagen4.png"
              />{" "}
            </a>
            <a target={"_blank"} href={"https://livent.com/es/"}>
              <img
                /*  */
                style={{ width: "auto", objectFit: "contain" }}
                src="Logo Livent_preview_rev_1.png"
                alt="Logo Livent_preview_rev_1.png"
              />
            </a>
            <a target={"_blank"} href={"http://www.ymad.com.ar/"}>
              <img
                style={{ width: "auto", objectFit: "contain" }}
                src="logoImagen13.png"
                alt="logoImagen13.png"
              />
            </a>
            <a href="https://www.allkem.co/projects/sal-de-vida">
              <img
                style={{ margin: "auto", height: "50%", objectFit: "contain" }}
                src="logoImagen5.png"
                alt="logoImagen5.png"
              />{" "}
            </a>
            <a href="https://www.lomanegra.com/">
              <img
                style={{ margin: "auto", objectFit: "contain" }}
                src="logoImagen6.jpg"
                alt="logoImagen6.jpg"
              />{" "}
            </a>
            <a href="https://cfi.org.ar/">
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="logoImagen7.png"
                alt="logoImagen7.png"
              />{" "}
            </a>
            <a>
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="logoImagen8.png"
                alt="logoImagen8.png"
              />{" "}
            </a>
            <a>
              <img
                style={{ margin: "auto", objectFit: "contain" }}
                src="logoImagen9.png"
                alt="logoImagen9.png"
              />{" "}
            </a>
            <a target={"_blank"} href={"https://liex.com.ar/"}>
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="liex SA_preview_rev_1.png"
                alt="liex SA_preview_rev_1.png"
              />
            </a>
            <a>
              <img
                style={{ margin: "auto", objectFit: "contain" }}
                src="logoImagen10.png"
                alt="logoImagen10.png"
              />{" "}
            </a>
            <a target={"_blank"} href={"https://southamericansalars.com.ar/"}>
              <img
                style={{ margin: "auto" }}
                src="south_american_salars_preview_ewqeq1.png.jpg"
                alt="south_american_salars_preview_rev_1.png"
              />{" "}
            </a>
            <a href={"http://www.crecg.com/english/2687/39952/index.html"}>
              <img
                style={{ width: "auto", objectFit: "contain" }}
                src="china_group.jpeg"
                alt="china_group.jpeg"
              />{" "}
            </a>
            <a target={"_blank"}>
              <img
                style={{ margin: "auto" }}
                src="logoImagen14.png"
                alt="logoImagen14.png"
              />
            </a>
            <a target={"_blank"} href={"https://santaritasrl.com/"}>
              <img
                style={{ margin: "auto" }}
                src="minera_santa_rita_preview_rev_1.png"
                alt="minera_santa_rita_preview_rev_1.png"
              />
            </a>
            <a>
              <img
                style={{ width: "auto", objectFit: "contain" }}
                src="logoImagen11.png"
                alt="logoImagen11.png"
              />{" "}
            </a>
            <a
              target={"_blank"}
              style={{ margin: "auto" }}
              href={"https://www.orocobre.com/operations/advantage-lithium/"}
            >
              {" "}
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="advantage_lithium_preview_rev_1.png"
                alt="advantage_lithium_preview_rev_1.png"
              />
            </a>
            <a className="flex justify-center mb-5 sm:mb-0">
              <img
                style={{ width: "auto", objectFit: "contain" }}
                src="catamarca-minera.jpeg"
                alt="catamarca-minera.jpeg"
              />
            </a>
            <a>
              <img
                style={{ margin: "auto" }}
                src="Logo_GOLD_SAND_preview_rev_1.png"
                alt="Logo_GOLD_SAND_preview_rev_1.png"
              />
            </a>
            <a target={"_blank"} href={"http://www.hidroper.com/"}>
              {" "}
              <img
                src="hidroper.jpeg"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  objectFit: "contain",
                }}
                alt="hidroper.jpeg"
              />
            </a>
            <a href={"https://www.sullairargentina.com/"}>
              <img
                style={{
                  width: "auto",
                  marginTop: "20px",
                  objectFit: "contain",
                }}
                src="sullair_preview_rev_1.png"
                alt="sullair_preview_rev_1.png"
              />
            </a>
            <a target={"_blank"} href={"http://www.360energy.com.ar/"}>
              <img
                style={{ width: "100%", height: "65%" }}
                src="energy_preview_rev_1.png"
                alt="energy_preview_rev_1.png"
              />
            </a>
            <a target={"_blank"} href={"https://www.albemarle.com/"}>
              {" "}
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="albemarle_preview_rev_1.png"
                alt="albemarle_preview_rev_1.png"
              />
            </a>
            <a target={"_blank"} href={"https://argentinalithium.com/"}>
              <img
                style={{ margin: "auto", width: "60%", height: "101%" }}
                src="argentina_lithium_preview_rev_1.png"
                alt="argentina_lithium_preview_rev_1.png"
              />
            </a>
            <a href={"https://gxy.com/sal-de-vida-2/"}>
              <img
                style={{
                  margin: "auto",
                  width: "60%",
                  margin: "auto",
                  objectFit: "contain",
                }}
                src="galaxy_preview_rev_1.png"
                alt="galaxy_preview_rev_1.png"
              />{" "}
            </a>

            <a
              target={"_blank"}
              href={"http://www.crecg.com/english/index.html"}
            >
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="Logo_Crec_preview_rev_1.png"
                alt="Logo_Crec_preview_rev_1.png"
              />
            </a>

            <a target={"_blank"} href={"https://salesdejujuy.com/"}>
              {" "}
              <img
                style={{ width: "auto", margin: "auto", objectFit: "contain" }}
                src="sales_de_jujuy_preview_rev_1.png"
                alt="sales_de_jujuy_preview_rev_1.png"
              />
            </a>

            {/*  <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:pl-48 sm:pr-36 sm:mb-12 sm:mt-20"> */}

            {/*  </div> */}

            {/* <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:pl-48 sm:pr-22 sm:mb-24 sm:mt-12"> */}
            <a>
              <img
                style={{ width: "auto", objectFit: "contain" }}
                src="borax.jpeg"
                alt="borax.jpeg"
              />
            </a>
            <a>
              <img
                style={{ margin: "auto" }}
                src="logoImagen12.png"
                alt="logoImagen12.png"
              />{" "}
            </a>

            {/* asdasdasd ssssssssssssssssssssssssssssssssssssssssssss*/}
          </div>
        </div>
        <div>
          <section className="sm:mb-24 ">
            {/* width="640" height="360"  */}
            <div class="videos sm:flex hidden">
              <video
                loop
                controls
                muted
                style={{
                  width: "40rem",
                  height: "24rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  paddingRight: "1px",
                  paddingLeft: "1px",
                }}
              >
                <source src="/videoMinera9.mp4" type="video/mp4" />
              </video>
              <video
                loop
                controls
                muted
                style={{
                  width: "25%",
                  height: "24rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  paddingRight: "1px",
                  paddingLeft: "1px",
                }}
              >
                <source src="/videoMinera6.mp4" type="video/mp4" />
              </video>
              <video
                loop
                controls
                muted
                style={{
                  width: "26%",
                  height: "24rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  paddingRight: "1px",
                  paddingLeft: "1px",
                }}
              >
                <source src="/videoMinera8.mp4" type="video/mp4" />
              </video>
              <video
                loop
                controls
                muted
                style={{
                  width: "40rem",
                  height: "24rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  paddingRight: "1px",
                  paddingLeft: "1px",
                }}
              >
                <source src="/videoMinera5.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </div>
        <div>
          <section className="sm:mb-24 ">
            {/* width="640" height="360"  */}
            <div class="block sm:hidden">
              <video
                loop
                controls
                muted
                style={{
                  width: "40rem",
                  height: "24rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <source src="/videoMinera5.mp4" type="video/mp4" />
              </video>
              <video
                loop
                controls
                muted
                style={{
                  width: "40rem",
                  height: "24rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  marginBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <source src="/videoMinera6.mp4" type="video/mp4" />
              </video>
            </div>
          </section>
        </div>

        <footer
          style={{ backgroundColor: "#3f51b5 " }}
          className="h-auto w-full text-center pt-10 pb-10"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            /* style={{ paddingLeft: "56px" }} */
            className="sm:pl-20 pl-0"
          >
            <Grid item xs={12} sm={6}>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <a
                    href="https://www.google.com/maps/place/Kgori+Punku+Consultora+SRL/@-28.4672569,-65.7782207,15z/data=!4m2!3m1!1s0x0:0x239494cfeacbb301?sa=X&ved=2ahUKEwiAhMqE67n3AhU_tJUCHd4KBrgQ_BJ6BAg7EAU"
                    className="cursor-pointer"
                  >
                    <img
                      src="mapa.png"
                      alt="team-working"
                      style={{
                        width: "21rem",
                        height: "13rem",
                        margin: "auto",
                        objectFit: "cover",
                        borderRadius: "4%",
                      }}
                    />
                  </a>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{ textAlign: "center", justifyContent: "center" }}
                >
                  <h1
                    className="text-white pt-"
                    style={{ width: "60%", margin: "auto" }}
                  >
                    <LocationOnIcon
                      style={{ color: "white" }}
                      className={"sm:mt-0 mt-4"}
                    />
                    <br></br>
                    San Fernando del Valle de Catamarca Rivadavia 520, Piso1.
                    <br></br>
                    <br></br>
                    <PhoneIcon
                      style={{ color: "white", marginBottom: "2px" }}
                    />
                    <br></br>
                    Móvil: +54 9 383 4212896
                    <br></br>
                    Fijo: +54 383 44856281
                    <br></br>
                    <br></br>
                    <EmailIcon style={{ color: "white" }} />{" "}
                    <a>adm.kgoripunku@gmail.com holima.kgoripunku@gmail.com</a>
                    <br></br>
                    <br></br>
                  </h1>
                </Grid>
              </Grid>
            </Grid>
            <div className="mt-96 mb-20 sm:hidden"></div>
            <Grid item xs={12} sm={6} className={"mt-10 sm:mt-0 pl-4 sm:pl-0"}>
              <nav
                className="text-white mt-28 sm:w-3/6 w-full sm:hidden"
                style={{ margin: "auto" }}
              >
                <a
                  href="https://www.facebook.com/KgoriPunku/?ti=as"
                  className="pr-7"
                >
                  <FacebookIcon style={{ fontSize: "40px" }} />
                </a>
                <a
                  href="https://www.instagram.com/kgori_punku/?hl=es"
                  className="pr-7"
                >
                  <InstagramIcon style={{ fontSize: "40px" }} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC2U11gD55gFIO9Cwq9lsVZQ/about"
                  className="pr-7"
                >
                  <YouTubeIcon style={{ fontSize: "40px" }} />
                </a>
                <a href="#" onClick={handleWhattsapp} className="pr-7">
                  <WhatsAppIcon
                    style={{ fontSize: "40px", cursor: "pointer" }}
                  />
                </a>
              </nav>
              <nav
                className="text-white mt-28  sm:w-3/6 w-full hidden sm:flex"
                style={{ margin: "auto" }}
              >
                <a
                  href="https://www.facebook.com/KgoriPunku/?ti=as"
                  target={"_blank"}
                  className="pr-7"
                >
                  <FacebookIcon style={{ fontSize: "60px" }} />
                </a>
                <a
                  href="https://www.instagram.com/kgori_punku/?hl=es"
                  target={"_blank"}
                  className="pr-7"
                >
                  <InstagramIcon style={{ fontSize: "60px" }} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC2U11gD55gFIO9Cwq9lsVZQ/about"
                  target={"_blank"}
                  className="pr-7"
                >
                  <YouTubeIcon style={{ fontSize: "60px" }} />
                </a>
                <a
                  href="#"
                  onClick={handleWhattsapp}
                  target={"_blank"}
                  className="pr-7"
                >
                  <WhatsAppIcon
                    style={{ fontSize: "60px", cursor: "pointer" }}
                  />
                </a>
              </nav>
              <h1 className="text-white mt-12 sm:mr-0 mr-8">
                {" "}
                ©Copyrigth 2022 Todos los Derechos Reservados Kgori Punku
                Consultora SRL{" "}
              </h1>
            </Grid>
          </Grid>
        </footer>
      </div>
    </body>
  );
}
