<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class UsuarioController extends Controller
{
    // Listagem com paginação, ordenação e busca
    public function index(Request $request)
    {
        $page = $request->get('page', 1);
        $pageSize = $request->get('pageSize', 5);
        $dir = $request->get('dir', 'asc');
        $props = $request->get('props', 'id');
        $search = $request->get('search', '');

        // Validar colunas permitidas para ordenação
        $allowedProps = ['id', 'name', 'email'];
        if (!in_array($props, $allowedProps)) {
            $props = 'id';
        }

        $query = User::select('id', 'name', 'email')
            ->where(function ($q) use ($search) {
                $q->where('name', 'like', "%$search%")
                  ->orWhere('email', 'like', "%$search%");
            })
            ->orderBy($props, $dir);

        $total = $query->count();

        $data = $query->offset(($page - 1) * $pageSize)
                     ->limit($pageSize)
                     ->get();

        $totalPages = ceil($total / $pageSize);

        return response()->json([
            'message' => 'Relatório de usuário',
            'status' => 200,
            'page' => $page,
            'pageSize' => $pageSize,
            'dir' => $dir,
            'props' => $props,
            'search' => $search,
            'total' => $total,
            'totalPages' => $totalPages,
            'data' => $data,
        ], 200);
    }

    // Cadastro
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Erro nas informações do usuário',
                'data' => $validator->errors(),
                'status' => 422,
            ], 422);
        }

        $data = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'Usuário cadastrado com sucesso',
            'data' => $data,
            'status' => 201,
        ], 201);
    }

    // Consulta por ID
    public function show(string $id)
    {
        $data = User::find($id);

        if (!$data) {
            return response()->json([
                'message' => 'Usuário não encontrado',
                'status' => 404,
            ], 404);
        }

        return response()->json([
            'message' => 'Usuário localizado com sucesso',
            'data' => $data,
            'status' => 200,
        ], 200);
    }

    // Atualização
    public function update(Request $request, string $id)
    {
        $data = User::find($id);

        if (!$data) {
            return response()->json([
                'message' => 'Usuário não encontrado',
                'status' => 404,
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|string|email|max:255|unique:users,email,' . $id,
            'password' => 'sometimes|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Erro de validação',
                'data' => $validator->errors(),
                'status' => 422,
            ], 422);
        }

        if ($request->has('name')) $data->name = $request->name;
        if ($request->has('email')) $data->email = $request->email;
        if ($request->has('password')) $data->password = Hash::make($request->password);

        $data->save();

        return response()->json([
            'message' => 'Usuário alterado com sucesso',
            'data' => $data,
            'status' => 200,
        ], 200);
    }

    // Exclusão lógica
    public function destroy(string $id)
    {
        $data = User::find($id);

        if (!$data) {
            return response()->json([
                'message' => 'Usuário não encontrado',
                'status' => 404,
            ], 404);
        }

        $data->delete();

        return response()->json([
            'message' => 'Usuário removido com sucesso',
            'status' => 200,
        ], 200);
    }
}
