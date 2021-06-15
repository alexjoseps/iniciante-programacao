const BotaoConcluir = () => {
  const botaoConcluir = document.createElement('button');
  botaoConcluir.classList.add('check-button');
  botaoConcluir.innerText = 'concluir';

  botaoConcluir.addEventListener('click', concluirTarefa)

  return botaoConcluir;
};

const concluirTarefa = (event) => {
  const botaoConcluir = event.target;
  const tarefa = botaoConcluir.parentElement;

  tarefa.classList.toggle('done');
};

export default BotaoConcluir;