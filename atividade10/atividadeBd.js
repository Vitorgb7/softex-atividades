function conectarBancoDeDados() {
    // simulação de código de conexão
    console.log('Conexão com o banco de dados bem-sucedida!');
    return true; 
  }
  
  function executarOperacoes() {
    console.log('Executando operações no banco de dados...');
  }
  
  function desconectarBancoDeDados() {

    console.log('Desconectado do banco de dados.');
  }
  
  // Tentar conectar
  if (conectarBancoDeDados()) {

    executarOperacoes();
  } else {
    console.error('Falha ao conectar ao banco de dados.');
  }
  
  // simular desconexão
  desconectarBancoDeDados();
  