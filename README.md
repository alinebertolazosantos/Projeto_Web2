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

-   **React.js** – Biblioteca para construção de interfaces dinâmicas
-   **Vite** – Ferramenta rápida de bundling e dev server
-   **Axios** – Cliente HTTP para integração com a API
-   **React Router DOM** – Gerenciador de rotas no frontend

---

## 📁 Estrutura do Projeto

---

## 🚀 Funcionalidades Implementadas

-   ✅ CRUD completo de usuários
-   ✅ API RESTful com validação e mensagens personalizadas
-   ✅ Integração frontend-backend via Axios
-   ✅ Navegação com React Router DOM
-   ✅ Estilização amigável e organizada
-   ✅ Separação de componentes por responsabilidade
-   ✅ Organização por rotas no frontend
-   ✅ Conexão com MySQL na porta `3307`

---

## 👨‍🏫 Contexto Acadêmico

Este projeto está sendo desenvolvido em sala de aula com fins educacionais, promovendo o aprendizado de tecnologias web modernas, integração frontend-backend, e versionamento de código com Git e GitHub.

---

## 💡 Como Executar o Projeto

> ⚠️ Pré-requisitos instalados:
>
> -   PHP 8+
> -   Composer
> -   XAMPP (com MySQL na porta 3307)
> -   Node.js e npm

---

**Clone o repositório**

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

Acesse a API em: http://localhost:8000

✅ Configure o frontend React

-   cd api/routes/js/app
-   npm install
-   npm start

Acesse o app em: http://localhost:5173/usuarios/
