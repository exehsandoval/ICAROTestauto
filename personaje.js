class [Personaje] {
  constructor(salud) {
    this.salud = salud;
  }

  entrenar() {
    // Método abstracto, implementado en las clases hijas
  }

  getSalud() {
    return this.salud;
  }

  setSalud(salud) {
    this.salud = salud;
  }
}

class [Espadachin] extends [Personaje] {
  constructor(salud, ataque) {
    super(salud);
    this.ataque = ataque;
  }

  entrenar() {
    this.ataque += 10;
  }

  getAtaque() {
    return this.ataque;
  }

  setAtaque(ataque) {
    this.ataque = ataque;
  }
}
class [Torre] extends [Personaje] {
  constructor(salud, nivel) {
    super(salud);
    this.nivel = nivel;
  }

  entrenar() {
    this.nivel++;
  }

  getNivel() {
    return this.nivel;
  }

  setNivel(nivel) {
    this.nivel = nivel;
  }
}

class [Mago] extends [Personaje] {
  constructor(salud, magia) {
    super(salud);
    this.magia = magia;
  }

  entrenar() {
    // No sucede nada
  }

  getMagia() {
    return this.magia;
  }

  setMagia(magia) {
    this.magia = magia;
  }
}

// En este código, se definen las clases Personaje, Espadachin, Torre y Mago.

//La clase Personaje es la clase base que tiene el atributo salud y el método entrenar(). Este método es abstracto y se implementa en las clases hijas.

//La clase Espadachin extiende de Personaje y agrega el atributo ataque. Cuando un espadachín entrena, su atributo ataque se incrementa en 10.

//La clase Torre también extiende de Personaje y tiene el atributo nivel. Cuando una torre entrena, su atributo nivel se aumenta en 1.

//La clase Mago también extiende de Personaje y tiene el atributo magia. Los magos son vagos, por lo que cuando entrenan, no sucede nada.

//Todas las clases tienen sus constructores correspondientes y los métodos getter y setter para acceder a los atributos.