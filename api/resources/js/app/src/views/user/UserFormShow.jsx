// 📄 UserFormShow.jsx - Visualização de usuário
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../axiosClient";

export const UserFormShow = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

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

    return (
        <div>
            <h2>Visualizar Usuário</h2>
            <p>
                <strong>ID:</strong> {user.id}
            </p>
            <p>
                <strong>Nome:</strong> {user.name}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
        </div>
    );
};
