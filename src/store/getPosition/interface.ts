export type TLoad = 'pending' | 'done' | 'error';

export interface IPosition {
  id: number;
  name: string;
}

type TPosWithNull<T> = {
  [P in keyof T]: T[P] | null;
};

export type TPosition = TPosWithNull<IPositionResponse>;

export interface IPositionResponse {
  success: boolean;
  positions: Array<IPosition>;
}

export interface IPositionStore {
  loadingPos: TLoad;
  position: TPosition;
  loadStatus(load: TLoad): void;
  upload(data: any): void;
}

export interface IPositionService {
  loadService(load: TLoad): void;
  getPosition(data: any): void;
}

export interface IPositionController {
  uploadPosition(): void;
}
