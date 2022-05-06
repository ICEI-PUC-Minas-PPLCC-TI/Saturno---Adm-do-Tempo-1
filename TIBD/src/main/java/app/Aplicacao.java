package app;

import static spark.Spark.*;
import service.TarefaService;
import service.UsuarioService;


public class Aplicacao {
	
	private static TarefaService tarefaService = new TarefaService();
    private static UsuarioService usuarioService = new UsuarioService();
	
    public static void main(String[] args) {
        port(6789);
        
        staticFiles.location("/public");
        
        post("/tarefa/insert", (request, response) -> tarefaService.insert(request, response));
        get("/tarefa/:id", (request, response) -> tarefaService.get(request, response));
        get("/tarefa/list/:orderby", (request, response) -> tarefaService.getAll(request, response));
        get("/tarefa/update/:id", (request, response) -> tarefaService.getToUpdate(request, response));
        post("/tarefa/update/:id", (request, response) -> tarefaService.update(request, response));
        get("/tarefa/delete/:id", (request, response) -> tarefaService.delete(request, response));

        post("/usuario/insert", (request, response) -> usuarioService.insert(request, response));
        get("/usuario/:id", (request, response) -> usuarioService.get(request, response));
        get("/usuario/list/:orderby", (request, response) -> usuarioService.getAll(request, response));
        get("/usuario/update/:id", (request, response) -> usuarioService.getToUpdate(request, response));
        post("/usuario/update/:id", (request, response) -> usuarioService.update(request, response));
        get("/usuario/delete/:id", (request, response) -> usuarioService.delete(request, response));
    }
}