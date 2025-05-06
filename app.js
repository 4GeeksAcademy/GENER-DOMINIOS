let pronombres = ['mi', 'tu', 'nuestra'];
let adjetivos = ['rápido', 'fiel', 'pequeño'];
let sustantivos = ['perro', 'gato', 'pájaro'];
let extensiones = ['.com', '.es', '.net'];

for (let pronombre of pronombres) {
  for (let adjetivo of adjetivos) {
    for (let sustantivo of sustantivos) {
      for (let extension of extensiones) {
        console.log(pronombre + adjetivo + sustantivo + extension);
      }
    }
  }
}

