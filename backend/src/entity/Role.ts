import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";

import WithTimestamp from "./WithTimestamp";

@Entity()
export class Role extends WithTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
