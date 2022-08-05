export type TLoad = 'pending' | 'done' | 'error';

export interface IPosition {
  id: number;
  name: string;
}

export interface IPositionResponse {
  success: boolean;
  positions: Array<IPosition>;
}

export interface IPositionStore {
  loadingPos: TLoad;
  position: Array<IPosition> | null;
  loadStatus(load: TLoad): void;
  upload(data: any): void;
}

export interface IPositionService {
  loadService(load: TLoad): void;
  getPosition(data: any): void;
}
export interface IPositionController {}
