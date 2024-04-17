import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Concert } from './concerts.schema';
import { ConcertsService } from './concerts.service';

@Controller('concerts')
export class ConcertsController {
  constructor(private concertsService: ConcertsService) {}

  /**
   * @description Returns a list of all concerts
   * @return Promise<any>
   * @memberof ConcertsController
   */
  @MessagePattern({ cmd: 'get-concerts' })
  async getConcerts(): Promise<Concert[]> {
    return await this.concertsService.getConcerts();
  }

  /**
   * @description Saves a concert
   * @return Promise<string>
   * @memberof ConcertsController
   */
  @MessagePattern({ cmd: 'save-concert' })
  async saveConcert(concert: any): Promise<string> {
    return await this.concertsService.saveConcert(concert);
  }
}
