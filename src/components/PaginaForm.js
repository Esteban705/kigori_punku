import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Grid } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import enviarMail from "./helpers/enviarMail";
import { enviarCorreo } from "./funciones";
import { handleTime } from "./helpers/time";

export const PaginaForm = () => {
  const handleWhattsapp = () => {
    const wspNumber = "3834212896";
    const url = `https://api.whatsapp.com`;

    window.open(url);
  };

  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu(true);
    setCloseMenu(false);
  };
  const handleCloseMenu = () => {
    setCloseMenu(true);
    setOpenMenu(false);
  };

  return (
    <>
      <body>
        <div className="md:hidden responsive">
          <Link
            style={{ textDecoration: "none" }}
            className="img-responsive"
            to="/"
          >
            <img src={"/Logo_Kgori_Punku_Consultora_SRL.png"} alt="logo" />
          </Link>
          {/* <h2></h2> */}
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

          <div
            className="nave"
            hidden={closeMenu}
            onMouseLeave={handleCloseMenu}
          >
            <ul className="grid grid-cols-1 ">
              <li className="text-left block text-white p-4 border-b-2 border-indigo-100 cursor-pointer">
                <Link
                  style={{ textDecoration: "none", color: "#556cac" }}
                  to="/"
                >
                  inicio
                </Link>
              </li>
              <li className="text-left block text-white p-4 border-b-2 border-indigo-100 cursor-pointer">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#556cac" }}
                >
                  Nuestros Clientes
                </Link>
              </li>
              <li className="text-left block text-white p-4 border-b-2 border-indigo-100 cursor-pointer">
                <Link
                  style={{ textDecoration: "none", color: "#556cac" }}
                  to="/"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li className="text-left block text-white p-4 border-b-2 border-indigo-100 cursor-pointer">
                <Link
                  style={{ textDecoration: "none", color: "#556cac" }}
                  to="/"
                >
                  Servicios
                </Link>
              </li>
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
        <div className="sm:flex hidden page-header">
          <Link style={{ textDecoration: "none" }} to="/">
            <img
              src={"/Logo_Kgori_Punku_Consultora_SRL.png"}
              className="h-20 w-52"
              alt="logo"
            />
          </Link>
          {/* <h2></h2> */}
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "#556cac" }} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "#556cac" }} to="/">
                Nuestros Clientes
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "#556cac" }} to="/">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "#556cac" }} to="/">
                Servicios
              </Link>
            </li>
          </ul>
        </div>

        <div class="jumbotron jumbotron-fluid">
          <div class="container sm:mt-0 mt-24">
            <h1 class="display-4">Formulario de contacto</h1>

            <form>
              <div class="form-group">
                <label for="nombre" class="form-label">
                  Apellido y nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  name="nombre"
                ></input>

                <div class="alert alert-warning alerta_nombre" role="alert">
                  Tu nombre es muy corto
                </div>
              </div>

              <div class="form-group">
                <label for="telefono" class="form-label">
                  Telefono
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="telefono"
                  name="telefono"
                ></input>

                <div class="alert alert-warning alerta_telefono" role="alert">
                  Ingrese un numero válido
                </div>
              </div>

              <div class="form-group">
                <label for="correo" class="form-label">
                  Ingresa tu correo electronico
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="correo"
                  name="correo"
                  placeholder="correo@ejemplo.com"
                ></input>

                <div class="alert alert-warning alerta_correo" role="alert">
                  Ingrese un correo válido
                </div>
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Ingresa tu mensaje
                </label>
                <textarea
                  class="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="3"
                ></textarea>

                <div class="alert alert-warning alerta_mensaje" role="alert">
                  Tu mensaje es muy corto
                </div>

                <div class="alert alert-success alerta_correcto" role="alert">
                  Mensaje enviado con exito
                </div>

                <div class="alert alert-danger alerta_incorrecto" role="alert">
                  No se pudo enviar el mensaje
                </div>
              </div>

              <div class="form-group">
                <a
                  class="btn btn-info btn-lg"
                  tabindex="-1"
                  role="button"
                  aria-disabled="true"
                  onClick={(e) => {
                    enviarCorreo(e);
                  }}
                >
                  Enviar
                </a>
              </div>
            </form>
          </div>
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
                    Móvil:+54 9 383 4212896 Fijo: +54 383 44856281
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
                className="text-white mt-28 sm:w-3/6 w-full hidden sm:flex"
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

        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="js/funciones.js"></script>
      </body>
    </>
  );
};
