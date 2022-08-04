import jwtDecode from 'jwt-decode';
import { createStore } from 'redux';
import { UserModel } from '../models/user.model';

export class AuthState {
  public token: string = null;
  public user: UserModel = null;
}

export enum AuthActionType {
  Register,
  Login,
  Logout,
}

// 3. Action
export interface AuthAction {
  type: AuthActionType;
  payload?: string;
}
// 4. Reducer
export function authReducer(
  currentState = new AuthState(),
  action: AuthAction): AuthState {

  const newState = { ...currentState };

  switch (action.type) {
    case AuthActionType.Register:
    case AuthActionType.Login:
      // Here the payload is the token from the backend
      newState.token = action.payload;
      //npm i jwt-decode --> will extract the user from the token
      const container: { user: UserModel } = jwtDecode(newState.token); // container is kind of an object
      newState.user = container.user;
      localStorage.setItem("token", newState.token)
      break;
    case AuthActionType.Logout:
      newState.token = null;
      newState.user = null;
      localStorage.removeItem("token");
      break;
  }
  return newState;

}

export const authStore = createStore(authReducer);
