/* eslint-disable no-useless-constructor */
import { AxiosResponse } from 'axios';
import { IPositionResponse } from 'store/getPosition/interface';
import { PositionService } from 'store/getPosition/position.service';
import { apiService } from 'common/http.service/api';
import { LoadStatus } from 'common/const/load-status.const';

export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  async uploadPosition() {
    try {
      this.positionService.loadService(LoadStatus.pending);
      const data: AxiosResponse<IPositionResponse, any> = await apiService.get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/positions`
      );
      this.positionService.getPosition(data.data);
      this.positionService.loadService(LoadStatus.done);
    } catch (e) {
      console.log(e);
    }
  }
}
