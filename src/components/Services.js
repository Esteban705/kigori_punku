import React from "react";
import "animate.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CheckIcon from "@material-ui/icons/Check";
import "../assets/style.css";
import "../assets/main.css";
import "../assets/Tailwind.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import image from "./img/Imagen1.png";
import image2 from "./img/Imagen2.png";
import image6 from "./img/Imagen6.png";
import image7 from "./img/Imagen7.png";
import image3 from "./img/Imagen3.png";
import image4 from "./img/Imagen4.png";
import image5 from "./img/Imagen5.png";
import image8 from "./img/Imagen8.png";
import image9 from "./img/Imagen9.png";
import image10 from "./img/Imagen10.png";
import image11 from "./img/Imagen11.png";
import image12 from "./img/Imagen12.png";
import image13 from "./img/Imagen13.jpg";
import image14 from "./img/Imagen14.png";
import image15 from "./img/Imagen15.png";
import image16 from "./img/Imagen16.png";
import image17 from "./img/Imagen17.png";
import image18 from "./img/Imagen18.png";
import image19 from "./img/Imagen19.png";
import image20 from "./img/Imagen20.png";
import image21 from "./img/Imagen21.png";
import image22 from "./img/Imagen22.png";
import image23 from "./img/Imagen23.png";
import image24 from "./img/Imagen24.png";
import image25 from "./img/Imagen25.png";
import image26 from "./img/Imagen26.png";
import image27 from "./img/Imagen27.png";
import image28 from "./img/Imagen28.png";
import image29 from "./img/Imagen29.png";
import image30 from "./img/Imagen30.png";
import image31 from "./img/Imagen31.png";
import image32 from "./img/Imagen32.png";
import image33 from "./img/Imagen33.png";
import image34 from "./img/Imagen34.png";
import image35 from "./img/Imagen35.png";
import image36 from "./img/Imagen36.png";
import image37 from "./img/Imagen37.png";
import image38 from "./img/Imagen38.png";
import image39 from "./img/Imagen39.jpg";
import image40 from "./img/Imagen40.jpg";
import image41 from "./img/Imagen41.jpg";
import image42 from "./img/Imagen42.jpg";
import image43 from "./img/Imagen43.jpg";
import image44 from "./img/Imagen44.jpg";
import image45 from "./img/Imagen45.jpg";
import image46 from "./img/Imagen46.jpg";
import image47 from "./img/Imagen47.jpg";
import image48 from "./img/Imagen48.jpg";
import image49 from "./img/Imagen49.jpg";
import image50 from "./img/Imagen50.jpg";
import image51 from "./img/Imagen51.png";
import image52 from "./img/Imagen52.jpg";
import image53 from "./img/Imagen53.jpg";
import image54 from "./img/Imagen54.jpg";
import image55 from "./img/Imagen55.jpg";
import image56 from "./img/Imagen56.jpg";
import image57 from "./img/Imagen57.jpg";
import image58 from "./img/Imagen58.jpg";
import image59 from "./img/Imagen59.jpg";
import image60 from "./img/Imagen60.jpg";
import image61 from "./img/Imagen61.jpg";
import image62 from "./img/Imagen62.jpg";
import image63 from "./img/Imagen63.jpg";
import image64 from "./img/Imagen64.jpg";
import image65 from "./img/Imagen65.jpg";
import image66 from "./img/Imagen66.jpg";
import image67 from "./img/Imagen67.jpg";
import image68 from "./img/Imagen68.png";
import image69 from "./img/Imagen69.png";
import image70 from "./img/Imagen70.png";
import image71 from "./img/Imagen71.png";
import image72 from "./img/Imagen72.jpg";
import image73 from "./img/Imagen73.jpg";
import image74 from "./img/Imagen74.jpg";
import image75 from "./img/Imagen75.jpg";
import image76 from "./img/Imagen76.png";
import image77 from "./img/Imagen77.jpg";
import image78 from "./img/Imagen78.jpg";
import image79 from "./img/Imagen79.jpg";
import image80 from "./img/Imagen80.jpg";
import image81 from "./img/Imagen81.jpg";
import image82 from "./img/Imagen82.jpg";
import image83 from "./img/Imagen83.jpg";
import image84 from "./img/Imagen84.jpg";
import image85 from "./img/Imagen85.jpg";
import image86 from "./img/Imagen86.jpg";
import image87 from "./img/Imagen87.png";
import image88 from "./img/Imagen88.png";
import image89 from "./img/Imagen89.jpg";
import image90 from "./img/Imagen90.jpg";
import image91 from "./img/Imagen91.jpg";
import image92 from "./img/Imagen92.png";
import image93 from "./img/Imagen93.jpg";
import image94 from "./img/Imagen94.jpg";
import image95 from "./img/Imagen95.jpg";
import image96 from "./img/Imagen96.jpg";
import image97 from "./img/Imagen97.jpg";
import image98 from "./img/Imagen98.png";
import image99 from "./img/Imagen99.png";
import image100 from "./img/Imagen100.png";
import image101 from "./img/Imagen101.jpg";
import image102 from "./img/Imagen102.jpg";
import image103 from "./img/Imagen103.jpg";
import image104 from "./img/Imagen104.jpg";
import image107 from "./img/Imagen107.jpg";
import image106 from "./img/Imagen106.jpg";
import image109 from "./img/Imagen109.png";
import image110 from "./img/Imagen110.png";
import image111 from "./img/Imagen111.png";
import image112 from "./img/Imagen112.jpg";
import image113 from "./img/Imagen113.jpg";
import Imagen114 from "./img/Imagen114.jpg";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const Services = () => {
  const classes = useStyles();
  return (
    <>
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)", paddingTop: '5px', fontWeight: 'bold' }}>
                  Alcance PDF: <a href="https://kgoripunkuconsultora.com.ar/pdf/Alcances.pdf"><PictureAsPdfIcon></PictureAsPdfIcon></a>
                </Typography>
                <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)", paddingTop: '5px', fontWeight: 'bold' }}>
                  Presentación PDF: <a href="https://kgoripunkuconsultora.com.ar/pdf/Prentacion.pdf"><PictureAsPdfIcon></PictureAsPdfIcon></a>
                </Typography>
                <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)", paddingTop: '5px', paddingBottom: '5px', fontWeight: 'bold' }}>
                  CV PDF: <a href="https://kgoripunkuconsultora.com.ar/pdf/CV.pdf"><PictureAsPdfIcon></PictureAsPdfIcon></a>
                </Typography>
            </div>     
      <h1>
        Ofrecemos una amplia gama de servicios de asesoría. Kgori Punku
        Consultora SRL dispone de especialistas en los ámbitos físico, ecológico
        y económico que trabajan en:
      </h1>
      <div
        /* className={classes.root} */ style={{
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={classes.heading}
              style={{ color: "rgb(63, 81, 181)" }}
            >
              {" "}
              <CheckIcon />
              Servicio de perforación
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex" }}>
              <Typography style={{ width: "50%" }}>
                Kgori Punku Consultora SRL, ofrece servicios de perforación
                mediante “Sistema de Diamantina con inyección de lodo” con
                corona HQ3 de Fondo. Los ensayos de penetración dinámica SPT
                (Standard Penetration Test) ejecutados In Situ se efectúan según
                lo establecido en la norma ASTM D-1586-08a.  Para la perforación
                de los sondeos, se usará una Máquina Perforadora montada sobre
                Oruga. Este equipo usa sistemas de perforación de tipo
                Diamantina con inyección de lodo de polímeros orgánicos
                biodegradables. El lodo que se usará en el proceso de
                perforación es un lodo fabricado con polímeros (POLIGET de Marca
                CITEP S.R.L.), en tanto que la bentonita (BENTOGET de marca
                CITEP S.R.L.), que es una arcilla de origen mineral. Se utiliza
                principalmente para fortalecer la viscosidad pero también
                controla el filtrado, fortalece el revoque en las paredes del
                pozo y suspende los sólidos perforados. Esta arcilla se usa en
                polvo de color ocre, no es soluble, es dispersable en agua, no
                es tóxica, es de origen natural y no es contaminante
              </Typography>
              <Typography style={{ width: "50%" }}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-1'}>
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                    }}
                    src={image2}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                    }}
                    src={image6}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "15rem",
                    }}
                    src={image}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                    }}
                    src={image7}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{color: "rgb(63, 81, 181)"}} className={classes.heading}>
              {" "}
              <CheckIcon />
              Servicio de geofísica
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex" }}>
              <Typography style={{ width: "50%"}}>
                Kgori Punku Consultora SRL, ofrece servicios de Geofísica, el
                cual se lleva a cabo por el método de SEV (sondeo eléctrico
                vertical), con un dispositivo electródico tetrapolar tipo
                Schlumberger o la configuración Werner, marca GEOMETER MPX-400
                de constante geométrica K = p. ((AM.AN) /MN). 
                  <br></br>
                <span style={{fontWeight: 'bold'}}>Nuestros profesionales idóneos Realizan análisis geofísicos para apoyar
                proyectos en los sectores de:</span>
                <li>Desarrollo urbanístico </li>
                <li>Minería</li>
                <li> Gas y petróleo </li>
                <li> Electricidad y energía </li>
                <li>Transporte</li>
                <li>Recursos hídricos</li>
                <li>Gestión de residuos</li>
              </Typography>
              <Typography style={{ width: "50%" }}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-1'}>
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image3}
                  />
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image4}
                  />
                
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image5}
                  />
                </div>  
                
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon /> Servicio de geología
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex" }}>
              <Typography style={{ width: "50%" }}>
            <span style={{fontWeight: 'bold'}}>Kgori Punku Consultora ofrece los siguientes Servicios Geológicos</span>    

              <li>Mapeo profesional en geología regional/local</li>
              <li>Geología Estructural y Tectónica aplicadas a la exploración e ingeniería</li>
              <li>Geomorfología, geodinámica externa y peligros geológicos</li>
              <li>Estratigrafía clásica, Sedimentología y Estratigrafía Secuencial</li>
              <li>Manejo de cartografía geológica SIG/GIS</li>  
              <li>Interpretación sedimentaria estructural con filiación económica en líneas sísmicas de reflexión</li>
              <li>Modelamiento geológico 2D-3D</li>
              <li>Asesoramiento técnico</li>
              </Typography>
              <Typography style={{ width: "50%" }}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-1'}>
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      objectFit: 'cover'
                    }}
                    src={image8}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      objectFit: 'cover'
                    }}
                    src={image9}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      objectFit: 'cover'
                    }}
                    src={image10}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      objectFit: 'cover'
                    }}
                    src={image11}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicio de geoquímica
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex" }}>
              <Typography style={{ width: "50%" }}>
            <span style={{fontWeight: 'bold'}}>Ofrecemos a nuestros clientes una amplia y extensa gama de servicios especializados entre los que se incluyen:</span>    

          
              <li>Caracterización geoquímica de materiales y de residuos en ambiente natural.</li>
              <li>Estudios de drenaje ácido de roca.</li>
              <li>Planes de manejo de relaves y estéril de mina.</li>
              <li>Monitoreo ambiental y estudios de línea base.</li>
              <li>Evaluaciones de impacto social y ambiental.</li>  
              <li>Tratamiento activo y pasivo de aguas y de aguas residuales.</li>
              <li>Almacenamiento y recuperación de acuíferos.</li>
              <li>Evaluación de riesgo ecológico y humano.</li>
              <li>Asistencia para la obtención de permisos y demandas judiciales</li>
              </Typography>
              <Typography style={{ width: "50%" }}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-1'}>
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                    }}
                    src={image13}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                    }}
                    src={image12}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicios de hidrogeología
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex" }}>
              <Typography style={{ width: "50%" }}>
            <span style={{fontWeight: 'bold'}}>Los Profesionales de Kgori Punku Consultora SRL tienen vasta experiencia en temas relacionados con el manejo de aguas subterráneas, de los cuales se detallan a continuación:</span>    
        
              <li> Abastecimiento de aguas obtenidas de los acuíferos.</li>
              <li>Pozos de producción, colectores radiales y verticales convencionales.</li>
              <li>Control de desaguado y filtración.</li>
              <li>Gestión y control de acuíferos en áreas industriales y mineras.</li>
              <li>Almacenamiento y recuperación en acuíferos (ASR) y filtración en riberas (RBF Rehabilitación de pozos.</li>  
              <li>Remediación de acuíferos.</li>
              <li>Mejora en la recarga de acuíferos.</li>
              <li>Mitigación del cambio climático.</li>
              <span style={{fontWeight: 'bold'}}>Estas aplicaciones se ven complementadas por nuestra capacidad para realizar:</span>    
              <li>Investigaciones y evaluaciones hidrológicas e hidrogeológicas.</li>
              <li>Análisis Hidráulicos.</li>
              <li>Análisis de los efectos del cambio climático.</li>
              <li>Protección de manantiales y manejo de acuíferos.</li>
              <li>Estudios integrados de la gestión de aguas superficiales y subterráneas de cuenca regional.</li>
              <li>Obtención de permisos para extracción o recarga de aguas subterráneas.</li>
              <li>Caracterizaciones para Evaluaciones ambientales.</li>
              </Typography>
              <Typography style={{ width: "50%" }}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-1'}>
                  <img
                    style={{
                      width: "100%",
                      height: "25rem",
                      objectFit: 'cover'
                    }}
                    src={image14}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "25rem",
                      objectFit: 'cover'
                    }}
                    src={image15}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)", marginBottom: '0px' }}>
              <CheckIcon />Servicio de geotecnia</Typography>
          </AccordionSummary>
          <AccordionDetails style={{display: 'block', marginTop: '0px'}}>
            <Typography>
            En Kgori Punku Consultora SRL Poseemos experiencia en proyectos de envergadura y un desarrollo de ensayos y equipamientos extenso tanto para trabajos en sitio como en laboratorio.
          Nuestra oferta técnica permite abastecer las necesidades de los proyectos y optimizar las soluciones posibles para lo relacionado a suelos, que son el sustento principal de las estructuras civiles.
          Estudios geotécnicos de toda tipología relacionados a obras de Arquitectura, obras de infraestructura, proyectos mineros, y de toda tipología.
            </Typography>
            <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography  style={{ color: "rgb(63, 81, 181)" }}>
              {" "}
              <CheckIcon />
              Perforación y Muestreo de Suelos y Rocas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            
          <div style={{ display: "flex", justifyContent: 'center'}}>
              <Typography style={{ width: "40%"}}>  
            <li>Perforación en Suelos y Rocas</li>
              <li>Ensayos SPT y extracción de muestras</li>
              <li>Ensayos y sondeos especiales</li>
              <li>Muestreo rotativo de suelos</li>
              <li>Diamantina en Roca</li>  
              <li>Muestreos sobre plataforma</li>
              <li>Muestreos especiales</li>
              <li>Muestreo inalterado</li>
              <li>Calicatas</li>
              <li>Muestreos a granel</li>
              </Typography>
              <Typography style={{ width: "50%" }}>
              <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-1'}>
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image16}
                  />
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image17}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      objectFit: 'cover'
                    }}
                    src={image18}
                  />
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image19}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />
              Ensayos In situ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex", justifyContent: 'center'}}>
              <Typography style={{ width: "40%"}}>
                <li>Ensayos Lugeon</li>
              <li>Ensayos Lefranc</li>
              <li>Ensayos de bombeo</li>
              <li>Ensayos de Permeabilidad</li>
              <li>Placa de Carga</li>  
              <li>CBR In Situ</li>
              <li>Densidades In Situ</li>
              <li>Controles de Calidad</li>
              <li>Geofisica</li>
              </Typography>
              <Typography style={{ width: "50%" }}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-1'}>
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "19rem",
                    }}
                    src={image20}
                  />
                  <img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "19rem",
                    }}
                    src={image21}
                  />
                
                  <img
                    style={{
                      width: "100%",
                      objectFit: "fill",
                      height: "19rem",
                    }}
                    src={image22}
                  />
                  </div>
                
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />
              Ensayos de Laboratorio
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{justifyContent: 'center'}}>
            <div style={{ display: "flex"}}>
              <Typography style={{ width: "40%" }}>
              <li>Clasificación de Suelos HRB/USCS</li>
              <li>Límites de Atterberg</li>
               <li>Granulometría</li>
              <li>Ensayos Proctor</li>
              <li>Ensayos CBR</li>
              <li>Ensayos Triaxiales</li>
              <li>Ensayos edométricos</li>
              <li>Ensayos de Durabilidad</li>
              <li>Ensayos de permeabilidad</li>
              <li>Ensayos para suelos especiales</li>
              <li>Ensayos para suelos complejos</li>
              <li>Ensayos para mezclas de suelo</li>
              <li>Ensayos químicos</li>
              <li>Ensayos de Roca</li>
              <li>Ensayos de arenas y agregados</li>
               <li>Ensayos sobre materiales mineros</li>

              </Typography>
              <Typography style={{ width: "80%", marginRight: '8rem'}}>
                <div style={{ justifyContent: "right" }} className={'grid grid-cols-3 gap-1'} >
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image23}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image24}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image25}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image26}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image27}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image28}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              {" "}
              <CheckIcon />
              Consultoría e Ingeniería Geotécnica
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <li>Reportes geotécnicos</li>
                <li>Análisis de resultados</li>
                <li>Posproceso de información</li>
                <li>Asesoramiento geotécnico</li>
                <li>Diseño de fundaciones</li>
                <li>Diseño de estructuras geotécnicas</li>
            </Typography>
          </AccordionDetails>
        </Accordion>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />
              Servicion de gerenciamientos de obra
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: "flex" }}>
              <Typography style={{ width: "50%" }}>
              Nuestra empresa posee vasta experiencia y un equipo de ingenieros y técnicos altamente calificados para controlar cualitativa y cuantitativamente la ejecución de la obra.
<br></br>
<br></br>
            <span style={{fontWeight: 'bold'}}>Nuestros servicios abarcan:</span>    
        
           <li>Gerenciamiento de Construcción</li>
           <li>Cronogramas preliminares y ejecutivos</li>
           <li>Gestión y Control Integral de Costos</li>
           <li>Compras Directas y Adquisiciones</li>
           <li>Gestión de Cambios</li>
           <li>Control de Proveedores</li>
           <li>Dirección de Obra</li>
           <li>Logística de Obra</li>
           <li>Acta de replanteo</li>
           <li>Libro de órdenes</li>
           <li>Certificado final de obra</li>
           <li>Libro de incidencias</li>
           <li>Control Preventivo (anticipación)</li>
           <li>Control de Calidad</li>
           <li>Seguridad e Higiene / SSHH / SHE</li>

              </Typography>
              <Typography style={{ width: "50%" }}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-1'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image29}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image30}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image31}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image32}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />
              Servicios de topografia y agrimensura
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "50%" }}>

            <span style={{fontWeight: 'bold'}}>Nuestra empresa posee vasta experiencia y un equipo de ingenieros agrimensores  y técnicos altamente calificados para ofrecer los siguientes servicios:</span>    
        <br></br>
        <br></br>
            <li>Servicios de Topografía</li>
            <li>Mensuras</li>
            <li>Relevamientos y Replanteos para obras civiles, Viales,etc</li>
            <li> Mediciones Satelitales GPS/GNSS</li>
            <li> Inspección, Control y seguimientos de obra</li>
            <li> Cartografía de Curvas de Nivel</li>
            <li>Modelos Digitales de Terreno</li>
            <li>Relevamientos con Drone</li>


              </Typography>
          </AccordionDetails>
        </Accordion>
       {/*  <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <CheckIcon />
              Consultoría para Due Diligence - Fusiones y Adquisiciones.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Servicios y Asesoramientos Técnicos GeoMineros.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <CheckIcon />
              Gestión de Residuos.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Servicios y Asesoramientos Técnicos GeoMineros.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              <CheckIcon />
              Aire / Acústica / Ruido.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Servicios y Asesoramientos Técnicos GeoMineros.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              <CheckIcon />
              Análisis de Riesgo Ecológico y para la Salud.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Servicios y Asesoramientos Técnicos GeoMineros.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <CheckIcon />
              Ciencias Biológicas.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Servicios y Asesoramientos Técnicos GeoMineros.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <CheckIcon />
              Análisis de Peligrosidad Sísmica e Ingeniería Sísmica.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Servicios y Asesoramientos Técnicos GeoMineros.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              <CheckIcon />
              Tunelería.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Servicios y Asesoramientos Técnicos GeoMineros.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
      {/* <div class="animate__animated animate__pulse nimate__delay-5s">
        <h1>
        Ofrecemos una amplia gama de servicios de asesoría. Kgori Punku Consultora SRL dispone
        de especialistas en los ámbitos físico, ecológico y económico que
        trabajan en:
        </h1>
        <br></br>
        <ul style={{textAlign: 'initial'}}>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Servicios y Asesoramientos Técnicos GeoMineros.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Aguas Subterráneas / Hidrogeología Minera (Litio/Potasio.)
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Aguas Superficiales. Geoquímica. Geomecánica de Rocas y de Suelos.
            Ingeniería de materiales de construcción y sus respectivos ensayos.
            Geofísica.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Estudios de Medio Ambiente. Evaluación de Impacto Social y
            Ambiental.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Salud y Seguridad - Higiene Industrial. Servicios de Evaluación de
            Reservas y Recursos Minerales.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Asesoría Legal. Servicios de Contratación y Construcción.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Energías Renovables.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Planificación / Diseño / Arquitectura Paisajística.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Urbanización y Reutilización de la Propiedad.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Remediación del Área de Proyecto.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Tratamiento de Aguas Residuales - Ingeniería de Procesos.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Consultoría para Due Diligence - Fusiones y Adquisiciones.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Gestión de Residuos.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Aire / Acústica / Ruido.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Análisis de Riesgo Ecológico y para la Salud.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Ciencias Biológicas.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Análisis de Peligrosidad Sísmica e Ingeniería Sísmica.
          </li>
          <li style={{width: '50%', margin: 'auto'}}>
            <CheckIcon />
            Tunelería.
          </li>
        </ul>
      </div> */}
    </>
  );
};

export const ServicesResponsibo = () => {
  const classes = useStyles();
  return (
    <>
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)", paddingTop: '5px', fontWeight: 'bold' }}>
              Alcance PDF: <a href="https://kgoripunkuconsultora.com.ar/pdf/Alcances.pdf"><PictureAsPdfIcon></PictureAsPdfIcon></a>
            </Typography>
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)", paddingTop: '5px', fontWeight: 'bold' }}>
              Presentación PDF: <a href="https://kgoripunkuconsultora.com.ar/pdf/Prentacion.pdf"><PictureAsPdfIcon></PictureAsPdfIcon></a>
            </Typography>
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)", paddingTop: '5px', paddingBottom: '5px', fontWeight: 'bold' }}>
              CV PDF: <a href="https://kgoripunkuconsultora.com.ar/pdf/CV.pdf"><PictureAsPdfIcon></PictureAsPdfIcon></a>
            </Typography>
    <h1>
        Ofrecemos una amplia gama de servicios de asesoría. Kgori Punku
        Consultora SRL dispone de especialistas en los ámbitos físico, ecológico
        y económico que trabajan en:
      </h1>
      <div
        /* className={classes.root} */ style={{
          marginTop: "30px",
          marginBottom: "20px",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              className={classes.heading}
              style={{ color: "rgb(63, 81, 181)" }}
            >
              {" "}
              <CheckIcon />
              Servicio de perforación
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Typography style={{textAlign: 'left'}}>
                Kgori Punku Consultora SRL, ofrece servicios de perforación
                mediante “Sistema de Diamantina con inyección de lodo” con
                corona HQ3 de Fondo. Los ensayos de penetración dinámica SPT
                (Standard Penetration Test) ejecutados In Situ se efectúan según
                lo establecido en la norma ASTM D-1586-08a.  Para la perforación
                de los sondeos, se usará una Máquina Perforadora montada sobre
                Oruga. Este equipo usa sistemas de perforación de tipo
                Diamantina con inyección de lodo de polímeros orgánicos
                biodegradables. El lodo que se usará en el proceso de
                perforación es un lodo fabricado con polímeros (POLIGET de Marca
                CITEP S.R.L.), en tanto que la bentonita (BENTOGET de marca
                CITEP S.R.L.), que es una arcilla de origen mineral. Se utiliza
                principalmente para fortalecer la viscosidad pero también
                controla el filtrado, fortalece el revoque en las paredes del
                pozo y suspende los sólidos perforados. Esta arcilla se usa en
                polvo de color ocre, no es soluble, es dispersable en agua, no
                es tóxica, es de origen natural y no es contaminante
              </Typography>
              <Typography>
                <div /* style={{ display: "grid" }} */ style={{marginBottom: '20px'}}>
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      marginTop: '20px'
                    }}
                    src={image2}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      marginTop: '20px'
                    }}
                    src={image6}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      marginTop: '20px'
                    }}
                    src={image}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "15rem",
                      marginTop: '20px'
                    }}
                    src={image7}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{color: "rgb(63, 81, 181)"}} className={classes.heading}>
              {" "}
              <CheckIcon />
              servicio de geofísica
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{textAlign: 'left'}}>
              <Typography>
                Kgori Punku Consultora SRL, ofrece servicios de Geofísica, el
                cual se lleva a cabo por el método de SEV (sondeo eléctrico
                vertical), con un dispositivo electródico tetrapolar tipo
                Schlumberger o la configuración Werner, marca GEOMETER MPX-400
                de constante geométrica K = p. ((AM.AN) /MN). 
                  <br></br>
                <span style={{fontWeight: 'bold'}}>Nuestros profesionales idóneos Realizan análisis geofísicos para apoyar
                proyectos en los sectores de:</span>
                <div style={{padding: '5px'}}>
                <li>Desarrollo urbanístico</li>
                <li>Minería</li>
                <li> Gas y petróleo </li>
                <li> Electricidad y energía </li>
                <li>Transporte</li>
                <li>Recursos hídricos</li>
                <li>Gestión de residuos</li>
                </div>
              </Typography>
              <Typography>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image3}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image4}
                  />
                </div>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "contain",
                      padding: '4px',
                      height: "15rem",
                    }}
                    src={image5}
                  />
                
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon /> Servicio de geología
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{textAlign: 'left'}}>
              <Typography>
            <span style={{fontWeight: 'bold'}}>Kgori Punku Consultora ofrece los siguientes Servicios Geológicos</span>    
            <div style={{padding: '5px'}}>
              <li>Mapeo profesional en geología regional/local</li>
              <li>Geología Estructural y Tectónica aplicadas a la exploración e ingeniería</li>
              <li>Geomorfología, geodinámica externa y peligros geológicos</li>
              <li>Estratigrafía clásica, Sedimentología y Estratigrafía Secuencial</li>
              <li>Manejo de cartografía geológica SIG/GIS</li>  
              <li>Interpretación sedimentaria estructural con filiación económica en líneas sísmicas de reflexión</li>
              <li>Modelamiento geológico 2D-3D</li>
              <li>Asesoramiento técnico</li>
            </div>  
              </Typography>
              <Typography>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "contain",
                      height: "15rem",
                    }}
                    src={image8}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "contain",
                      height: "15rem",
                    }}
                    src={image9}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "15rem",
                      objectFit: 'contain'
                    }}
                    src={image10}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "contain",
                      height: "15rem",
                    }}
                    src={image11}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicio de geoquímica
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{textAlign: 'left'}}>
              <Typography>
            <span style={{fontWeight: 'bold'}}>Ofrecemos a nuestros clientes una amplia y extensa gama de servicios especializados entre los que se incluyen:</span>    

            <div style={{padding: '5px'}}>
              <li>Caracterización geoquímica de materiales y de residuos en ambiente natural.</li>
              <li>Estudios de drenaje ácido de roca.</li>
              <li>Planes de manejo de relaves y estéril de mina.</li>
              <li>Monitoreo ambiental y estudios de línea base.</li>
              <li>Evaluaciones de impacto social y ambiental.</li>  
              <li>Tratamiento activo y pasivo de aguas y de aguas residuales.</li>
              <li>Almacenamiento y recuperación de acuíferos.</li>
              <li>Evaluación de riesgo ecológico y humano.</li>
              <li>Asistencia para la obtención de permisos y demandas judiciales</li>
            </div>  
              </Typography>
              <Typography>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "15rem",
                    }}
                    src={image13}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "15rem",
                    }}
                    src={image12}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicios de hidrogeología
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{textAlign: 'left'}}>
              <Typography>
            <span style={{fontWeight: 'bold'}}>Los Profesionales de Kgori Punku Consultora SRL tienen vasta experiencia en temas relacionados con el manejo de aguas subterráneas, de los cuales se detallan a continuación:</span>    
            <div style={{padding: '5px'}}>
              <li> Abastecimiento de aguas obtenidas de los acuíferos.</li>
              <li>Pozos de producción, colectores radiales y verticales convencionales.</li>
              <li>Control de desaguado y filtración.</li>
              <li>Gestión y control de acuíferos en áreas industriales y mineras.</li>
              <li>Almacenamiento y recuperación en acuíferos (ASR) y filtración en riberas (RBF Rehabilitación de pozos.</li>  
              <li>Remediación de acuíferos.</li>
              <li>Mejora en la recarga de acuíferos.</li>
              <li>Mitigación del cambio climático.</li>
              <span style={{fontWeight: 'bold'}}>Estas aplicaciones se ven complementadas por nuestra capacidad para realizar:</span>    
              <li>Investigaciones y evaluaciones hidrológicas e hidrogeológicas.</li>
              <li>Análisis Hidráulicos.</li>
              <li>Análisis de los efectos del cambio climático.</li>
              <li>Protección de manantiales y manejo de acuíferos.</li>
              <li>Estudios integrados de la gestión de aguas superficiales y subterráneas de cuenca regional.</li>
              <li>Obtención de permisos para extracción o recarga de aguas subterráneas.</li>
              <li>Caracterizaciones para Evaluaciones ambientales.</li>
            </div>   
              </Typography>
              <Typography>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "25rem",
                      objectFit: 'cover'
                    }}
                    src={image14}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "25rem",
                      objectFit: 'cover'
                    }}
                    src={image15}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicio de geotecnia</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{textAlign: 'left'}}>
            En Kgori Punku Consultora SRL Poseemos experiencia en proyectos de envergadura y un desarrollo de ensayos y equipamientos extenso tanto para trabajos en sitio como en laboratorio.
          Nuestra oferta técnica permite abastecer las necesidades de los proyectos y optimizar las soluciones posibles para lo relacionado a suelos, que son el sustento principal de las estructuras civiles.
          Estudios geotécnicos de toda tipología relacionados a obras de Arquitectura, obras de infraestructura, proyectos mineros, y de toda tipología.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              {" "}
              <CheckIcon />
              Perforación y Muestreo de Suelos y Rocas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            
            <div style={{textAlign: 'left'}}>
              <Typography >  
        <div style={{padding: '5px'}}>     
            <li>Perforación en Suelos y Rocas</li>
              <li>Ensayos SPT y extracción de muestras</li>
              <li>Ensayos y sondeos especiales</li>
              <li>Muestreo rotativo de suelos</li>
              <li>Diamantina en Roca</li>  
              <li>Muestreos sobre plataforma</li>
              <li>Muestreos especiales</li>
              <li>Muestreo inalterado</li>
              <li>Calicatas</li>
              <li>Muestreos a granel</li>
      </div>      
              </Typography>
              <Typography >
              <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image16}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image17}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "15rem",
                      objectFit: 'cover'
                    }}
                    src={image18}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "cover",
                      height: "15rem",
                    }}
                    src={image19}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />
              Ensayos In situ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{textAlign: 'left'}}>
              <Typography>
              <div style={{padding: '5px'}}>
                <li>Ensayos Lugeon</li>
                <li>Ensayos Lefranc</li>
                <li>Ensayos de bombeo</li>
                <li>Ensayos de Permeabilidad</li>
                <li>Placa de Carga</li>  
                <li>CBR In Situ</li>
                <li>Densidades In Situ</li>
                <li>Controles de Calidad</li>
                <li>Geofisica</li>
            </div>   
              </Typography>
              <Typography>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "cover",
                      height: "19rem",
                    }}
                    src={image20}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "cover",
                      height: "19rem",
                    }}
                    src={image21}
                  />
                </div>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: "cover",
                      padding: '4px',
                      height: "19rem",
                    }}
                    src={image22}
                  />
                
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />
              Ensayos de Laboratorio
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{textAlign: 'left'}}>
            <div>
              <Typography>
              <div style={{padding: '5px'}}>    
                  <li>Clasificación de Suelos HRB/USCS</li>
                  <li>Límites de Atterberg</li>
                  <li>Granulometría</li>
                  <li>Ensayos Proctor</li>
                  <li>Ensayos CBR</li>
                  <li>Ensayos Triaxiales</li>
                  <li>Ensayos edométricos</li>
                  <li>Ensayos de Durabilidad</li>
                  <li>Ensayos de permeabilidad</li>
                  <li>Ensayos para suelos especiales</li>
                  <li>Ensayos para suelos complejos</li>
                  <li>Ensayos para mezclas de suelo</li>
                  <li>Ensayos químicos</li>
                  <li>Ensayos de Roca</li>
                  <li>Ensayos de arenas y agregados</li>
                  <li>Ensayos sobre materiales mineros</li>
               </div>
              </Typography>
              <Typography>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image23}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image24}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image25}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image26}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image27}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image28}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              {" "}
              <CheckIcon />
              Consultoría e Ingeniería Geotécnica
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <div style={{padding: '5px'}}>   
              <li>Reportes geotécnicos</li>
                  <li>Análisis de resultados</li>
                  <li>Posproceso de información</li>
                  <li>Asesoramiento geotécnico</li>
                  <li>Diseño de fundaciones</li>
                  <li>Diseño de estructuras geotécnicas</li>
             </div>       
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />
              Servicion de gerenciamientos de obra
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{textAlign: 'left'}}>
              <Typography>
              Nuestra empresa posee vasta experiencia y un equipo de ingenieros y técnicos altamente calificados para controlar cualitativa y cuantitativamente la ejecución de la obra.
<br></br>
<br></br>
            <span style={{fontWeight: 'bold'}}>Nuestros servicios abarcan:</span>    
        <div style={{padding: '5px'}}>  
           <li>Gerenciamiento de Construcción</li>
           <li>Cronogramas preliminares y ejecutivos</li>
           <li>Gestión y Control Integral de Costos</li>
           <li>Compras Directas y Adquisiciones</li>
           <li>Gestión de Cambios</li>
           <li>Control de Proveedores</li>
           <li>Dirección de Obra</li>
           <li>Logística de Obra</li>
           <li>Acta de replanteo</li>
           <li>Libro de órdenes</li>
           <li>Certificado final de obra</li>
           <li>Libro de incidencias</li>
           <li>Control Preventivo (anticipación)</li>
           <li>Control de Calidad</li>
           <li>Seguridad e Higiene / SSHH / SHE</li>
        </div>
              </Typography>
              <Typography>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image29}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image30}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image31}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      height: "19rem",
                    }}
                    src={image32}
                  />
                </div>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />
              Servicios de topografia y agrimensura
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>

            <span style={{fontWeight: 'bold'}}>Nuestra empresa posee vasta experiencia y un equipo de ingenieros agrimensores  y técnicos altamente calificados para ofrecer los siguientes servicios:</span>    
        <br></br>
        <br></br>
        <div style={{padding: '5px'}}>   
            <li>Servicios de Topografía</li>
            <li>Mensuras</li>
            <li>Relevamientos y Replanteos para obras civiles, Viales,etc</li>
            <li> Mediciones Satelitales GPS/GNSS</li>
            <li> Inspección, Control y seguimientos de obra</li>
            <li> Cartografía de Curvas de Nivel</li>
            <li>Modelos Digitales de Terreno</li>
            <li>Relevamientos con Drone</li>
        </div> 

              </Typography>
          </AccordionDetails>
        </Accordion>
      
      </div>


 
      {/*  <div class="animate__animated animate__pulse nimate__delay-5s">
        <h1>
        Ofrecemos una amplia gama de servicios de asesoría. Kgori Punku Consultora SRL dispone
        de especialistas en los ámbitos físico, ecológico y económico que
        trabajan en:
        </h1>
        <br></br>
        <ul style={{textAlign: 'initial'}}>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Servicios y Asesoramientos Técnicos GeoMineros.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Aguas Subterráneas / Hidrogeología Minera (Litio/Potasio.)
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Aguas Superficiales. Geoquímica. Geomecánica de Rocas y de Suelos.
            Ingeniería de materiales de construcción y sus respectivos ensayos.
            Geofísica.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Estudios de Medio Ambiente. Evaluación de Impacto Social y
            Ambiental.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Salud y Seguridad - Higiene Industrial. Servicios de Evaluación de
            Reservas y Recursos Minerales.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Asesoría Legal. Servicios de Contratación y Construcción.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Energías Renovables.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Planificación / Diseño / Arquitectura Paisajística.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Urbanización y Reutilización de la Propiedad.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Remediación del Área de Proyecto.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Tratamiento de Aguas Residuales - Ingeniería de Procesos.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Consultoría para Due Diligence - Fusiones y Adquisiciones.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Gestión de Residuos.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Aire / Acústica / Ruido.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Análisis de Riesgo Ecológico y para la Salud.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Ciencias Biológicas.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Análisis de Peligrosidad Sísmica e Ingeniería Sísmica.
          </li>
          <li style={{width: '100%', marginBottom: '10px'}}>
            <CheckIcon />
            Tunelería.
          </li>
        </ul>
      </div> */}
    </>
  );
};

export const TextProyect = () => {
  return (
    <>
      <div class="animate__animated animate__pulse nimate__delay-5s mb-3 text-center">
        Kgori <span>Punku</span> consultora <span>SRL</span> posee profesionales
        que trabajan bajo la política de "Cero Accidentes", haciendo cumplir la
        normativa vigente de acuerdo al lugar de emplazamiento de cada proyecto.
        Desde el monitoreo constante de las tareas, charlas diarias y
        capacitaciones; junto a la preparación y respuesta ante emergencias como
        pilares fundamentales en la prevencion y minimización de perdidas.
        Nuestros Responsables y Técnicos conocen el Sistema de Gestión EHS (bajo
        Normas ISO 14001 y OSHSAS 18001) y lo aplican en cada uno de nuestros
        Proyectos.
      </div>
    </>
  );
};

export const TextConfianzaResponsibo = () => {
  const classes = useStyles();
  return (
    <>
       <div
        /* className={classes.root} */ style={{
          marginTop: "5px",
          marginBottom: "20px",
          display: "block",
          textAlign: "left",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
            
            
              <CheckIcon /> Dirección Técnica en proyecto Antofalla Norte, Salar de Antofalla, Pcia. de Catamarca. Cliente:
              <span style={{fontWeight: 'bold', marginLeft: '10px'}}>LEA-TRILA. Año 2022</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover',
                      marginTop: '20px',
                    }}
                    src={image33}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      marginTop: '20px',
                      objectFit: 'cover',
                    }}
                    src={image34}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      marginTop: '20px',
                      objectFit: 'cover',
                    }}
                    src={image35}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      marginTop: '20px',
                      objectFit: 'cover',
                    }}
                    src={image36}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Suelos para Futuro parque Solar Raigones-La Rioja-Año 2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image37}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                    }}
                    src={image38}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon /> Estudio de suelos para futuro proyecto de Obra Civil, Fundaciones: Proyecto para playa de Lixiviación n° 4 y Proyecto para instalación de filtro Prensa - Yacimientos Mineros de Agua de Dionisio - Dpto. Belen/Distrito Hualfín - Provincia de Catamarca. Cliente: YMAD. Año 2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image39}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image40}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image41}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image42}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon /> Estudio de Suelos - Proyecto Sal de Vida - Etapa 1 - Zona de Piletas de Evaporación (Halita y muriato) y Planta de Proceso - Área 4 - Salar del Hombre Muerto - Antofagasta de la sierra, Catamarca, Argentina. Cliente : Worley Argentina S.A. Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image43}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image44}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image45}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image46}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image47}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image48}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Prospección Geoeléctrica - Línea de Media Tensión y Planta Fotovoltaica. Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. CLiente: Galaxi Lithium (Sal de Vida) S.A. Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image49}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                    }}
                    src={image50}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
           <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Ensayos Químicos en Suelos: Contenido de Materia Orgánica y Agresivadad - Proyecto Sal de Vida Etapa 1, Área 4- Piletas de Evaporación y Planta de Proceso. Salar Del Hombre Muerto, Dpto. Antofagasta de la sierra, Provicnia de Catamarca. Cliente: Galaxy Lithium (sal de vida) S.A - Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image51}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudios de Suelos,p Proyecto de Readecuación de la Geometría de los Depósitos Existentes - C.Q. Planificacíon del recrecimiento del Depósito de Barro 02, Campo Quijano, Provincia de Salta: Cliente Borax Argentina. Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image52}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image53}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image54}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image55}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Proyecto Ejecutivo: Puente Sobre Río Santa María, Dpto. Santa María, Provincia de Catamarca. Cliente: Consejo Federal de Inversiones (CFI).-Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image56}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image57}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image58}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Muestreo de isotopía, Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Livent.-Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image59}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image60}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image61}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Fundación, Proyecto: Ampliación de Planta, Dpto. El Alto, Provincia de Catamarca. Cliente: Loma Negra – Intercement.-Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image62}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image63}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Caracterización del Cuerpo Receptor LOMA NEGRA, EL ALTO CATAMARCA. AÑO 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image64}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image65}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
            
            
            <CheckIcon />Gerenciamiento de Proyectos Ejecutivos: Puente Sobre Río Cura Quebrada y Puente Sobre Río El Bolsón, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Fideicomiso Minero, Salar del Hombre Muerto.-Año 2020-2021

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography >
              <div /* style={{ display: "grid" }} */>
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                    objectFit: 'cover'
                  }}
                  src={image66}
                />
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image67}
                />
                 <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image68}
                />
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image69}
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
               <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Gerenciamiento de Proyecto: Entrega de materiales para la repavimentación El Peñón- Antofagasta de La Sierra.Cliente: Fideicomiso Minero, Salar del Hombre Muerto - Año 2020-2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image69}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image70}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image71}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
            
            
            <CheckIcon />Estudio de Mecánica de Suelos – Nueva zona de Piletas de Evaporación-Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy.-Año 2018-2019

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
              <div /* style={{ display: "grid" }} */>
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                    objectFit: 'contain'
                  }}
                  src={image72}
                />
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image73}
                />
                 <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image74}
                />
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image75}
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio Geotécnico - Expansión de Planta de Cal. Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy. -Año 2018-2019
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image76}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Suelos para fundación – Proyecto Planta de Cal Móvil. Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy. -Año 2018-2019.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image78}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image79}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
            
            
            <CheckIcon /> Ensayos de Densidad sobre Muestras Extraídas de Cuttings de Perforación, Salar del hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Galaxy Lithium (Sal de Vida) S.A.-Año 2018.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
              <div /* style={{ display: "grid" }} */ >
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                    objectFit: 'cover'
                  }}
                  src={image80}
                />
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image81}
                />
                 <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image82}
                />
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image83}
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicio de Geólogos y Técnicos en Higiene y Seguridad Laboral para Campaña de Perforación. Salar del hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Galaxy Lithium (Sal de Vida) S.A.-Año 2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image84}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image85}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de No inundabilidad para Proyectos de Construcción. Cliente: 360 Energy. Año 2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image86}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image87}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
         <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicios Geológicos y de Seguridad en Campaña de Exploración con Diamantina, Salar de Incahuasi, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Argentina Litio y Energía S.A. (ALE).-Año 2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image88}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image89}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Supervisión de Sondajes con Diamantina, y Muestreo de Salmueras. Salar del Hombre Muerto Antofagasta de la Sierra. Cliente: Albemarle Argentina SRL.-Año 2017-2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image90}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image91}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Caracterización de variables para un mejor conocimiento del balance hídrico del Sistema Hídrico Subterránea - Salar de Olaroz, Provincia de Jujuy. Cliente: Sales de Jujuy.-Año 2017
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image92}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Caracterización de los Suelos de Nuevas Piletas en Construcción: 12A, 12C, 14A, 1AD, 20B, 20C, 20D, 20E, 23A y 23B. Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy.-Año 2017
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image93}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image94}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image95}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Supervisión de Sondajes con Diamantina, y Muestreo de Salmueras. Salar del Hombre Muerto Antofagasta de la Sierra. Cliente: Albemarle Argentina SRL.-Año 2017-2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image96}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image97}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de No inundabilidad para Proyectos de Construcción. Cliente: Sullair Argentina. Año 2017
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image98}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image99}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image100}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Auditoría Externa para YMAD en Complejo Minero Farallón Negro. Cliente: DIPGAM – Ministerio de Minería, Catamarca. Año 2017
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography >
                <div /* style={{ display: "grid" }} */ >
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image101}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image102}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Monitoreo de agua superficial, en el Proyecto 3 Quebradas, Departamento de Tinogasta, Provincia de Catamarca. Cliente: Liex S.A.Año 2017
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{margin: 'auto'}}>
              <div /* style={{ display: "grid" }} */ >
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                    objectFit: 'none'
                  }}
                  src={image103}
                />
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image104}
                />
                 <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                    objectFit: 'contain'
                  }}
                  src={image107}
                />
                <img
                  style={{
                    width: "100%",
                    marginTop: '20px',
                      objectFit: 'cover',
                    height: "19rem",
                  }}
                  src={image106}
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Relevamiento Geotécnico para la Construcción de Piletas de Evaporación en el Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Minera Santa Rita.-Año 2016
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image109}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image110}
                  />
                   <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image111}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Exploración Hidrogeológica en Salmueras de Litio en el Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Minera Santa Rita. Año 2016
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%"}}>
                <div /* style={{ display: "grid" }} */>
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image112}
                  />
                  <img
                    style={{
                      width: "100%",
                      marginTop: '20px',
                      objectFit: 'cover',
                      height: "19rem",
                    }}
                    src={image113}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export const TextConfianza = () => {
  const classes = useStyles();
  return (
    <>
      <div
        /* className={classes.root} */ style={{
          marginTop: "5px",
          marginBottom: "20px",
          display: "block",
          textAlign: "left",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
            
            
              <CheckIcon /> Dirección Técnica en proyecto Antofalla Norte, Salar de Antofalla, Pcia. de Catamarca. Cliente:
              <span style={{fontWeight: 'bold', marginLeft: '10px'}}>LEA-TRILA. Año 2022</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
                <div className={'grid grid-cols-2 gap-2 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image33}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image34}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image35}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image36}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Suelos para Futuro parque Solar Raigones-La Rioja-Año 2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image37}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                    }}
                    src={image38}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon /> Estudio de suelos para futuro proyecto de Obra Civil, Fundaciones: Proyecto para playa de Lixiviación n° 4 y Proyecto para instalación de filtro Prensa - Yacimientos Mineros de Agua de Dionisio - Dpto. Belen/Distrito Hualfín - Provincia de Catamarca. Cliente: YMAD. Año 2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image39}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image40}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image41}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image42}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon /> Estudio de Suelos - Proyecto Sal de Vida - Etapa 1 - Zona de Piletas de Evaporación (Halita y muriato) y Planta de Proceso - Área 4 - Salar del Hombre Muerto - Antofagasta de la sierra, Catamarca, Argentina. Cliente : Worley Argentina S.A. Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "80%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-3 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image43}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image44}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image45}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image46}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image47}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image48}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Prospección Geoeléctrica - Línea de Media Tensión y Planta Fotovoltaica. Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. CLiente: Galaxi Lithium (Sal de Vida) S.A. Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image49}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                    }}
                    src={image50}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
           <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Ensayos Químicos en Suelos: Contenido de Materia Orgánica y Agresivadad - Proyecto Sal de Vida Etapa 1, Área 4- Piletas de Evaporación y Planta de Proceso. Salar Del Hombre Muerto, Dpto. Antofagasta de la sierra, Provicnia de Catamarca. Cliente: Galaxy Lithium (sal de vida) S.A - Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image51}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudios de Suelos,p Proyecto de Readecuación de la Geometría de los Depósitos Existentes - C.Q. Planificacíon del recrecimiento del Depósito de Barro 02, Campo Quijano, Provincia de Salta: Cliente Borax Argentina. Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image52}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image53}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image54}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                    }}
                    src={image55}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Proyecto Ejecutivo: Puente Sobre Río Santa María, Dpto. Santa María, Provincia de Catamarca. Cliente: Consejo Federal de Inversiones (CFI).-Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-3 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image56}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image57}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image58}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Muestreo de isotopía, Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Livent.-Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-3 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image59}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image60}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image61}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Fundación, Proyecto: Ampliación de Planta, Dpto. El Alto, Provincia de Catamarca. Cliente: Loma Negra – Intercement.-Año 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image62}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image63}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Caracterización del Cuerpo Receptor LOMA NEGRA, EL ALTO CATAMARCA. AÑO 2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image64}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image65}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
            
            
            <CheckIcon />Gerenciamiento de Proyectos Ejecutivos: Puente Sobre Río Cura Quebrada y Puente Sobre Río El Bolsón, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Fideicomiso Minero, Salar del Hombre Muerto.-Año 2020-2021

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
              <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-4 m-auto'}>
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                    objectFit: 'cover'
                  }}
                  src={image66}
                />
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image67}
                />
                 <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image68}
                />
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image69}
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
               <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Gerenciamiento de Proyecto: Entrega de materiales para la repavimentación El Peñón- Antofagasta de La Sierra.Cliente: Fideicomiso Minero, Salar del Hombre Muerto - Año 2020-2021
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "90%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-3 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image70}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image71}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'fill'
                    }}
                    src={Imagen114}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
            
            
            <CheckIcon />Estudio de Mecánica de Suelos – Nueva zona de Piletas de Evaporación-Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy.-Año 2018-2019

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
              <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-4 m-auto'}>
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                    objectFit: 'contain'
                  }}
                  src={image72}
                />
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image73}
                />
                 <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image74}
                />
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image75}
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio Geotécnico - Expansión de Planta de Cal. Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy. -Año 2018-2019
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "90%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image76}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image77}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Suelos para fundación – Proyecto Planta de Cal Móvil. Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy. -Año 2018-2019.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image78}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image79}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
            
            
            <CheckIcon /> Ensayos de Densidad sobre Muestras Extraídas de Cuttings de Perforación, Salar del hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Galaxy Lithium (Sal de Vida) S.A.-Año 2018.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
              <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-4 m-auto'}>
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                    objectFit: 'cover'
                  }}
                  src={image80}
                />
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image81}
                />
                 <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image82}
                />
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image83}
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicio de Geólogos y Técnicos en Higiene y Seguridad Laboral para Campaña de Perforación. Salar del hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Galaxy Lithium (Sal de Vida) S.A.-Año 2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image84}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image85}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de No inundabilidad para Proyectos de Construcción. Cliente: 360 Energy. Año 2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image86}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image87}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
         <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Servicios Geológicos y de Seguridad en Campaña de Exploración con Diamantina, Salar de Incahuasi, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Argentina Litio y Energía S.A. (ALE).-Año 2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image88}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image89}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Supervisión de Sondajes con Diamantina, y Muestreo de Salmueras. Salar del Hombre Muerto Antofagasta de la Sierra. Cliente: Albemarle Argentina SRL.-Año 2017-2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image90}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image91}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Caracterización de variables para un mejor conocimiento del balance hídrico del Sistema Hídrico Subterránea - Salar de Olaroz, Provincia de Jujuy. Cliente: Sales de Jujuy.-Año 2017
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "90%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image92}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Caracterización de los Suelos de Nuevas Piletas en Construcción: 12A, 12C, 14A, 1AD, 20B, 20C, 20D, 20E, 23A y 23B. Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy.-Año 2017
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "90%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-3 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image93}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image94}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'cover'
                    }}
                    src={image95}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Supervisión de Sondajes con Diamantina, y Muestreo de Salmueras. Salar del Hombre Muerto Antofagasta de la Sierra. Cliente: Albemarle Argentina SRL.-Año 2017-2018
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'cover'
                    }}
                    src={image96}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image97}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de No inundabilidad para Proyectos de Construcción. Cliente: Sullair Argentina. Año 2017
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "90%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-3 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image98}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image99}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image100}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
             <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Auditoría Externa para YMAD en Complejo Minero Farallón Negro. Cliente: DIPGAM – Ministerio de Minería, Catamarca. Año 2017
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image101}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "23rem",
                      objectFit: 'contain'
                    }}
                    src={image102}
                  />
                </div>
              </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Monitoreo de agua superficial, en el Proyecto 3 Quebradas, Departamento de Tinogasta, Provincia de Catamarca. Cliente: Liex S.A.Año 2017
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "70%", display: 'flex', margin: 'auto'}}>
              <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-4 m-auto'}>
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                    objectFit: 'none'
                  }}
                  src={image103}
                />
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image104}
                />
                 <img
                  style={{
                    width: "100%",
                    height: "19rem",
                    objectFit: 'contain'
                  }}
                  src={image107}
                />
                <img
                  style={{
                    width: "100%",
                    height: "19rem",
                  }}
                  src={image106}
                />
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Relevamiento Geotécnico para la Construcción de Piletas de Evaporación en el Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Minera Santa Rita.-Año 2016
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "90%", display: 'flex', margin: 'auto'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-3 gap-4 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image109}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image110}
                  />
                   <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image111}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              <Typography className={classes.heading} style={{ color: "rgb(63, 81, 181)" }}>
              <CheckIcon />Estudio de Exploración Hidrogeológica en Salmueras de Litio en el Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Minera Santa Rita. Año 2016
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography style={{ width: "100%", display: 'flex'}}>
                <div /* style={{ display: "grid" }} */ className={'grid grid-cols-2 gap-8 m-auto'}>
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image112}
                  />
                  <img
                    style={{
                      width: "100%",
                      height: "19rem",
                      objectFit: 'contain'
                    }}
                    src={image113}
                  />
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
  /* return (
    <>
      <div class="animate__animated animate__pulse nimate__delay-5s mb-3 " style={{paddingTop: '10px'}}>
     <ul style={{paddingRight: "10%", paddingLeft: "10%", textAlign: 'initial'}}>   
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudio de Suelos para Futuro Proyecto de Obra Civil, Fundaciones: Proyecto para Playa de Lixiviación N° 4 y Proyecto para Instalación de Filtro Prensa - Yacimientos Mineros de Agua de Dionisio - Dpto. Belén/Distrito Hualfín - Provincia de Catamarca. Cliente: YMAD.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Informe Geotécnico: Estudio de Suelos - Proyecto Sal de Vida - Etapa 1 - Zona de Piletas de Evaporación (Halita y Muriato) y Planta de Proceso – Área 4 - Salar del Hombre Muerto-Antofagasta de la sierra, Catamarca, Argentina. Cliente: Worley Argentina S.A.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudios de Suelos, Proyecto de Readecuación de la Geometría de los Depósitos Existentes – C.Q. Planificación del Recrecimiento del Depósito de Barro 02, Campo Quijano, Provincia de Salta. Cliente: Borax Argentina.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Muestreo de isotopía, Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Livent.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon /></li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudio de Relevamiento Geotécnico para la Construcción de Piletas de Evaporación en el Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Minera Santa Rita.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudio de Exploración Hidrogeológica en Salmueras de Litio en el Salar del Hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Minera Santa Rita.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Caracterización de variables para un mejor conocimiento del balance hídrico del Sistema Hídrico Subterránea - Salar de Olaroz, Provincia de Jujuy. Cliente: Sales de Jujuy.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudio de Mecánica de Suelos – Nueva zona de Piletas de Evaporación-Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon /></li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudio de Suelos para fundación – Proyecto Planta de Cal Móvil. Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Caracterización de los Suelos de Nuevas Piletas en Construcción: 12A, 12C, 14A, 1AD, 20B, 20C, 20D, 20E, 23A y 23B. Salar de Olaroz, Dpto. Susques, Provincia de Jujuy. Cliente: Sales de Jujuy.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Ensayos de Densidad sobre Muestras Extraídas de Cuttings de Perforación, Salar del hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Galaxy Lithium (Sal de Vida) S.A.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Ensayos Químicos en Suelos: Contenido de Materia Orgánica y Agresividad - Proyecto Sal de Vida Etapa 1, Área 4 – Piletas de Evaporación y Planta de Proceso. Salar del hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Galaxy Lithium (Sal de Vida) S.A.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Servicio de Geólogos y Técnicos en Higiene y Seguridad Laboral para Campaña de Perforación. Salar del hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Galaxy Lithium (Sal de Vida) S.A.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Prospección Geoeléctrica - Línea de Media Tensión y Planta Fotovoltaica. Salar del hombre Muerto, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Galaxy Lithium (Sal de Vida) S.A.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Supervisión de Sondajes Rotary, Aire Reverso, Diamantina, Diseño de Pozos y Ensayos de Bombeos y Muestreo de Salmueras. Cliente: South American Salars – Advantage Lithium.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudio de No inundabilidad para Proyectos de Construcción. Cliente: Sullair Argentina.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Auditoría Externa para YMAD en Complejo Minero Farallón Negro. Cliente: DIPGAM – Ministerio de Minería, Catamarca.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudio de No inundabilidad para Proyectos de Construcción. Cliente: 360 Energy.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Supervisión de Sondajes con Diamantina, y Muestreo de Salmueras. Salar del Hombre Muerto Antofagasta de la Sierra. Cliente: Albemarle Argentina SRL.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Servicios Geológicos y de Seguridad en Campaña de Exploración con Diamantina, Salar de Incahuasi,  Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Argentina Litio y Energía S.A. (ALE).</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudio de Fundación, Proyecto: Ampliación de Planta, Dpto. El Alto, Provincia de Catamarca. Cliente: Loma Negra – Intercement.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Gerenciamiento de Proyectos Ejecutivos: Puente Sobre Río Cura Quebrada y Puente Sobre Río El Bolsón, Dpto. Antofagasta de la Sierra, Provincia de Catamarca. Cliente: Fideicomiso Minero, Salar del Hombre Muerto.</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Proyecto Ejecutivo: Puente Sobre Río Santa Marpia, Dpto. Santa María, Provincia de Catamarca. Cliente: Consejo Federal de Inversiones (CFI).</li>
      <br></br>
      <li style={{width: '70%', margin: 'auto'}}><CheckIcon />Estudios de Suelos, Proyecto de Readecuación de la Geometría de los Depósitos Existentes – C.Q. Planificación del Recrecimiento del Depósito de Barro 02, Campo Quijano, Provincia de Salta. Cliente: Borax Argentina.</li>
      <br></br>
      <li  style={{width: '70%', margin: 'auto'}}><CheckIcon />Dirección Técnica en Proyecto Antofalla Norte, Salar de Antofalla, Pcia. de Catamarca. Cliente: LEA – TRILA.</li>
      <br></br>
      <li  style={{width: '70%', margin: 'auto'}}><CheckIcon />Elaboración de Cartografía de Departamento El Alto, Pcia. de Catamarca. Cliente: CFI.</li>
      </ul>
      </div>
    </>
  ); */
};
