import {tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes} from './validarClave.helper';


describe("tieneMayusculasYMinusculas", () => {

  it.each([
    ['yuyuyu', false],  
    ['Ohjhhjh', true],    
    ['UIYJADHFJ', false],     
  ])("La password %s contiene mayúsculas y minúsculas: %s", (clave, resultadoEsperado) => {

    // Act
    const resultado = tieneMayusculasYMinusculas(clave);

    // Assert
    expect(resultado.esValida).toBe(resultadoEsperado);
  });
});

describe("tieneNumeros", () => {

  it.each([
    ['jfdk6', true],  
    ['678', true],  
    ['jjj', false],   
  ])("La password %s contiene números: %s", (clave, resultadoEsperado) => {

    // Act
    const resultado = tieneNumeros(clave);

    // Assert
    expect(resultado.esValida).toBe(resultadoEsperado);
  });  
});

describe("tieneCaracteresEspeciales", () => {

  it.each([
    ['hola*', true],  
    ['++hola)', true],  
    ['jjj', false],   
  ])("La password %s contiene caractéres especiales: %s", (clave, resultadoEsperado) => {

    // Act
    const resultado = tieneCaracteresEspeciales(clave);

    // Assert
    expect(resultado.esValida).toBe(resultadoEsperado);
  });  
});

describe("tieneLongitudMinima", () => {

  it.each([
    ['hola*', false],  
    ['8489hfdjfhhj', true],  
    ['', false],   
  ])("La password %s tiene mínimo 8 caracteres: %s", (clave, resultadoEsperado) => {

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
    expect(resultado.esValida).toBe(resultadoEsperado);
  });
});

describe("tieneNombreUsuario", () => {

  it.each([
    ['juan','holaJuan*', false],  
    ['juan','8489hfdjfhhj', true],  
    ['Maria','12maria', false],   
  ])("El nombre de usuario %s está contenido en %s: %s", (nombre, clave, resultadoEsperado) => {

    // Act
    const resultado = tieneNombreUsuario(nombre,clave);

    // Assert
    expect(resultado.esValida).toBe(resultadoEsperado);
  });
});

describe("tienePalabrasComunes", () => {

  it.each([
    ['monkey', true],  
    ['juan', false],  
    ['Maria', false],   
  ])("La clave %s es una palabra común: %s", (clave, resultadoEsperado) => {

    // Act
    const resultado = tienePalabrasComunes(clave);

    // Assert
    expect(resultado.esValida).toBe(resultadoEsperado);
  });
});
