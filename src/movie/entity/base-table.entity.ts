import { CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

// Enbeding 사용법 - inhearting 방법
export class BaseTable {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;
}
