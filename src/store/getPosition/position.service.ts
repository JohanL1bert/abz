/* eslint-disable no-useless-constructor */
import { PositionStore } from 'store/getPosition/positionStore';
import { TLoad, IPositionService, IPositionResponse } from 'store/getPosition/interface';

export class PositionService implements IPositionService {
  constructor(private readonly store: PositionStore) {}

  loadService(load: TLoad) {
    return this.store.loadStatus(load);
  }

  getPosition(data: IPositionResponse) {
    return this.store.upload(data);
  }
}
