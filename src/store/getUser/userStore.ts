import { makeAutoObservable } from 'mobx';
import { TUserState, IUserStore, IUserResponse, IUser, ICreateUser } from 'store/getUser/interface';
import { LoadStatus } from 'common/const/load-status.const';
import { TLoad } from 'store/getPosition/interface';
import { UserController } from 'store/getUser/user.controller';
import { UserService } from 'store/getUser/user.service';

export class UserStore implements IUserStore {
  loading: TLoad = LoadStatus.pending;
  isStarted: boolean = false;

  isAuth: boolean = false;
  err: string | null = null;

  store: TUserState = {
    count: null,
    links: {
      next_url: null,
      prev_url: null,
    },
    page: null,
    success: null,
    total_pages: null,
    total_users: null,
    users: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  loadStatus(load: TLoad) {
    this.loading = load;
  }

  errorStatus(err: string) {
    this.err = err;
  }

  auth(auth: ICreateUser) {
    this.isAuth = auth.success;
    this.store = {
      count: null,
      links: {
        next_url: null,
        prev_url: null,
      },
      page: null,
      success: null,
      total_pages: null,
      total_users: null,
      users: [],
    };
  }

  upload(data: IUserResponse) {
    let filteredObject;
    const key = 'id';

    if (this.store.users!.length > 0 && this.store.users !== null) {
      const splittedArr = [...this.store.users, ...data.users];
      filteredObject = [
        ...new Map(splittedArr.map((item) => [item[key as keyof typeof item], item])).values(),
      ];
    }
    const copy: Array<IUser> = filteredObject === undefined ? data.users : filteredObject;

    const copyObj = {
      count: data.count,
      page: data.page,
      success: data.success,
      total_pages: data.total_pages,
      total_users: data.total_pages,
      links: { ...this.store.links!, ...data.links },
      users: [...copy],
    };

    this.store = { ...this.store, ...copyObj };
  }

  get usersByDate() {
    return this.store
      .users!.slice()
      .sort((a, b) => b.registration_timestamp - a.registration_timestamp);
  }
}

const getUserStore = new UserStore();
const service = new UserService(getUserStore);
const userController = new UserController(service);

export { getUserStore, userController };
