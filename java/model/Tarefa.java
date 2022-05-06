package model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Tarefa {
	private int id;
	private String descricao;
	private Date dataLimite;
	private String nome;
	private int idUsuario;
	SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	public Tarefa() throws ParseException {
		id = -1;
		descricao = "";
		dataLimite = sdf.parse("01/01/1900");
		nome = "";
		idUsuario = -1;
	}

	public Tarefa(int id, String descricao, String dataLimite, String nome, int idUsuario) throws ParseException {
		
	}		
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getDataLimite() {
		return sdf.format(dataLimite);
	}

	public void setDataLimite(String dataLimite) throws ParseException {
		this.dataLimite = sdf.parse(dataLimite);
	}
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public int getIdUsuario() {
		return idUsuario;
	}
	
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	

	public String toString() {
		return "Id: " + getId() + " Nome: "+ getNome() + " Descri��o: " + getDescricao() + " Data Limite: " + getDataLimite() + " Id Usuario: " + getIdUsuario();
	}
	
	public boolean equals(Object obj) {
		return (this.getId() == ((Tarefa) obj).getId());
	}	
}