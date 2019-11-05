package com.dxc.movie.dao;

import java.util.List;

import com.dxc.moviemodel.Movie;

import junit.framework.TestCase;

public class MovieDAOImplTest extends TestCase {

	
	MovieDAOImpl impl;
	
	protected void setUp() throws Exception {
		
		impl =  new MovieDAOImpl();
		
	}

	protected void tearDown() throws Exception {
		
		impl = null;
	}

	public void testGetMovie() {
		
		
	}

	public void testGetAllMovie() {
		/*
		 * int Data = impl.getAllMovie().size();
		 * Movie movie = new Movie(5, "e", 7500,"e");
		   impl.addMovie(movie); 
		 * int Data2 = impl.getAllMovie().size();
		 * assertNotSame(Data2, Data);
		 */
	}

	public void testAddMovie() {
		
		/*
		 * Movie movie =new Movie(10, "A", 5000, "A"); 
		 * Movie movie2 =newMovie(20,"B",10000, "B"); 
		 * List<Movie>getallMovies1 = impl.getAllMovie();
		 * impl.addMovie(movie);
		 *  impl.addMovie(movie2);
		 *   List<Movie>getallMovies2 = impl.getAllMovie();
		 * assertNotSame(getallMovies2.size(),getallMovies1.size());
		 */
		 	}

	public void testDeleteMovie() {
		
		/*
		 * Movie movie= new Movie(); 
		 * 
		 * int Data1 = impl.getAllMovie().size();
		 * impl.deleteMovie(2);
		 *  int Data2 = impl.getAllMovie().size();
		 * 
		 * assertNotSame(Data2, Data1);
		 */
	}

	public void testUpdateMovie() {
		/*
		 * Movie movie = new Movie(3, "C", 1000, "C");
		 * impl.addMovie(movie);
		 *  Movie newMovie = new Movie(3, "d", 5000, "d");
		 *   impl.updateMovie(newMovie);
		 * assertNotSame(newMovie, movie);
		 */	
	}

	public void testIsMovieExists() {
		
		  Movie movie = new Movie(8, "s", 1000, "s"); 
		  impl.addMovie(movie); 
		  boolean data1 = true;
		  boolean data;
		  if(data = impl.isMovieExists(7)) 
			   assertEquals(data, data1);
		  

		/* Movie data2 = impl.getMovie(9); */
		  
		
		
	}

}
