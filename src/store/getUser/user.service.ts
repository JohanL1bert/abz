/* eslint-disable no-useless-constructor */
import { UserStore } from 'store/getUser/userStore';
import { TLoad } from 'store/getPosition/interface';
import { IUserResponse, IUserService } from 'store/getUser/interface';

export class UserService implements IUserService {
  constructor(private readonly store: UserStore) {}

  loadService(load: TLoad) {
    return this.store.loadStatus(load);
  }

  pagination(data: IUserResponse) {
    return this.store.upload(data);
  }
}
