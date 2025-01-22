package entities;

public class Cliente {
	private String cpf;
	private String nome;
	private String sobrenome;
	private String telefone;
	private int endereco;

	public Cliente() {
	}

	public Cliente(String cpf, String nome, String sobrenome, String telefone, Integer endereco) {
		this.cpf = cpf;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.telefone = telefone;
		this.endereco = endereco;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public Integer getEndereco() {
		return endereco;
	}

	public void setEndereco(Integer endereco) {
		this.endereco = endereco;
	}

	@Override
	public String toString() {
		return "Cliente CPF=" + cpf + ", Nome=" + nome + ", Sobrenome=" + sobrenome + ", Telefone=" + telefone
				+ ", endereco=" + endereco;
	}
	

}
