import{ValidacionClave,_ESPECIALES,_PALABRAS_COMUNES} from './model';

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  
  let tieneMayusculas: boolean  = clave.split('').some(caracter => (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()));
  let tieneMinusculas: boolean = clave.split('').some(caracter => (caracter === caracter.toLowerCase() && caracter !== caracter.toUpperCase()));
  let tieneMayusculaYMinusculas :boolean = tieneMayusculas && tieneMinusculas;   
  
    const resultado={
        esValida:tieneMayusculaYMinusculas,
        error: !tieneMayusculaYMinusculas ? 'La clave debe de tener mayúsculas y minúsculas':undefined
    } 
    return resultado;
  };
  
//   La clave debe de tener números.
  export const tieneNumeros = (clave: string): ValidacionClave => {
    let tieneNumeros:boolean=clave.split('').some(caracter =>!isNaN(Number(caracter)));
     const resultado={
      esValida:tieneNumeros,
      error: !tieneNumeros ? 'La clave debe de tener números':undefined
  } 
  return resultado;
  };


//   La clave debe de tener caracteres especiales (@,#,+, _, ...)
 export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    let tieneCaracteresEspeciales:boolean = clave.split('').some(caracter => _ESPECIALES.includes(caracter));

    const resultado={
      esValida: tieneCaracteresEspeciales,
      error: !tieneCaracteresEspeciales ? 'La clave debe de tener caracteres especiales':undefined
    } 
  return resultado;   
  };

//   La clave debe de tener una longitud mínima de 8 caracteres.
  export const tieneLongitudMinima = (clave: string): ValidacionClave => {
    const tieneLongitudMin =  clave.length >= 8;
    const resultado={
      esValida:tieneLongitudMin,
      error: !tieneLongitudMin ? 'La clave debe de tener una longitud mínima de 8 caracteres':undefined
    } 
  return resultado; 
  };

//   La clave no debe tener el nombre del usuario.
  export const tieneNombreUsuario = (nombreUsuario: string, clave: string): ValidacionClave => {
    const contieneNombreUsuario :boolean = clave.toLowerCase().includes(nombreUsuario.toLowerCase());
    const resultado={
      esValida: !contieneNombreUsuario,
      error: contieneNombreUsuario ? 'La clave no debe tener el nombre del usuario':undefined
    } 
  return resultado; 
  };

//   La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
 export const tienePalabrasComunes = (clave: string): ValidacionClave => {
   
     const contienePalabrasComunes = _PALABRAS_COMUNES.find(palabra => palabra.toLowerCase().includes(clave.toLowerCase()));

      const resultado={
        esValida: !contienePalabrasComunes,
        error: contienePalabrasComunes ? 'La clave no debe de contener palabras comunes':undefined
      } 
    return resultado; 
    };

 
  