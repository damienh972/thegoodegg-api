import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import dayjs from 'dayjs';


@Injectable()
export class AuthService {
  private currentToken: string = null;
  private tokenExpiration: number = null;

  constructor(private jwtService: JwtService) {}

  async generateToken() {
    const payload = { frontend: 'frontend-app' };

    if (this.currentToken && dayjs().unix() < this.tokenExpiration) {
      return { access_token: this.currentToken };
    }

    this.currentToken = this.jwtService.sign(payload);

    const decodedToken = this.jwtService.decode(this.currentToken) as any;
    this.tokenExpiration = decodedToken.exp;

    return { access_token: this.currentToken };
  }
}
