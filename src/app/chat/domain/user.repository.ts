import { Page } from "../../common/domain/page";
import { User } from "./user";

export interface UserRepository {
  getAll(): Page<User>;
  getById(id: number): User;
  getCurrentUser(): User;
}
