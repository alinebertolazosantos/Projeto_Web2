<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Models\User;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'message' => 'Meu primeiro acesso ao controlador',
            'status' => 200,
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'email'=>'required|string|email|max:255|unique:users,email',
            'password'=>'required|string|min:6',
        ]);

        if ($validator->fails()){
            return response()->json([
                'message'=>'Erro nas informações do usuário',
                'dara'=>$validator->errors(),
                'status'=>404,
            ],404);
        }
        $data = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
        ]);

        return response()->json([
            'message'=> 'Usuário cadastrado com sucesso',
            'data'=> $data,
            'status'=>200,
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,string $id)
    {

        try{
            $data = User::findOrFail($id);

            if(!$data){
                throw new HttpNewException(
                    response()->json('Usuário não localizado'),
                    404,
                );
            }
        }catch(HttpNewException $e){
            response()->json($e->getMessage());
        }
       

        return response()->json([
            'message'=> 'Usuário localizado com sucesso',
            'data'=> $data,
            'status'=>200,
        ],200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
