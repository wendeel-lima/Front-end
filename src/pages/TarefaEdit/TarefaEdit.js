import React, { useEffect, useState } from "react";
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
    <section className="add">
      <h1>Editar - Tarefa</h1>
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
          <label htmlFor="prioridade">Prioridade:</label>
          <input
            type="text"
            id="prioridade"
            name="prioridade"
            value={fields.prioridade}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={fields.status}
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

export default TarefaEdit;
