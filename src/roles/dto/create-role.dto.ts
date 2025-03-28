import { IsString, IsUUID } from 'class-validator';

export class CreateRoleDto {
  @IsUUID()
  id?: string;

  @IsString()
  name: string;
}
