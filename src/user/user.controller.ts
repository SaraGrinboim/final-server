import { Controller, Get,Post, Body} from '@nestjs/common';
import { debug } from 'console';
import { User } from 'src/scheamas/user.scheame';
import { serialize } from 'v8';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}
  
  @Post()
  signup(@Body('userName') userName:string, @Body('password') password:string){
    return this.service.signup(userName,password)
  }
  @Get()
  getAll()  {
   return this.service.getAll();
   }
}
