const BotaoDeletar = () => {
  const botaoDeletar = document.createElement('button');
  botaoDeletar.innerText = 'deletar';

  botaoDeletar.addEventListener('click', deletarTarefa);

  return botaoDeletar;
};

const deletarTarefa = (event) => {
  const botaoConcluir = event.target;
  const tarefa = botaoConcluir.parentElement;

  tarefa.remove();
};

export default BotaoDeletar;