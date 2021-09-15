import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar open">
        <div className="logo-details">
          <div className="logo_name">Tarefa.Easy</div>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <span className="links_name">Minhas Tarefas</span>
            </Link>
          </li>

          <li>
            <Link to="/add">
              <span className="links_name">Cadastar</span>
            </Link>
          </li>
          <li>
            <Link to="/view">
              <span className="links_name">Tarefas</span>
            </Link>
          </li>
          {/* <li>
            <Link href="#">
              <span className="links_name">User</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="links_name">Setting</span>
            </Link> 
          </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
