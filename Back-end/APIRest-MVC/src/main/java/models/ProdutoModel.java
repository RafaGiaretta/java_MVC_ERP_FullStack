package models;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import entities.Produto;

public class ProdutoModel {
	protected EntityManager entityManager;
	
	public ProdutoModel() {
		entityManager = getEntityMananger();
	}
	
	private EntityManager getEntityMananger() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("API-Hibernate");
		if(entityManager == null) {
			entityManager = factory.createEntityManager();
		}
		return entityManager;
	}
	
	@SuppressWarnings("unchecked")
	public List<Produto> select(){
		return entityManager.createQuery("FROM " + Produto.class.getName()).getResultList();
	}
	
}
