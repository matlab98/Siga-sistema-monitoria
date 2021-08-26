import React from "react";
import NavBar from "../components/navBar";
import { Link } from 'react-router-dom';
const home = () => {
  return (
    <>
      <NavBar />
      <div className="flexbox padre">
        <div className="hijo">
          <h1 className="titulo">¿Que deseas hacer?</h1>
          <h4>Haz clic en alguna de las siguientes opciones</h4>
          <table class="table table-hover">
            <tbody>
            <tr>
                <th scope="row"></th>
                <td><Link className="" to={`monitor/ver`}>Ver monitores</Link></td>
                <td><Link className="" to={`monitoria/ver`}>Ver monitorias</Link></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Link className="" to={`monitor/registrar`}>Registrar monitor</Link></td>
                <td><Link className="" to={`monitoria/registrar`}>Registrar monitoria</Link></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Link className="" to={`monitor/actualizar`}>Actualizar monitor</Link></td>
                <td><Link className="" to={`monitoria/actualizar`}>Actualizar monitor</Link></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Link className="" to={`monitor/eliminar`}>Eliminar monitor</Link></td>
                <td><Link className="" to={`monitoria/eliminar`}>Eliminar monitoria</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default home;
