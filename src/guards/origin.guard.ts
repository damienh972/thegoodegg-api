import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class OriginGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const allowedOrigins = [
      'http://localhost:5173',
      'https://thegoodegg.on.fleek.co/',
    ];

    const origin = request.headers.origin || request.headers.referer || '';

    return allowedOrigins.includes(origin);
  }
}
