import { Injectable } from '@nestjs/common';

import { IDataService } from './repositories/interfaces/dataservice.interface';

@Injectable()
export class AppService {
  constructor(private readonly dataService: IDataService) {}

  async getHello(): Promise<any> {
    const user = await this.dataService.users.upsert({
      id: '1',
      email: 'ahmed',
      password: '123456',
    });

    const address = await this.dataService.addresses.upsert({
      id: '1',
      street: 'el mahkama',
      country: 'Egypt',
    });

    return { user, address };
  }
}
