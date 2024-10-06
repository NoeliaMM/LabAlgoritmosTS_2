import{tieneCaracteresEspeciales,tieneLongitudMinima,tieneMayusculasYMinusculas,tieneNombreUsuario,tieneNumeros,tienePalabrasComunes} from './validarClave.helper';
import{ValidacionClave} from './model';



export const validarClave = (nombreUsuario: string, clave: string): ValidacionClave => {
    let resultadoValidar:ValidacionClave = {
      esValida:true,
      error:undefined
    }
  
    resultadoValidar = tieneMayusculasYMinusculas(clave);
    if (!resultadoValidar.esValida) return resultadoValidar;

    resultadoValidar = tieneNumeros(clave);
    if (!resultadoValidar.esValida) return resultadoValidar;

    resultadoValidar = tieneCaracteresEspeciales(clave);
    if (!resultadoValidar.esValida) return resultadoValidar;

    resultadoValidar = tieneLongitudMinima(clave);
    if (!resultadoValidar.esValida) return resultadoValidar;

    resultadoValidar = tieneNombreUsuario(nombreUsuario, clave);
    if (!resultadoValidar.esValida) return resultadoValidar;

    resultadoValidar = tienePalabrasComunes(clave);
    if (!resultadoValidar.esValida) return resultadoValidar;
    
    return resultadoValidar;
  
  };

  console.log(validarClave('noe123', 'Iloveyou123'));