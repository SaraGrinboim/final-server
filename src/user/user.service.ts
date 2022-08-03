import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  debugger;
  getUser(): string {
    return 'Sarale & Tamar && ST';
  }
}
