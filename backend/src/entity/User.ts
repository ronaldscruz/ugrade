import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import WithTimestamp from "./WithTimestamp";
import { Role } from "./Role";

@Entity()
export class User extends WithTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @ManyToMany((type) => Role, {
    nullable: false,
    cascade: true,
  })
  @JoinTable()
  roles!: Role[];
}
