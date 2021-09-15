import React from "react";
import "./TarefaAdd.scss";
import { Api } from "../../api/api";

const TarefaAdd = (props) => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descrição = evento.target.descrição.value;
    const prioridade = evento.target.prioridade.value;
    const status = evento.target.status.value;
    const prazo = evento.target.prazo.value;
    const Tarefa = {
      titulo: titulo,
      descrição: descrição,
      prioridade: prioridade,
      status: status,
      prazo: prazo,
    };

    try {
      const response = await Api.fetchPost(Tarefa);
      const data = await response;
      console.log(data);
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="add">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Titulo:</label>
          <input type="text" id="titulo" name="titulo" />
        </div>
        <div>
          <label htmlFor="descrição">Descrição:</label>
          <input type="text" id="descrição" name="descrição" />
        </div>

        <div>
          <fieldset htmlFor="prioridade">
            <legend id="prioridade" name="prioridade">
              Prioridade:
            </legend>
            <select htmlFor="prioridade" id="prioridade" name="prioridade">
              <option value="Baixa">Baixa</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </fieldset>
        </div>
        <div>
          <fieldset htmlFor="status">
            <legend>Status:</legend>
            <select htmlFor="status" id="status" name="status">
              <option value="Fazer">Fazer</option>
              <option value="Fazendo">Fazendo</option>
              <option value="Feito">Feito</option>
            </select>
          </fieldset>
        </div>

        <div>
          <label htmlFor="prazo">Prazo</label>
          <input type="text" id="prazo" name="prazo" />
        </div>
        <div className="add-form-buttons">
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          <button className="add-form-buttons-btn-salvar" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default TarefaAdd;
