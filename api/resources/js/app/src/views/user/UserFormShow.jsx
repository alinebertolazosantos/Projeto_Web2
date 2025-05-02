// 📄 UserFormShow.jsx - Visualização de usuário
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axiosClient";

export const UserFormShow = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axiosClient
            .get(`/user/show/${id}`)
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.error("Erro ao buscar usuário:", err);
                alert("Erro ao carregar dados do usuário.");
            });
    }, [id]);

    if (!user) return <p>Carregando...</p>;

    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/usuarios");
    };

    return (
        <div className="Display">
            <h1>Visualizar Usuário</h1>
            <hr></hr>
            <form>
                <p>
                    <strong>ID:</strong> {user.id}
                </p>
                <p>
                    <strong>Nome:</strong> {user.name}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>

                <button className="btn" onClick={(e) => onSubmit(e)}>
                    Voltar
                </button>
            </form>
        </div>
    );
};
