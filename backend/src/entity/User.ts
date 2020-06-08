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

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @ManyToMany((type) => Role)
  @JoinTable()
  roles: Role[];
}
