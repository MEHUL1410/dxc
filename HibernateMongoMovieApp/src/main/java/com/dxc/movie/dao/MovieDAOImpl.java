package com.dxc.movie.dao;

import java.util.List;

import javax.transaction.Synchronization;

import org.hibernate.Hibernate;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.engine.transaction.spi.LocalStatus;

import com.dxc.moviemodel.Movie;
import com.dxc.movie.util.HibernateUtil;

public class MovieDAOImpl implements MovieDAO {
	
	SessionFactory sf = HibernateUtil.getsSessionFactory();
	
	
	@Override
	public Movie getMovie(int movieId) {
		
		Session session = sf.openSession();
		Movie movie = (Movie) session.get(Movie.class, movieId);
		return movie;
	}

	@Override
	public List<Movie> getAllMovie() {
		Session session = sf.openSession();
		Query query = session.createQuery("from Movie");
		return query.list();
	}

	@Override
	public void addMovie(Movie movie) {
		
		Session session = sf.openSession();
		Transaction transaction = session.beginTransaction();
		session.save(movie);
		transaction.commit();
		session.close();
		System.out.println("Movie saved with name:"+ movie.getMovieName());
		
	}

	@Override
	public void deleteMovie(int movieId) {
		Session session = sf.openSession();
		Transaction transaction = session.beginTransaction();
		Movie movie = new Movie();
		movie.setMovieId(movieId);
		session.delete(movie);
		transaction.commit();
		session.close();
		System.out.println("movie deleted with id"+movie.getMovieId());
		
	}

	@Override
	public void updateMovie(Movie newmovie) {
		Session session =sf.openSession();
		Transaction transaction = session.beginTransaction();
		session.update(newmovie);
		transaction.commit();
		session.close();
		System.out.println("movie updated with id:" + newmovie.getMovieId());
	}

	@Override
	public boolean isMovieExists(int movieId) {
		Session session = sf.openSession();
		Movie movie = (Movie) session.get(Movie.class, movieId);
		if(movie == null) 
		return false;
		
		else
			return true;
	}
}
	
