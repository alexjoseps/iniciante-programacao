const botaoNovaTarefa = document.querySelector('[data-form-button]');

const adicionarNovaTarefa = (event) => {
  event.preventDefault();
  const inputNovaTarefa = document.querySelector('[data-form-input]');
  const conteudo = inputNovaTarefa.value;
  console.log(conteudo);
  inputNovaTarefa.value = "";
};

botaoNovaTarefa.addEventListener('click', adicionarNovaTarefa);