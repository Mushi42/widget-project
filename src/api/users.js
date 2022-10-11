import axios from 'axios';
import { BASE_URL } from '../constant';

export default class Api {
  static jsonify = (payload) => JSON.stringify(payload);

  static sendOtpMail(email) {
    var config = {
      method: 'post',
      url: BASE_URL + '/stytch/sendOtpMail',
      headers: {
        'Content-Type': 'application/json',
      },
      data: this.jsonify({ email }),
    };
    return axios(config);
  }
}
