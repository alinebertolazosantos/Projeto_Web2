// 📄 UserFormDestroy.jsx - Exclusão de usuário
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";

export const UserFormDestroy = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const confirmar = window.confirm(
            `Deseja realmente excluir o usuário ${id}?`
        );
        if (confirmar) {
            axiosClient
                .delete(`/user/destroy/${id}`)
                .then(() => {
                    alert("Usuário excluído com sucesso!");
                    navigate("/usuarios");
                })
                .catch((error) => {
                    console.error("Erro ao excluir usuário:", error);
                    alert("Erro ao excluir usuário.");
                });
        } else {
            navigate("/usuarios");
        }
    }, [id, navigate]);

    return (
        <div>
            <h2>Excluindo usuário...</h2>
        </div>
    );
};
