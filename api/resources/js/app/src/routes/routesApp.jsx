import React from "react";
import { Routes, Route } from "react-router";
import UserFormList from "../views/user/UserFormList";
import { UserFormStore } from "../views/user/UserFormStore";
import { UserFormShow } from "../views/user/UserFormShow";
import { UserFormUpdate } from "../views/user/UserFormUpdate";
import { UserFormDestroy } from "../views/user/UserFormDestroy";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/usuarios" element={<UserFormList />} />
            <Route path="/usuarios/novo" element={<UserFormStore />} />
            <Route path="/usuarios/:id" element={<UserFormShow />} />
            <Route path="/usuarios/:id/editar" element={<UserFormUpdate />} />
            <Route path="/usuarios/:id/excluir" element={<UserFormDestroy />} />
        </Routes>
    );
};

export default RoutesApp;