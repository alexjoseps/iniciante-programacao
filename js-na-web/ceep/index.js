import BotaoConcluir from './components/concluirTarefa.js'
import BotaoDeletar from './components/deletarTarefa.js'

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
  tarefa.appendChild(BotaoDeletar());

  listaTarefas.appendChild(tarefa);

  inputNovaTarefa.value = "";
};

botaoNovaTarefa.addEventListener('click', adicionarNovaTarefa);