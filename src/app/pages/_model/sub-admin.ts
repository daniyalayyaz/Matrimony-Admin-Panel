import { Role } from "./role";
export class SubAdmin{
    name: string;
    email: string;
    password:string;
    confirmPassword: string;
    Role:Role.Admin;
    acceptTerms: string; 
}