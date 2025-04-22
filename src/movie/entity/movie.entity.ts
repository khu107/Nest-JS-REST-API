// @Expose()
// @Exclude()

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;
}

/*
// @Exclude() - 노출 되고 싶지 않은 값들
// @Expose() -  노출 되는 값들

기본은 - @Exclude() 하고 필요한 property 들을   @Expose() 하면 보이게 될거다.

*/
