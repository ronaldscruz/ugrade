import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import WithTimestamp from "./WithTimestamp";

@Entity()
export class User extends WithTimestamp {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;
}
