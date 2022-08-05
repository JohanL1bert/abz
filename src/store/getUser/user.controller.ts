import { UserService } from 'store/getUser/user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}
}
