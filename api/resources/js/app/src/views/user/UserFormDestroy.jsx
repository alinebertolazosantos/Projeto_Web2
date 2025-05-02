import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axiosClient from "../../axiosClient";

export const UserFormDestroy = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Buscar dados do usuário
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

    // Função para excluir
    const handleDelete = (e) => {
        e.preventDefault();

        const confirmar = window.confirm("Tem certeza que deseja excluir?");
        if (!confirmar) return;

        axiosClient
            .delete(`/user/destroy/${id}`)
            .then(() => {
                alert("Usuário excluído com sucesso!");
                navigate("/usuarios");
            })
            .catch((err) => {
                console.error("Erro ao excluir usuário:", err);
                alert("Erro ao excluir usuário.");
            });
    };

    return (
        <div className="Display">
            <h1>Excluir Usuário</h1>
            <hr />
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

                <button className="btn-delete" onClick={handleDelete}>
                    Excluir
                </button>

                {/* 🔗 Link estilizado como botão */}
                <Link
                    to="/usuarios"
                    className="btn"
                    style={{ marginLeft: "10px" }}
                >
                    Cancelar
                </Link>
            </form>
        </div>
    );
};
