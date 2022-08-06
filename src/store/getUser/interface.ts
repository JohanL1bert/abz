import { TLoad } from 'store/getPosition/interface';

export interface ILinks {
  next_url: null | string;
  prev_url: null | string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
}

export interface IUserResponse {
  success: boolean;
  total_pages: number;
  total_users: number;
  count: number;
  links: ILinks;
  users: Array<IUser>;
  page: number;
}

type TUserWithNull<T> = {
  [P in keyof T]: T[P] | null;
};

export type TUserState = TUserWithNull<IUserResponse>;

export interface IUserStore {
  loading: TLoad;
  isStarted: boolean;
  store: TUserState;
  loadStatus(load: TLoad): void;
  upload(data: IUserResponse): void;
  get usersByDate(): Array<IUser>;
}

export interface IUserController {
  uploadUsers(page: number): void;
}

export interface IUserService {
  loadService(load: TLoad): void;
  pagination(data: IUserResponse): void;
}
