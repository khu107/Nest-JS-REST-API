import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

export interface Movie {
  id: number;
  title: string;
  genre: string;
}

@Injectable()
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'tuylar muborak',
      genre: 'test1',
    },
    {
      id: 2,
      title: 'chimildiq',
      genre: 'test2',
    },
  ];

  private idCounter = 3;

  getManyMovies(title?: string) {
    if (!title) {
      return this.movies;
    }

    return this.movies.filter((e) => e.title.startsWith(title));
  }

  getMovieById(id: number) {
    const movie = this.movies.find((e) => e.id === +id);

    if (!movie) {
      throw new NotFoundException('siz qidirgan kino mkavjud emas!!!');
    }
    return movie;
  }

  createMovie(createMovieDto: CreateMovieDto) {
    const movie: Movie = {
      id: this.idCounter++,
      ...createMovieDto,
    };

    this.movies.push(movie);
    return movie;
  }

  updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = this.movies.find((e) => e.id === +id);

    if (!movie) {
      throw new NotFoundException('siz qidirgan kino mkavjud emas!!!');
    }

    Object.assign(movie, updateMovieDto);
    return movie;
  }

  deleteMovie(id: number) {
    const movieIndex = this.movies.findIndex((e) => e.id === +id);

    if (movieIndex === -1) {
      throw new NotFoundException('siz qidirgan kino mkavjud emas!!!');
    }
    this.movies.splice(movieIndex, 1);
    return id;
  }
}
