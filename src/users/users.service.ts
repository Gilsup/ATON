import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usersModel: Model<User>) {}
  async find(login, password) {
    const searchResult = await this.usersModel.findOne({
      login: login,
      password: password,
    });
    return searchResult != null ? searchResult.Full_name : false;
  }
  async add() {
    const fio = [
      'Васильева Александра Ивановна',
      'Яковлев Александр Иванович',
      'Колесникова Дарья Андреевна',
      'Шмелев Анатолий Дмитриевич',
      'Лазарева Ульяна Артёмовна',
      'Спиридонов Максим Ярославович',
      'Осипова Мария Никитична',
      'Панкратова Александра Ивановна',
    ];

    for (let i = 3; i < fio.length + 3; i++) {
      const data = await this.usersModel.create({
        Full_name: fio[i - 3],
        login: `user${i}`,
        password: `user${i}`,
      });
    }

    return await this.usersModel.find();
  }
}
