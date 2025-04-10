# 🌐 Projeto Web - Engenharia de Computação

Este projeto foi desenvolvido como parte da disciplina de **Programação para Web** do curso de **Engenharia de Computação**. O objetivo principal é aplicar os conhecimentos teóricos e práticos de desenvolvimento web, utilizando tecnologias modernas tanto no **frontend** quanto no **backend**.

---

## 🎯 Objetivo

Criar um ambiente completo de desenvolvimento **Full Stack**, com uma API robusta e segura, e um frontend interativo e funcional, simulando a estrutura de um sistema web real, utilizando ferramentas amplamente aplicadas no mercado.

---

## 🛠️ Tecnologias Utilizadas

### 🔧 Backend – Laravel (PHP)

-   **Laravel** – Framework PHP para construção da API REST
-   **Composer** – Gerenciador de dependências PHP
-   **XAMPP** – Ambiente local com Apache e MySQL
-   **MySQL** – Banco de dados relacional (rodando na porta `3307`)
-   **Postman** – Testes de rotas e requisições HTTP
-   **Artisan CLI** – Utilitário de linha de comando do Laravel

### ⚛️ Frontend – React

-   **React.js** – Biblioteca JavaScript para interfaces dinâmicas
-   **Node.js** – Ambiente para execução do React
-   **Create React App** – Inicialização e build do projeto React

---

## 📁 Estrutura do Projeto

---

## 🚀 Funcionalidades Implementadas

-   ✅ API RESTful com Laravel
-   ✅ Testes de requisições no Postman
-   ✅ Cadastro de usuários com validação
-   ✅ Consulta de usuários por ID
-   ✅ Integração com banco de dados MySQL
-   ✅ Estrutura de rotas organizada
-   ✅ Frontend em React (em desenvolvimento)

---

## 👨‍🏫 Contexto Acadêmico

Este projeto está sendo desenvolvido em sala de aula com fins educacionais, promovendo o aprendizado de tecnologias web modernas, integração frontend-backend, e versionamento de código com Git e GitHub.

---

## 💡 Como Executar o Projeto

> ⚠️ Pré-requisitos: PHP, Composer, XAMPP, Node.js, npm/yarn

1. **Clone o repositório**

```bash
git clone https://github.com/alinebertolazosantos/Projeto_Web2.git
```

✅ /api ← Projeto Laravel (backend) /frontend ← Projeto React (frontend)

-   cd api
-   composer install
-   cp .env.example .env
-   php artisan key:generate
-   php artisan migrate
-   php artisan serve

✅ Configure o backend Laravel

-   cd api
-   composer install
-   cp .env.example .env
-   php artisan key:generate
-   php artisan migrate
-   php artisan serve

✅ Configure o frontend React

-   cd ../app
-   npm install
-   npm start
