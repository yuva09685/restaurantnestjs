import { IsString, IsUUID } from 'class-validator';

export class CreatePermissionDto {
  @IsUUID()
  id?: string;

  @IsString()
  name: string;
}
