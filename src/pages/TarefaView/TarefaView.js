import React, { useEffect, useState } from "react";
import "./TarefaView.scss";
import { Api } from "../../api/api";
import { Link } from "react-router-dom";

const TarefaView = (props) => {
  const [tarefa, setTarefa] = useState({});

  useEffect(() => {
    getTarefaById();
  }, []);

  const id = props.match.params.id;

  const getTarefaById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setTarefa(data);
  };

  const handleDelete = async (evento) => {
    evento.preventDefault();
    const resposta = await Api.fetchDelete(id);
    const result = await resposta;
    console.log(result);
    props.history.push("/");
  };

  return (
    <div className="viewer">
      <p>
        <b>Titulo:</b> {tarefa.titulo}
      </p>
      <p>
        <b>Descrição:</b> {tarefa.descrição}
      </p>
      <p>
        <b>Prioridade:</b> {tarefa.prioridade}
      </p>
      <p>
        <b>Status:</b> {tarefa.status}
      </p>
      <p>
        <b>Prazo:</b> {tarefa.prazo}
      </p>
      <p>
        <b>Data Criacao:</b> {tarefa.dataCriacao}
      </p>
      <Link to={`/edit/${tarefa._id}`}>
        <button className="btn btn-success">Editar</button>
      </Link>
      <button onClick={handleDelete} className="btn btn-danger">
        Excluir
      </button>
    </div>
  );
};

export default TarefaView;
