import { UserStore } from 'store/getUser/userStore';

export class UserService {
  constructor(private readonly store: UserStore) {}
}
