/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { AxiosResponse } from 'axios';
import { IUserController, IToken, ICreateUser, IUserResponse } from 'store/getUser/interface';
import { UserService } from 'store/getUser/user.service';
import { apiService } from 'common/http.service/api';
import { LoadStatus } from 'common/const/load-status.const';

export class UserController implements IUserController {
  constructor(private readonly userService: UserService) {}

  async uploadUsers(page: number) {
    try {
      this.userService.loadService(LoadStatus.pending);
      const data: AxiosResponse<IUserResponse, any> = await apiService.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      );

      this.userService.pagination(data.data);
      this.userService.loadService(LoadStatus.done);
    } catch (e) {
      console.log(e);
    }
  }

  async getToken() {
    try {
      const token: AxiosResponse<IToken, any> = await apiService.get(
        ` https://frontend-test-assignment-api.abz.agency/api/v1/token`
      );
      return token.data;
    } catch (e) {
      console.log(e);
    }
  }

  async createUser(formData: FormData) {
    try {
      const auth = (await this.getToken()) as IToken;
      const { token } = auth;
      if (token) {
        const data: AxiosResponse<ICreateUser, any> = await apiService.post(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users`,
          formData,
          {
            headers: { Token: token },
          }
        );
        this.userService.auth(data.data);
      }
    } catch (e: any) {
      console.log(e);
      if (e.response.status === 409 || e.response.status === 422) {
        this.userService.loadService(LoadStatus.error);
        this.userService.errorService(e.response.data);
      }
    }
  }
}
