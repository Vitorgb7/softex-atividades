class Computador {
    constructor(modelo, processador, ram) {
      this.modelo = modelo;
      this.processador = processador;
      this.ram = ram;
      this.ligado = false;
    }
  
    ligar() {
      this.ligado = true;
      console.log(`${this.modelo} está ligado.`);
    }
  
    desligar() {
      this.ligado = false;
      console.log(`${this.modelo} está desligado.`);
    }
  
    realizarCalculo(matematica) {
      console.log(`${this.modelo} está realizando o cálculo: ${matematica}`);
    }
  }
  
  class Cadeira {
    constructor(material, cor, giratoria) {
      this.material = material;
      this.cor = cor;
      this.giratoria = giratoria;
    }
  
    ajustarAltura(altura) {
      console.log(`Ajustando a altura da cadeira para ${altura} cm.`);
    }
  
    girar() {
      if (this.giratoria) {
        console.log('A cadeira está girando.');
      } else {
        console.log('Esta cadeira não é giratória.');
      }
    }
  
    pintarNovaCor(novaCor) {
      this.cor = novaCor;
      console.log(`A cadeira agora é da cor ${novaCor}.`);
    }
  }
  
  class Livro {
    constructor(titulo, autor, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
      this.aberto = false;
    }
  
    abrir() {
      this.aberto = true;
      console.log(`"${this.titulo}" está aberto.`);
    }
  
    fechar() {
      this.aberto = false;
      console.log(`"${this.titulo}" está fechado.`);
    }
  
    ler() {
      console.log(`Lendo "${this.titulo}" de ${this.autor}.`);
    }
  }
  
  class Pensamento {
    constructor(autor, ideiaCentral) {
      this.autor = autor;
      this.ideiaCentral = ideiaCentral;
    }
  
    // Métodos
    expressarIdeia() {
      console.log(`"${this.ideiaCentral}" - ${this.autor}`);
    }
  
    refletir() {
      console.log(`Refletindo sobre a ideia de ${this.autor}.`);
    }
  
    questionar() {
      console.log(`Questionando a ideia de ${this.autor}.`);
    }
  }
  
  const meuComputador = new Computador("Dell Inspiron", "Intel i5", "8GB");
  meuComputador.ligar();
  meuComputador.realizarCalculo("2 + 2");
  meuComputador.desligar();
  
  const minhaCadeira = new Cadeira("Metal", "Preto", true);
  minhaCadeira.ajustarAltura(90);
  minhaCadeira.girar();
  minhaCadeira.pintarNovaCor("Azul");
  
  const meuLivro = new Livro("A Guerra dos Tronos", "George R. R. Martin", "Fantasia");
  meuLivro.abrir();
  meuLivro.ler();
  meuLivro.fechar();
  
  const meuPensamento = new Pensamento("Albert Einstein", "A imaginação é mais importante que o conhecimento.");
  meuPensamento.expressarIdeia();
  meuPensamento.refletir();
  meuPensamento.questionar();
  