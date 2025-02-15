import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getToken(): Promise<{
        access_token: string;
    }>;
}
