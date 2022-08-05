import { makeAutoObservable } from 'mobx';
import { UserController } from 'store/getUser/user.controller';
import { UserService } from 'store/getUser/user.service';

export class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
}
const getUserStore = new UserStore();
const service = new UserService(getUserStore);
const userController = new UserController(service);

export { getUserStore, userController };
