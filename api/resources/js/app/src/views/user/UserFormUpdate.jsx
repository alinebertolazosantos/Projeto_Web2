// 📄 UserFormUpdate.jsx - Atualização de usuário
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";

export const UserFormUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    // Buscar os dados atuais do usuário
    useEffect(() => {
        axiosClient
            .get(`/user/show/${id}`)
            .then((res) => {
                setForm({
                    name: res.data.data.name,
                    email: res.data.data.email,
                    password: "",
                });
            })
            .catch((err) => {
                console.error("Erro ao buscar usuário:", err);
                alert("Erro ao carregar dados do usuário.");
            });
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient
            .put(`/user/update/${id}`, form)
            .then(() => {
                alert("Usuário atualizado com sucesso!");
                navigate("/usuarios");
            })
            .catch((err) => {
                console.error("Erro ao atualizar usuário:", err);
                alert("Erro ao atualizar usuário.");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Usuário</h2>
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <input
                name="password"
                placeholder="Nova senha"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Atualizar</button>
        </form>
    );
};
