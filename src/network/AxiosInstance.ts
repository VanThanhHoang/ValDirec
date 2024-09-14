import axios, {Axios} from 'axios';
class AxiosInstance {
  private static instance: Axios;
  protected constructor() {}
  public static getInstance(): Axios {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: 'https://valorant-api.com/v1/',
        timeout: 1000,
      });
    }
    return this.instance;
  }
}
export default AxiosInstance;
