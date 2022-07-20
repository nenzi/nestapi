import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface, LoginInterface } from '../interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): string {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(id: string): string {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUser: UserInterface): Record<string, string> {
    return this.userService.create(createUser);
  }

  @Post()
  login(@Body() loginUser: LoginInterface): Record<string, string> {
    return this.userService.login(loginUser);
  }
}
