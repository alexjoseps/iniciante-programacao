(() => {
  const botaoNovaTarefa = document.querySelector('[data-form-button]');

  const adicionarNovaTarefa = (event) => {
    event.preventDefault();

    const inputNovaTarefa = document.querySelector('[data-form-input]');
    const inputConteudo = inputNovaTarefa.value;

    const listaTarefas = document.querySelector('[data-task-list]');
    const tarefa = document.createElement('li');
    const conteudoTarefa = `<p class="content">${inputConteudo}</p>`;
    tarefa.classList.add('task');
    tarefa.innerHTML = conteudoTarefa;
    tarefa.appendChild(BotaoConcluir());

    listaTarefas.appendChild(tarefa);

    inputNovaTarefa.value = "";
  };

  botaoNovaTarefa.addEventListener('click', adicionarNovaTarefa);

  const BotaoConcluir = () => {
    const botaoConcluir = document.createElement('button');
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'concluir';

    botaoConcluir.addEventListener('click', concluirTarefa)

    return botaoConcluir;
  }

  const concluirTarefa = (event) => {
    const botaoConcluir = event.target;
    const tarefa = botaoConcluir.parentElement;

    tarefa.classList.toggle('done');
  }
})()