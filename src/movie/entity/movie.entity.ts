import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseTable } from './base-table.entity';
import { MovieDetail } from './movie-detail.entity';

@Entity()
export class Movie extends BaseTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @OneToOne(() => MovieDetail, (moviedetail) => moviedetail.id, {
    cascade: true,
  })
  @JoinColumn()
  detail: MovieDetail;

  // Enbeding 사용법
  // @Column(() => BaseEntity)
  // base: BaseEntity;
}
/*
// @Exclude() - 노출 되고 싶지 않은 값들
// @Expose() -  노출 되는 값들

기본은 - @Exclude() 하고 필요한 property 들을   @Expose() 하면 보이게 될거다.

*/
