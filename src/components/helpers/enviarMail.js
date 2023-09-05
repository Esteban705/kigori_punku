import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import $ from 'jquery';





export const enviarMail = async () => {

  ocultarAlerta();

  var nombre=$("#nombre").val();
  var telefono =$("#telefono").val();
  var correo=$("#correo").val();
  var mensaje =$("#mensaje").val();
  var valido = 1;
  var validacion_correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;


  if(nombre.length <= 2){
      $(".alerta_nombre").css('display','block');
      valido = 0;
  }

  if(telefono.length <= 6){
      $(".alerta_telefono").css('display','block');
      valido = 0;
  }

  if(!validacion_correo.test(correo)){
      //personalizo alertas
      $(".alerta_correo").css('display','block');
      valido = 0;
  }


  if(mensaje.length <= 5){
      $(".alerta_mensaje").css('display','block');
      valido = 0;
  }

  if(valido == 1){
      var datos = {nombre,telefono, correo, correo, mensaje};
      sendMail(datos)
  }

}



const ocultarAlerta = () => {
  $(".alerta_nombre").css('display','none');
  $(".alerta_telefono").css('display','none');
  $(".alerta_correo").css('display','none');
  $(".alerta_mensaje").css('display','none');
  $('.alerta_correcto').css('display','none');
  $('.alerta_incorrecto').css('display','none');

}

const limpiarCampos = () =>{
  $('#nombre').val("");
  $('#telefono').val("");
  $('#correo').val("");
  $('#mensaje').val("")
}









export const sendMail = (datos) => {
  
  const publicKey = "1CNNa2WHFfPOemQu5"

  const templateParams = {
  user_email: datos.correo,
  to_name: datos.nombre,
  from_name: datos.correo,
  message: datos.mensaje,
  user_name: datos.telefono,
  }
  
      emailjs.send("service_ybcl636","template_4c7m3sl", templateParams, publicKey)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         $('.alerta_correcto').css('display','block');
                    limpiarCampos();
      }, function(error) {
        $('.alerta_incorrecto').css('display','block');
         console.log('FAILED...', error);
      });
    

        /*   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
              console.log('FAILED...', error);
            }); */
}


export default enviarMail