import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from 'src/roles/dto/create-role.dto';

@Injectable()
export class PermissionsService {
    create(CreateRoleDto: CreateRoleDto) {
        throw new Error('Method not implemented.');
    }
}
