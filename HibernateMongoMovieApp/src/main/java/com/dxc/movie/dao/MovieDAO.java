package com.dxc.movie.dao;

import java.util.List;

import com.dxc.moviemodel.Movie;

public interface MovieDAO {
	
	
	
		public Movie getMovie(int movieId);
		public List<Movie> getAllMovie();
		public void addMovie(Movie movie);
		public void deleteMovie(int movieId);
		public void updateMovie(Movie movie);
		public boolean isMovieExists(int movieId);
}
