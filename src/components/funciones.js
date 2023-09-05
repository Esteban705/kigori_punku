import $ from "jquery";
export const enviarCorreo = () => {
  ocultarAlerta();

  var nombre = $("#nombre").val();
  var telefono = $("#telefono").val();
  var correo = $("#correo").val();
  var mensaje = $("#mensaje").val();
  var valido = 1;
  var validacion_correo =
    /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

  if (nombre.length <= 2) {
    $(".alerta_nombre").css("display", "block");
    valido = 0;
  }

  if (telefono.length <= 6) {
    $(".alerta_telefono").css("display", "block");
    valido = 0;
  }

  if (!validacion_correo.test(correo)) {
    //personalizo alertas
    $(".alerta_correo").css("display", "block");
    valido = 0;
  }

  if (mensaje.length <= 5) {
    $(".alerta_mensaje").css("display", "block");
    valido = 0;
  }

  if (valido == 1) {
    var datos =
      "&nombre=" +
      nombre +
      "&telefono=" +
      telefono +
      "&correo=" +
      correo +
      "&mensaje=" +
      mensaje;
    $.ajax({
      type: "POST",
      url: "enviar.php",
      data: datos,
      /* success: function(res) {
            
                if(parseInt(res)== 1){
                    $('.alerta_correcto').css('display','block');
                    limpiarCampos();
                }else {
                    $('.alerta_incorrecto').css('display','block');
                }
 
			}, */
      error: function (res) {
        $(".alerta_incorrecto").css("display", "block");
      },
    });
  }
};

const ocultarAlerta = () => {
  $(".alerta_nombre").css("display", "none");
  $(".alerta_telefono").css("display", "none");
  $(".alerta_correo").css("display", "none");
  $(".alerta_mensaje").css("display", "none");
  $(".alerta_correcto").css("display", "none");
  $(".alerta_incorrecto").css("display", "none");
};

const limpiarCampos = () => {
  $("#nombre").val("");
  $("#telefono").val("");
  $("#correo").val("");
  $("#mensaje").val("");
};
