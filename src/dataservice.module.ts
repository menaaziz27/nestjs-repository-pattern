import { Module, Global } from '@nestjs/common';

import { MicroOrmDataServiceModule } from './micro-orm-dataservice.module';

@Global()
@Module({
  imports: [MicroOrmDataServiceModule],
  exports: [MicroOrmDataServiceModule],
})
export class DataServiceModule {}
