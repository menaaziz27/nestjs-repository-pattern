import { Module, Global } from '@nestjs/common';
import { SqliteDataServiceModule } from './sqllite-dataservice.module';

@Global()
@Module({
  imports: [SqliteDataServiceModule],
  exports: [SqliteDataServiceModule],
})
export class DataServiceModule {}
