import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Post('login')
  login(@Body() body, @Res() res: Response) {
    const { login, password } = body;
    const searchResult = this.appService
      .find(login, password)
      .then((result) => {
        if (result) {
          return res.status(HttpStatus.OK).json({
            message: 'Добро пожаловать!',
            fullName: result,
          });
        } else {
          return res
            .status(HttpStatus.UNAUTHORIZED)
            .json({ message: 'Неправильный пароль или логин' });
        }
      });
  }

  @Post('add')
  add() {
    return this.appService.add();
  }
}
