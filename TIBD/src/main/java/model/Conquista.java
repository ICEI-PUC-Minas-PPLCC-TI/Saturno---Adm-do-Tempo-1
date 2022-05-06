package model;

import java.text.ParseException;

public class Conquista {
	private String nome;
	private String imagem;
	
	public Conquista() throws ParseException {
		nome = "";
		imagem = "";
	}

	public Conquista(String nome, String imagem) throws ParseException {
		
	}		
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getImagem() {
		return imagem;
	}
	
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	

	public String toString() {
		return "Nome: " + getNome() + " Imagem: " + getImagem();
	}
	
	public boolean equals(Object obj) {
		return (this.getNome() == ((Conquista) obj).getNome());
	}	
}