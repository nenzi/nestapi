import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interface/user.interface';

@Injectable()
export class UserService {
  findAll(): string {
    return 'This action returns all users';
  }

  create(user: UserInterface): Record<string, string> {

    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.surname = 'Surname';
    user.name = 'Name';
    user.age = 18;
    user.email = 'nonenzy01@gmail.com";
    user.password = '123456';
    
    const n = Math.floor(Math.random() * 100);
    const s = `This action creates a new user and returns it`;
    return {
      hello: 'world',
      message: `This action addd new user ${n} with surname ${s}`,
    };
  }
}
