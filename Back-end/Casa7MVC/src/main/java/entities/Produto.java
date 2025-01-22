package entities;

public class Produto {
	private int cod_produto;
	private String nome;
	private String descricao;
	private double preco;
	private int quantidade;
	private int categoria;
	
	public Produto() {
		super();
	}
	
	public Produto(int cod_produto, String nome, String descricao, double preco, int quantidade, int categoria) {
		super();
		this.cod_produto = cod_produto;
		this.nome = nome;
		this.descricao = descricao;
		this.preco = preco;
		this.quantidade = quantidade;
		this.categoria = categoria;
	}

	public int getCod_produto() {
		return cod_produto;
	}

	public void setCod_produto(int cod_produto) {
		this.cod_produto = cod_produto;
	}
	
	

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public double getPreco() {
		return preco;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public int getCategoria() {
		return categoria;
	}

	public void setCategoria(int categoria) {
		this.categoria = categoria;
	}

	@Override
	public String toString() {
		return "Produto cod_produto=" + cod_produto + "nome=" + nome + ", descricao=" + descricao + ", preco=" + preco + ", quantidade="
				+ quantidade + ", categoria=" + categoria ;
	}
	
	
	
	
}
