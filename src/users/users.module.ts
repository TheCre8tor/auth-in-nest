import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Identity from 'src/identity/entity/identity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Identity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
