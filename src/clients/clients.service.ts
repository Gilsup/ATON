import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './schemas/client.schema';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private clientsModel: Model<Client>) {}
  async get(fullName) {
    return await this.clientsModel.find({ responsible: fullName });
  }

  async updateStatus(props) {
    const { id, status } = props;
    if (
      status === 'В работе' ||
      status === 'Отказ' ||
      status === 'Сделка закрыта'
    ) {
      return await this.clientsModel.findByIdAndUpdate(id, { status: status });
    } else {
      throw new HttpException('Invalid status', HttpStatus.BAD_REQUEST);
    }
  }
}
