import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'example' })
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isUsed: boolean;

  @Column()
  key: string;

  @Column()
  info: string;
}