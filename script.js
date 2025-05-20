function obtenerNumero() {
    return parseInt(document.getElementById("numero").value);
  }
  
  function mostrarResultado(texto) {
    document.getElementById("resultado").innerText = texto;
  }
  
  function calcularDoble() {
    const num = obtenerNumero();
    if (isNaN(num)) {
      mostrarResultado("Por favor, ingresa un número válido.");
      return;
    }
    mostrarResultado(` El doble de ${num} es ${num * 2}`);
  }
  
  function calcularFactorial() {
    const num = obtenerNumero();
    if (isNaN(num) || num < 0) {
      mostrarResultado(" Ingrese un número entero positivo.");
      return;
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    mostrarResultado(` El factorial de ${num} es ${factorial}`);
  }
  
  function esPrimo() {
    const num = obtenerNumero();
    if (isNaN(num) || num < 2) {
      mostrarResultado( "El número no es primo.");
      return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        mostrarResultado(` ${num} no es primo.`);
        return;
      }
    }
    mostrarResultado(` ${num} es primo.`);
  }
  