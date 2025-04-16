import { Injectable, NotFoundException } from '@nestjs/common';

export interface Movie {
  id: number;
  title: string;
}

@Injectable()
export class AppService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'tuylar muborak',
    },
    {
      id: 2,
      title: 'chimildiq',
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

  createMovie(title: string) {
    const movie: Movie = {
      id: this.idCounter++,
      title: title,
    };

    this.movies.push(movie);
    return movie;
  }

  updateMovie(id: number, title: string) {
    const movie = this.movies.find((e) => e.id === +id);

    if (!movie) {
      throw new NotFoundException('siz qidirgan kino mkavjud emas!!!');
    }

    Object.assign(movie, { title });
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
