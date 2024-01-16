import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Identity from 'src/identity/entity/identity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Identity)
    private readonly repository: Repository<Identity>,
  ) {}
}
