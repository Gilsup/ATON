import {
  Body,
  Controller,
  HttpStatus,
  Patch,
  Get,
  Res,
  Query,
  Post,
} from '@nestjs/common';
import { Response } from 'express';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly appService: ClientsService) {}

  @Get('get')
  get(@Query() props) {
    return this.appService.get(props.responsible);
  }

  @Patch('status')
  updateStatus(@Body() body) {
    return this.appService.updateStatus(body);
  }
}
