import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';


@Module({
    providers: [UsersService],
    controllers: [UsersController],
})

export class UsersModule {}

