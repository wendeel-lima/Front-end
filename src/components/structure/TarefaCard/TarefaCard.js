import React from "react";
import { Link } from "react-router-dom";
import "./TarefaCard.scss";

const TarefaCard = (props) => {
  const tarefa = props.tarefa;

  return (
    <div className="card">
      <h3>{tarefa.titulo}</h3>
      <p>{tarefa.descrição}</p>
      <p>{tarefa.prioridade}</p>
      <p>{tarefa.status}</p>
      <p>{tarefa.prazo}</p>

      <Link to={`/view/${tarefa._id}`}>
        <button>View</button>
      </Link>
    </div>
  );
};

export default TarefaCard;
