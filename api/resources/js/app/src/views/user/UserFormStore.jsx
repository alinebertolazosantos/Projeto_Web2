// 📄 UserFormStore.jsx - Cadastro de usuário
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosClient from "../../axiosClient";

export const UserFormStore = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient
            .post("/user/store", form)
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/usuarios");
            })
            .catch((err) => {
                console.error("Erro ao cadastrar usuário:", err);
                alert("Erro ao cadastrar");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Novo Usuário</h2>
            <input
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <input
                name="password"
                placeholder="Senha"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Salvar</button>
            <Link to="/usuarios" className="btn" style={{ marginLeft: "10px" }}>
                Voltar
            </Link>
        </form>
    );
};
