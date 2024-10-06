import {validarClave} from './validarClave';


describe("validarClave", () => {

  it.each([
       ['noe', 'claveenminuscu***',false],  //no tiene mayusculas
       ['noe', 'HOLAMUNDO*123',false],  //no tiene minusculas
       ['noe123', 'C198*',false], // falla longitud
       ['noe123', 'noe123',false], //no tiene simbolos
       ['noe123', 'Iloveyou123',false], //tiene palabra comun, pero lanza false antes por que no tiene caracteres
       ['noe123', 'Clave198*',true],   
  ])("Usuario:%s y password %s es válida: %s", (usuario,clave, resultadoEsperado) => {


    const resultado=validarClave(usuario,clave);
 
    expect(resultado.esValida).toBe(resultadoEsperado);   
  });
});
