import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Concert, ConcertDocument } from './concerts.schema';

@Injectable()
export class ConcertsService {
  constructor(
    @InjectModel(Concert.name) private concertModel: Model<ConcertDocument>,
  ) {}

  /**
   * @description Gets all concerts from db
   * @return Promise<Concert[]>
   * @memberof ConcertsService
   */
  async getConcerts(): Promise<Concert[]> {
    return await this.concertModel.find();
  }

  /**
   * @description Saves a concert
   * @param {Concert} concertToInsert
   * @return Promise<string>
   * @memberof ConcertsService
   */
  async saveConcert(concertToInsert: Concert): Promise<string> {
    let msg = 'not saved';
    const concertCheck = await this.checkIfExists(concertToInsert);

    if (!concertCheck) {
      const concertToSave = new this.concertModel(concertToInsert);
      await concertToSave.save();
      return (msg = 'saved');
    } else {
      return msg;
    }
  }

  /**
   * @description Checks if concert exists in db
   * @param {Concert} concertToCheck
   * @return Promise<boolean>
   * @memberof ConcertsService
   */
  private async checkIfExists(concertToCheck: Concert): Promise<boolean> {
    let concertCheck = false;
    const concertToFind = {
      date: concertToCheck.date,
      city: concertToCheck.city,
    };
    const concertFound = await this.concertModel.findOne(concertToFind);
    if (concertFound) {
      concertCheck = true;
    }

    return concertCheck;
  }
}
