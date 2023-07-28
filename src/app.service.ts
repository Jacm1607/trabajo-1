import { Injectable } from '@nestjs/common';
import { UserModel } from './models/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserModel)
    private user: Repository<UserModel>
  ){}

  public index() {
    return this.user.find();
  }

  findOne(id: number): Promise<UserModel | null> {
    return this.user.findOneBy({ id });
  }

  create(): Promise<UserModel> {
    const example = this.user.create({username: 'usuario'});
    return this.user.save(example);
  }

  async remove(id: number): Promise<void> {
    await this.user.delete(id);
  }
  
}
