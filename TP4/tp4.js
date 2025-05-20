let mascotas = [
  { nombre: "Luna", descripción: "Perra batata", edad: "2 años", tamaño: "Mediano", foto: "img/luna.jpg" },
  { nombre: "Max", descripción: "Golden Retriever", edad: "1 año", tamaño: "Grande", foto: "img/max.jpg" },
  { nombre: "Mía", descripción: "Gata naranja y negra", edad: "3 años", tamaño: "Pequeño", foto: "img/mia.jpg" },
  { nombre: "Coco", descripción: "Perrito negro", edad: "5 años", tamaño: "Mediano", foto: "img/coco.jpg" },
  { nombre: "Simba", descripción: "Gato amarillo", edad: "4 años", tamaño: "Grande", foto: "img/simba.jpg" },
  { nombre: "Nala", descripción: "Gata blanca", edad: "6 meses", tamaño: "Pequeño", foto: "img/nala.jpg" },
  { nombre: "Toby", descripción: "Perrito blanco", edad: "7 años", tamaño: "pequeño", foto: "img/toby.jpg" },
  { nombre: "Lola", descripción: "Mestiza",edad: "2 años", tamaño: "Pequeño", foto: "img/lola.jpg" },
  { nombre: "Firulais", descripción: "Perro mediano", edad: "4 años", tamaño: "Mediano", foto: "img/firulais.jpg" }
];


let contenedor = document.getElementById("contenedor-mascotas");

mascotas.map(mascota => {
  let div = document.createElement("div");
  div.className = "mascota";

  div.innerHTML = `
    <img src="${mascota.foto}" alt="${mascota.nombre}" />
    <h3>${mascota.nombre}</h3>
    <p><strong>descripción:</strong> ${mascota.descripción}</p>
    <p><strong>Edad:</strong> ${mascota.edad}</p>
    <p><strong>Tamaño:</strong> ${mascota.tamaño}</p>
     <button class="btn-adoptar">Adoptar</button>
  `;
  let boton = div.querySelector(".btn-adoptar");
    boton.addEventListener("click", () => {
      alert(`¡Gracias por querer adoptar a ${mascota.nombre}! Nos pondremos en contacto contigo pronto 🐾`);
    });
  contenedor.appendChild(div);
});
