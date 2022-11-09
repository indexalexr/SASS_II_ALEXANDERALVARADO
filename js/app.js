alert('Bienvenido a Axs+, por favor inicie sesion');
alert('Vamos a registrarnos');
let usuario = prompt('Crea un nombre de usuario de al menos 6 digitos');
while (6 > usuario.length) {
  alert('El nombre de usuario no puede contener menos de 6 digitos')
  usuario = prompt('Crea un nombre de usuario de al menos 6 digitos')
}
let contrasenia = prompt('Crea tu contraseña de al menos 8 digitos');
while (8 > contrasenia.length) {
  alert('La contraseña no cumple con los requisitos minimos de seguridad')
  contrasenia = prompt('Crea una contraseña de al menos 8 digitos')
}
  alert('Corremos a iniciar sesion');

let comparaUsuario = prompt('Ingrese su nombre de usuario');
while (usuario !== comparaUsuario) {
  alert('El nombre de usuario no existe, o no se ha ingresado correctamente');
  comparaUsuario = prompt('Ingrese su nombre de usuario');
}
let comparaContrasenia = prompt('Ingrese su contraseña');

while (contrasenia !== comparaContrasenia) {
  alert('La contraseña ingresada es incorrecta, vuelva a intentarlo');
  comparaContrasenia = prompt('Ingrese su contraseña nuevamente');
}

alert('Bienvenido'+ ' ' + usuario);

const caracteristicas = (buzo,remera,pantalon,medias,zapato, precio) => {
  return `El conjunto que usted selecciono contiene .
       Un ${buzo} sumado.
       Con una remera ${remera}.
       puesto con un pantalon ${pantalon}.
       en interior de medias ${medias}.
       y zapatos ${zapato}  ...
       con un total de $ ${precio}`
};

let  eleccionCategoria = prompt('Que tipo de Conjunto Buscas? runner, casual, bunny').toLowerCase();

switch (eleccionCategoria) {
    case "runner":
      alert(caracteristicas('skaz', 'circlu', 'Negro', 'f50', 'frezon', '64.320'));
      break;
  
    case "casual" :
      alert(caracteristicas('flot', 'blackall', 'Blanco', 'adidas star', 'predator', '97.060' ));
      break;

    case "bunny":
      alert(caracteristicas('plem','hite','Azul','badbunny','Forum','120.000'));
      break;

    default:
      while(eleccionCategoria !== "runner" && eleccionCategoria !== "casual" && eleccionCategoria !== "bunny" ){
        alert('La opcion ingresada no es correcta')
        eleccionCategoria = prompt('Que tipo de conjunto buscas? runner, casual, bunny').toLowerCase();
      }
      break;
  };

let comprar = prompt('Desea comprar este conjunto. Responda por si o no?').toLowerCase();

  switch (comprar) {
    case "si":
      alert("Sera redirigido a la parte de pagos");
   

  const datosTransferencia = (razonSocial, cbu, alias, cuit, banco, nroDeCuenta) => {
    return (`Para ${razonSocial}.
      Cbu ${cbu}.
      Cuit ${cuit}.
      Alias ${alias}.
      Banco ${banco}.
      Nro de cuenta ${nroDeCuenta}.`
    )
  }

  let pago = prompt('Elija la forma de pago \n 1 - Tarjeta de credito,\n 2 - Efectivo \n 3 - Transferencia').toLowerCase();

  switch (pago) {
    case "1":
      alert("Estas son las opciones!");
      const promociones = [
        {
          promocion: 'Tarjeta de credito',
          cuotas: '1',
          interes: '0%'
        },
        {
          promocion: 'Tarjeta de credito',
          cuotas: '3',
          interes: '10%'
        },
        {
          promocion: 'Tarjeta de credito',
          cuotas: '6',
          interes: '20%'
        },
        {
          promocion: 'Tarjeta de credito',
          cuotas: '12',
          interes: '35%'
        }
      ]

      promociones.map( (promocion) => {
        return alert('Pago con ' + promocion.promocion + ':' + ' ' + 'en' + ' ' + promocion.cuotas + ' ' + 'cuotas, con un interes del ' + promocion.interes)
      } )

    let cantidadCuotas = prompt ('Va a pagar en 1, 3, 6 o 12 cuotas?')
    alert('Usted eligio pagar en ' + cantidadCuotas + ' ' + 'cuotas' )

    let nro = Number (prompt ('Ingrese su nro de tarjeta'))
    let nombre = prompt('Ingrese Nombre y Apellido del titular')
    let venc = prompt('Ingrese el vencimiento')
    let codSeg = Number (prompt ('Ingrese el codigo de 3 digitos que se encuentra en el reverso de la tarjeta'))
      
    const datosTarjeta = (nro, titular, vencimiento, cvc) => {
      return(
        `Nro de tarjeta ${nro}.
        Titular ${titular}.
        Vencimiento ${vencimiento}.
        codSeguridad ${cvc}.`
      )
      }
    
    alert(datosTarjeta(nro, nombre, venc, codSeg))  
    alert('La compra se ha realizado con éxito')
      break;

    case "2":
      alert("Le enviaremos un nro de compra para que al retirar la pc, pueda pagar en el local. Valido solo por 24hs");
      break;  

    case "3":
      alert(datosTransferencia(' Axs plus', '235467838393050665432', 'axs.plus.ar', '20959238112', 'Pampa ', '6789000000042349682', ));
      
      break;   

    default :
      while(pago !== "tarjeta de credito" && pago !=="efectivo" && pago!=="transferencia") {
        alert ('La opcion ingresada no es correcta');
        pago = prompt('Va a pagar con tarjeta de credito, efectivo o transferencia?').toLowerCase();
      }
      break;
  }
  break;

  case "no":
    alert("Que lastima, esperamos que cambie de opinion");
    break;  

  default :
    while(comprar !== "si" && comprar !=="no") {
      alert ('La opcion ingresada no es correcta')
      comprar = prompt('Desea comprar este conjunto. Responda por si o no?').toLowerCase();
    }
    break;
}
