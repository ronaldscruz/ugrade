import Role from './Role';

export default interface User {
  id: number;
  email: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
