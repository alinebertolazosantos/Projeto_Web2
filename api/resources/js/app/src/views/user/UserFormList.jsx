import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";
import { Link } from "react-router-dom";
import "../../App.css";

const UserFormList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        axiosClient
            .get("/user/index")
            .then(({ data }) => {
                setUsers(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getUsers(); // chama uma vez ao carregar
    }, []);

    return (
        <div>
            <div className="Display">
                <div className="card animated fadeInDown">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h1>Usuários</h1>
                        <Link to="/usuarios/novo" className="btn-add">
                            Cadastrar
                        </Link>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th className="center">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td className="Center actions">
                                            <Link
                                                className="btn-show"
                                                to={`/usuarios/${user.id}`}
                                            >
                                                Ver
                                            </Link>
                                            <Link
                                                className="btn-edit"
                                                to={`/usuarios/${user.id}/editar`}
                                            >
                                                Editar
                                            </Link>
                                            <Link
                                                className="btn-delete"
                                                to={`/usuarios/${user.id}/excluir`}
                                            >
                                                Excluir
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">
                                        Nenhum registro localizado
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserFormList;
