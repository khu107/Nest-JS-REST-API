import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseTable } from '../../common/entity/base-table.entity';
import { MovieDetail } from './movie-detail.entity';
import { Director } from 'src/director/entity/director.entity';

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

  @ManyToOne(() => Director, (director) => director.id, {
    cascade: true,
  })
  director: Director;
}

// Enbeding 사용법
// @Column(() => BaseEntity)
// base: BaseEntity;

/*
// @Exclude() - 노출 되고 싶지 않은 값들
// @Expose() -  노출 되는 값들

기본은 - @Exclude() 하고 필요한 property 들을   @Expose() 하면 보이게 될거다.

*/
