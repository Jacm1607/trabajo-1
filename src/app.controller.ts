import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Index
  @Get()
  getProduct() {
    return this.appService.index();
  }

  @Post()
  createProduct() {
    return this.appService.create();
  }
}
