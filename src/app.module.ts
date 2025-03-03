import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SqliteDataServiceModule } from './sqllite-dataservice.module';

@Module({
  imports: [SqliteDataServiceModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
