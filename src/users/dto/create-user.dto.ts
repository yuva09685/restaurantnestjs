import { IsString, IsEmail, IsUUID, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsUUID()
  id?: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsUUID()
  roleId: string;
}
