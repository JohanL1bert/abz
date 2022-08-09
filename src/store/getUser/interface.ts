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
  auth(auth: ICreateUser): void;
  upload(data: IUserResponse): void;
  get usersByDate(): Array<IUser>;
}

export interface IUserController {
  uploadUsers(page: number): void;
  getToken(): void;
  createUser(formData: FormData): void;
}

export interface IUserService {
  loadService(load: TLoad): void;
  auth(auth: ICreateUser): void;
  pagination(data: IUserResponse): void;
}

export interface IToken {
  success: boolean;
  token: string;
}

export interface ICreateUser {
  message: string;
  success: boolean;
  user_id: number;
}

export type TErrorMessage = Pick<IToken, 'success'> & { message: string };
