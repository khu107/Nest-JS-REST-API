import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty({ message: 'iltimos tuldiring' })
  genre: string;
}
