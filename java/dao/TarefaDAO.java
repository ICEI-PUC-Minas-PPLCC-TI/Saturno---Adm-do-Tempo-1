package dao;

import model.Tarefa;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


public class TarefaDAO extends DAO {	
	public TarefaDAO() {
		super();
		conectar();
	}
	
	
	public void finalize() {
		close();
	}
	
	
	public boolean insert(Tarefa tarefa) {
		boolean status = false;
		try {
			String sql = "INSERT INTO tarefa (id, descricao, dataLimite, nome, idUsuario)"
		               + "VALUES ('" + tarefa.getId() + "', "
		               + tarefa.getDescricao() + ", " + tarefa.getDataLimite() + ", " + tarefa.getNome() + ", " + tarefa.getIdUsuario() + ");";
			PreparedStatement st = conexao.prepareStatement(sql);
			st.executeUpdate();
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}

	
	public Tarefa get(int id) {
		Tarefa tarefa = null;
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			String sql = "SELECT * FROM tarefa WHERE id="+id;
			ResultSet rs = st.executeQuery(sql);	
	        if(rs.next()){            
	        	 tarefa = new Tarefa(rs.getInt("id"), rs.getString("descricao"), rs.getString("dataLimite"), 
	                				   rs.getString("nome"), 
	        			               rs.getInt("idUsuario"));
	        }
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return tarefa;
	}
	
	
	public List<Tarefa> get() {
		return get("");
	}

	
	public List<Tarefa> getOrderByID() {
		return get("id");		
	}
	
	
	public List<Tarefa> getOrderByLogin() {
		return get("nome");		
	}
	
	
	public List<Tarefa> getOrderByNome() {
		return get("dataLimite");		
	}
	
	public List<Tarefa> getOrderBydataNasc(){
		return get("idUsuario");
	}
	
	private List<Tarefa> get(String orderBy) {
		List<Tarefa> usuarios = new ArrayList<Tarefa>();
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_READ_ONLY);
			String sql = "SELECT * FROM tarefa" + ((orderBy.trim().length() == 0) ? "" : (" ORDER BY " + orderBy));
			ResultSet rs = st.executeQuery(sql);	           
	        while(rs.next()) {	            	
	        	Tarefa t = new Tarefa(rs.getInt("id"), rs.getString("descricao"), rs.getString("dataLimite"), 
     				   rs.getString("nome"), 
		               rs.getInt("idUsuario"));
	            usuarios.add(t);
	        }
	        st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return usuarios;
	}
	
	
	public boolean update(Tarefa tarefa) {
		boolean status = false;
		try {  
			String sql = "UPDATE tarefa SET id = '" + tarefa.getId() + "', "
					   + "descricao = " + tarefa.getDescricao() + ", " 
					   + "dataLimite = " + tarefa.getDataLimite() + ","
					   + "nome = " + tarefa.getNome() + ","
					   + "idUsuario = " + tarefa.getIdUsuario() + ","
					   + "WHERE id = " + tarefa.getId();
			PreparedStatement st = conexao.prepareStatement(sql);
			st.executeUpdate();
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
	
	
	public boolean delete(int id) {
		boolean status = false;
		try {  
			Statement st = conexao.createStatement();
			st.executeUpdate("DELETE FROM usuario WHERE id = " + id);
			st.close();
			status = true;
		} catch (SQLException u) {  
			throw new RuntimeException(u);
		}
		return status;
	}
}