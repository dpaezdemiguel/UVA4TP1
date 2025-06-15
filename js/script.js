const chistes = [
    { pregunta: "¿Por qué el tomate se puso rojo?", respuesta: "Porque vió al pepino sin ropa" },
    { pregunta: "¿Qué hace un jardinero en el gimnasio?", respuesta: "¡Planta cara!" },
    { pregunta: "¿Por qué el libro de matemáticas estaba triste?", respuesta: "Porque tenía demasiados problemas" },
    { pregunta: "¿Qué le dijo un semáforo a otro?", respuesta: "No me mires, ¡me estoy cambiando!" },
    { pregunta: "¿Cómo se despiden los químicos?", respuesta: "Ácido un placer" },
    { pregunta: "¿Qué hace un león en una biblioteca?", respuesta: "¡Busca libros rugidosamente buenos!" },
    { pregunta: "¿Por qué el café fue al psicólogo?", respuesta: "Porque se sentía expreso" },
    { pregunta: "¿Qué hace una impresora en una fiesta?", respuesta: "¡Saca copias!" },
    { pregunta: "¿Por qué el reloj fue expulsado de la escuela?", respuesta: "Porque siempre estaba marcando el paso" },
    { pregunta: "¿Qué hace una vaca cuando sale el sol?", respuesta: "Sombra." }
  ];
  
  let indice = 0;
  
  function mostrarChiste() {
    const contenedor = document.getElementById("chisteActual");
    contenedor.innerHTML = `<p>Cargando chiste...</p>`;
    setTimeout(() => {
      const chiste = chistes[indice];
      contenedor.innerHTML = `
        <p class="pregunta">${chiste.pregunta}</p>
        <p class="respuesta">${chiste.respuesta}</p>
      `;
    }, 100); // pequeño retraso para simular carga
  }
  
  function siguienteChiste() {
    indice = (indice + 1) % chistes.length;
    mostrarChiste();
  }
  
  function anteriorChiste() {
    indice = (indice - 1 + chistes.length) % chistes.length;
    mostrarChiste();
  }
  
  window.onload = mostrarChiste;
  
  // Accesibilidad: soporte para teclado
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") siguienteChiste();
    if (e.key === "ArrowLeft") anteriorChiste();
  });
  