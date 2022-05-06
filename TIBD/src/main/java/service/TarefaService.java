package service;

import java.util.Scanner;
import java.time.LocalDate;
import java.io.File;
import java.time.LocalDateTime;
import java.util.List;
import dao.TarefaDAO;
import model.Tarefa;
import spark.Request;
import spark.Response;


public class TarefaService {

	private TarefaDAO tarefaDAO = new TarefaDAO();
	private String form;
	private final int FORM_INSERT = 1;
	private final int FORM_DETAIL = 2;
	private final int FORM_UPDATE = 3;
	private final int FORM_ORDERBY_ID = 1;
	private final int FORM_ORDERBY_DESCRICAO = 2;
	private final int FORM_ORDERBY_PRECO = 3;
	
	
	public TarefaService() {
		makeForm();
	}

	
	public void makeForm() {
		makeForm(FORM_INSERT, new Tarefa(), FORM_ORDERBY_DESCRICAO);
	}

	
	public void makeForm(int orderBy) {
		makeForm(FORM_INSERT, new Tarefa(), orderBy);
	}

	
	public void makeForm(int tipo, Tarefa tarefa, int orderBy) {
		String nomeArquivo = "/resources/SATURNO/Lista-Tarefas.html";
		form = "";
		try{
			Scanner entrada = new Scanner(new File(nomeArquivo));
		    while(entrada.hasNext()){
		    	form += (entrada.nextLine() + "\n");
		    }
		    entrada.close();
		}  catch (Exception e) { System.out.println(e.getMessage()); }
		
		String umTarefa = "";
		if(tipo != FORM_INSERT) {
			umTarefa += "\t<table width=\"80%\" bgcolor=\"#f3f3f3\" align=\"center\">";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td align=\"left\"><font size=\"+2\"><b>&nbsp;&nbsp;&nbsp;<a href=\"/tarefa/list/1\">Novo Tarefa</a></b></font></td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t</table>";
			umTarefa += "\t<br>";			
		}
		
		if(tipo == FORM_INSERT || tipo == FORM_UPDATE) {
			String action = "/tarefa/";
			String name, descricao, buttonLabel;
			if (tipo == FORM_INSERT){
				action += "insert";
				name = "Inserir Tarefa";
				descricao = "leite, pão, ...";
				buttonLabel = "Inserir";
			} else {
				action += "update/" + tarefa.getID();
				name = "Atualizar Tarefa (ID " + tarefa.getID() + ")";
				descricao = tarefa.getDescricao();
				buttonLabel = "Atualizar";
			}
			umTarefa += "\t<form class=\"form--register\" action=\"" + action + "\" method=\"post\" id=\"form-add\">";
			umTarefa += "\t<table width=\"80%\" bgcolor=\"#f3f3f3\" align=\"center\">";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td colspan=\"3\" align=\"left\"><font size=\"+2\"><b>&nbsp;&nbsp;&nbsp;" + name + "</b></font></td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td colspan=\"3\" align=\"left\">&nbsp;</td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td>&nbsp;Descrição: <input class=\"input--register\" type=\"text\" name=\"descricao\" value=\""+ descricao +"\"></td>";
			umTarefa += "\t\t\t<td>Preco: <input class=\"input--register\" type=\"text\" name=\"preco\" value=\""+ tarefa.getPreco() +"\"></td>";
			umTarefa += "\t\t\t<td>Quantidade: <input class=\"input--register\" type=\"text\" name=\"quantidade\" value=\""+ tarefa.getQuantidade() +"\"></td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td>&nbsp;Data de fabricação: <input class=\"input--register\" type=\"text\" name=\"dataFabricacao\" value=\""+ tarefa.getDataFabricacao().toString() + "\"></td>";
			umTarefa += "\t\t\t<td>Data de validade: <input class=\"input--register\" type=\"text\" name=\"dataValidade\" value=\""+ tarefa.getDataValidade().toString() + "\"></td>";
			umTarefa += "\t\t\t<td align=\"center\"><input type=\"submit\" value=\""+ buttonLabel +"\" class=\"input--main__style input--button\"></td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t</table>";
			umTarefa += "\t</form>";		
		} else if (tipo == FORM_DETAIL){
			umTarefa += "\t<table width=\"80%\" bgcolor=\"#f3f3f3\" align=\"center\">";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td colspan=\"3\" align=\"left\"><font size=\"+2\"><b>&nbsp;&nbsp;&nbsp;Detalhar Tarefa (ID " + tarefa.getID() + ")</b></font></td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td colspan=\"3\" align=\"left\">&nbsp;</td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td>&nbsp;Descrição: "+ tarefa.getDescricao() +"</td>";
			umTarefa += "\t\t\t<td>Preco: "+ tarefa.getPreco() +"</td>";
			umTarefa += "\t\t\t<td>Quantidade: "+ tarefa.getQuantidade() +"</td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t\t<tr>";
			umTarefa += "\t\t\t<td>&nbsp;Data de fabricação: "+ tarefa.getDataFabricacao().toString() + "</td>";
			umTarefa += "\t\t\t<td>Data de validade: "+ tarefa.getDataValidade().toString() + "</td>";
			umTarefa += "\t\t\t<td>&nbsp;</td>";
			umTarefa += "\t\t</tr>";
			umTarefa += "\t</table>";		
		} else {
			System.out.println("ERRO! Tipo não identificado " + tipo);
		}
		form = form.replaceFirst("<UM-TAREFA>", umTarefa);
		
		String list = new String("<table width=\"80%\" align=\"center\" bgcolor=\"#f3f3f3\">");
		list += "\n<tr><td colspan=\"6\" align=\"left\"><font size=\"+2\"><b>&nbsp;&nbsp;&nbsp;Relação de Tarefas</b></font></td></tr>\n" +
				"\n<tr><td colspan=\"6\">&nbsp;</td></tr>\n" +
    			"\n<tr>\n" + 
        		"\t<td><a href=\"/tarefa/list/" + FORM_ORDERBY_ID + "\"><b>ID</b></a></td>\n" +
        		"\t<td><a href=\"/tarefa/list/" + FORM_ORDERBY_DESCRICAO + "\"><b>Descrição</b></a></td>\n" +
        		"\t<td><a href=\"/tarefa/list/" + FORM_ORDERBY_PRECO + "\"><b>Preço</b></a></td>\n" +
        		"\t<td width=\"100\" align=\"center\"><b>Detalhar</b></td>\n" +
        		"\t<td width=\"100\" align=\"center\"><b>Atualizar</b></td>\n" +
        		"\t<td width=\"100\" align=\"center\"><b>Excluir</b></td>\n" +
        		"</tr>\n";
		
		List<Tarefa> tarefas;
		if (orderBy == FORM_ORDERBY_ID) {                 	tarefas = tarefaDAO.getOrderByID();
		} else if (orderBy == FORM_ORDERBY_DESCRICAO) {		tarefas = tarefaDAO.getOrderByDescricao();
		} else if (orderBy == FORM_ORDERBY_PRECO) {			tarefas = tarefaDAO.getOrderByPreco();
		} else {											tarefas = tarefaDAO.get();
		}

		int i = 0;
		String bgcolor = "";
		for (Tarefa p : tarefas) {
			bgcolor = (i++ % 2 == 0) ? "#fff5dd" : "#dddddd";
			list += "\n<tr bgcolor=\""+ bgcolor +"\">\n" + 
            		  "\t<td>" + p.getID() + "</td>\n" +
            		  "\t<td>" + p.getDescricao() + "</td>\n" +
            		  "\t<td>" + p.getPreco() + "</td>\n" +
            		  "\t<td align=\"center\" valign=\"middle\"><a href=\"/tarefa/" + p.getID() + "\"><img src=\"/image/detail.png\" width=\"20\" height=\"20\"/></a></td>\n" +
            		  "\t<td align=\"center\" valign=\"middle\"><a href=\"/tarefa/update/" + p.getID() + "\"><img src=\"/image/update.png\" width=\"20\" height=\"20\"/></a></td>\n" +
            		  "\t<td align=\"center\" valign=\"middle\"><a href=\"javascript:confirmarDeleteTarefa('" + p.getID() + "', '" + p.getDescricao() + "', '" + p.getPreco() + "');\"><img src=\"/image/delete.png\" width=\"20\" height=\"20\"/></a></td>\n" +
            		  "</tr>\n";
		}
		list += "</table>";		
		form = form.replaceFirst("<LISTAR-TAREFA>", list);				
	}
	
	
	public Object insert(Request request, Response response) {
		String descricao = request.queryParams("descricao");
		float preco = Float.parseFloat(request.queryParams("preco"));
		int quantidade = Integer.parseInt(request.queryParams("quantidade"));
		LocalDateTime dataFabricacao = LocalDateTime.parse(request.queryParams("dataFabricacao"));
		LocalDate dataValidade = LocalDate.parse(request.queryParams("dataValidade"));
		
		String resp = "";
		
		Tarefa tarefa = new Tarefa(-1, descricao, preco, quantidade, dataFabricacao, dataValidade);
		
		if(tarefaDAO.insert(tarefa) == true) {
            resp = "Tarefa (" + descricao + ") inserido!";
            response.status(201); // 201 Created
		} else {
			resp = "Tarefa (" + descricao + ") não inserido!";
			response.status(404); // 404 Not found
		}
			
		makeForm();
		return form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");
	}

	
	public Object get(Request request, Response response) {
		int id = Integer.parseInt(request.params(":id"));		
		Tarefa tarefa = (Tarefa) tarefaDAO.get(id);
		
		if (tarefa != null) {
			response.status(200); // success
			makeForm(FORM_DETAIL, tarefa, FORM_ORDERBY_DESCRICAO);
        } else {
            response.status(404); // 404 Not found
            String resp = "Tarefa " + id + " não encontrado.";
    		makeForm();
    		form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");     
        }

		return form;
	}

	
	public Object getToUpdate(Request request, Response response) {
		int id = Integer.parseInt(request.params(":id"));		
		Tarefa tarefa = (Tarefa) tarefaDAO.get(id);
		
		if (tarefa != null) {
			response.status(200); // success
			makeForm(FORM_UPDATE, tarefa, FORM_ORDERBY_DESCRICAO);
        } else {
            response.status(404); // 404 Not found
            String resp = "Tarefa " + id + " não encontrado.";
    		makeForm();
    		form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");     
        }

		return form;
	}
	
	
	public Object getAll(Request request, Response response) {
		int orderBy = Integer.parseInt(request.params(":orderby"));
		makeForm(orderBy);
	    response.header("Content-Type", "text/html");
	    response.header("Content-Encoding", "UTF-8");
		return form;
	}			
	
	public Object update(Request request, Response response) {
        int id = Integer.parseInt(request.params(":id"));
		Tarefa tarefa = tarefaDAO.get(id);
        String resp = "";       

        if (tarefa != null) {
        	tarefa.setDescricao(request.queryParams("descricao"));
        	tarefa.setPreco(Float.parseFloat(request.queryParams("preco")));
        	tarefa.setQuantidade(Integer.parseInt(request.queryParams("quantidade")));
        	tarefa.setDataFabricacao(LocalDateTime.parse(request.queryParams("dataFabricacao")));
        	tarefa.setDataValidade(LocalDate.parse(request.queryParams("dataValidade")));
        	tarefaDAO.update(tarefa);
        	response.status(200); // success
            resp = "Tarefa (ID " + tarefa.getID() + ") atualizado!";
        } else {
            response.status(404); // 404 Not found
            resp = "Tarefa (ID \" + tarefa.getId() + \") não encontrado!";
        }
		makeForm();
		return form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");
	}

	
	public Object delete(Request request, Response response) {
        int id = Integer.parseInt(request.params(":id"));
        Tarefa tarefa = tarefaDAO.get(id);
        String resp = "";       

        if (tarefa != null) {
            tarefaDAO.delete(id);
            response.status(200); // success
            resp = "Tarefa (" + id + ") excluído!";
        } else {
            response.status(404); // 404 Not found
            resp = "Tarefa (" + id + ") não encontrado!";
        }
		makeForm();
		return form.replaceFirst("<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\"\">", "<input type=\"hidden\" id=\"msg\" name=\"msg\" value=\""+ resp +"\">");
	}
}