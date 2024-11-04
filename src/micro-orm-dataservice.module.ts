import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SqliteDriver } from '@mikro-orm/sqlite';

import { IDataService } from './repositories/interfaces/dataservice.interface';
import { GenericDataService } from './repositories/implementations/dataservice.implementation';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      driver: SqliteDriver,
      dbName: 'db.sqlite',
      autoLoadEntities: true,
    }),
  ],
  providers: [
    {
      provide: IDataService,
      useClass: GenericDataService,
    },
  ],
  exports: [IDataService],
})
export class MicroOrmDataServiceModule {}
