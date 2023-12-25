import {SignIn} from "./sign-in";
import {SignUp} from "./sign-up";

export interface AuthRepository {
  signIn(signIn: SignIn): string;
  signUp(signUp: SignUp): string;
  signOut(): void;
}
