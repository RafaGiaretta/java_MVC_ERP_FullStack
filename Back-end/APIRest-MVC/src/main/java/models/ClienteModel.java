package models;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import entities.Cliente;

public class ClienteModel {
	protected EntityManager entityMananger;

	public ClienteModel() {
		entityMananger = getEntityMananger();
	}

	private EntityManager getEntityMananger() {
		EntityManagerFactory factory = Persistence.createEntityManagerFactory("API-Hibernate");
		if (entityMananger == null) {
			entityMananger = factory.createEntityManager();
		}
		return entityMananger;
	}

	@SuppressWarnings("unchecked")
	public List<Cliente> select() {
		return entityMananger.createQuery("FROM " + Cliente.class.getName()).getResultList();
	}

}
