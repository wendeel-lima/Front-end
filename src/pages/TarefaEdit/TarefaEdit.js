import React, { useEffect, useState } from "react";
import "./TarefaEdit.scss";
import { Link } from "react-router-dom";
import { Api } from "../../api/api";

const TarefaEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getTarefaById();
  }, []);

  const getTarefaById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data);
  };

  const handleFieldsChange = (evento) => {
    const auxFields = { ...fields };
    auxFields[evento.target.name] = evento.target.value;
    setFields(auxFields);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const dados = { ...fields };
    const result = await Api.fetchPut(dados, id);
    const response = await result.json();
    console.log(response);
  };

  return (
    <div className="header">
      <h2>Editar Tarefa</h2>
      <div>
        <section className="edit">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="titulo">Titulo:</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={fields.titulo}
                onChange={handleFieldsChange}
              />
            </div>
            <div>
              <label htmlFor="descrição">Descrição:</label>
              <input
                type="text"
                id="descrição"
                name="descrição"
                value={fields.descrição}
                onChange={handleFieldsChange}
              />
            </div>
            <div>
              <label htmlFor="prazo">Prazo:</label>
              <input
                type="text"
                id="prazo"
                name="prazo"
                value={fields.prazo}
                onChange={handleFieldsChange}
              />
            </div>
            <div>
              <fieldset htmlFor="prioridade">
                <legend id="prioridade" name="prioridade">
                  Prioridade:
                </legend>
                <select
                  htmlFor="prioridade"
                  id="prioridade"
                  name="prioridade"
                  value={fields.prioridade}
                  onChange={handleFieldsChange}
                >
                  <option value="Baixa">Baixa</option>
                  <option value="Media">Media</option>
                  <option value="Alta">Alta</option>
                </select>
              </fieldset>
            </div>
            <div>
              <fieldset htmlFor="status">
                <legend>Status:</legend>
                <select
                  htmlFor="status"
                  id="status"
                  name="status"
                  value={fields.status}
                  onChange={handleFieldsChange}
                >
                  <option value="Fazer">Fazer</option>
                  <option value="Fazendo">Fazendo</option>
                  <option value="Feito">Feito</option>
                </select>
              </fieldset>
            </div>

            <div className="add-form-buttons">
              <Link to="/" className="link-button">
                <button>Concluir edição</button>
              </Link>
              <button type="submit">Editar</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default TarefaEdit;
