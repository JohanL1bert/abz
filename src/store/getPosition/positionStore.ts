import { makeAutoObservable } from 'mobx';
import { IPositionStore, TLoad, TPosition, IPositionResponse } from 'store/getPosition/interface';
import { PositionController } from 'store/getPosition/position.controller';
import { PositionService } from 'store/getPosition/position.service';
import { LoadStatus } from 'common/const/load-status.const';

export class PositionStore implements IPositionStore {
  loadingPos: TLoad = LoadStatus.pending;

  position: TPosition = {
    success: false,
    positions: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  loadStatus(load: TLoad) {
    this.loadingPos = load;
  }

  upload(data: IPositionResponse) {
    this.position = { ...data };
  }
}

const getPositionStore = new PositionStore();
const service = new PositionService(getPositionStore);
const positionController = new PositionController(service);

export { getPositionStore, positionController };
