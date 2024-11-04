import { Injectable } from '@nestjs/common';

import { IDataService } from './repositories/interfaces/dataservice.interface';

@Injectable()
export class AppService {
  constructor(private readonly dataService: IDataService) {}

  async getHello(): Promise<any> {
    const user = await this.dataService.users.save({
      email: 'ahmed',
      password: '123456',
    });

    return { user };
  }
}
