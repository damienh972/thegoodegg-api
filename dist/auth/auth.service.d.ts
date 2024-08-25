import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private currentToken;
    private tokenExpiration;
    constructor(jwtService: JwtService);
    generateToken(): Promise<{
        access_token: string;
    }>;
}
