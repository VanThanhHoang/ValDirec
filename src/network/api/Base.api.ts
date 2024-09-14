import {AxiosResponse, Axios} from 'axios';
import AxiosInstance from '../AxiosInstance';
class BaseApi {
  protected axios: Axios;
  constructor() {
    this.axios = AxiosInstance.getInstance();
  }
  protected async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.get(url);
    return response.data;
  }

  protected async post<T>(url: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.post(url, data);
    return response.data;
  }
}
export default BaseApi;
