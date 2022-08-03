import { Controller, Get } from '@nestjs/common';
import { serialize } from 'v8';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  getuser(): string {
    return this.service.getUser();
  }
}
