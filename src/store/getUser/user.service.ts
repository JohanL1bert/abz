/* eslint-disable no-useless-constructor */
import { UserStore } from 'store/getUser/userStore';
import { TLoad } from 'store/getPosition/interface';
import { ICreateUser, IUserResponse, IUserService, TErrorMessage } from 'store/getUser/interface';

export class UserService implements IUserService {
  constructor(private readonly store: UserStore) {}

  loadService(load: TLoad) {
    return this.store.loadStatus(load);
  }

  errorService(errMessage: TErrorMessage) {
    return this.store.errorStatus(errMessage.message);
  }

  auth(auth: ICreateUser) {
    return this.store.auth(auth);
  }

  pagination(data: IUserResponse) {
    return this.store.upload(data);
  }
}
