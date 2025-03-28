import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { db } from '../db/index';
import { Roles } from '../roles/roles.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class RolesService {
  async create(createRoleDto: CreateRoleDto) {
    return db.insert(Roles).values(createRoleDto).returning();
  }

  async findAll() {
    return db.select().from(Roles);
  }

  async findOne(id: string) {
    return db.select().from(Roles).where(eq(Roles.id, id)).limit(1);
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    return db.update(Roles).set(updateRoleDto).where(eq(Roles.id, id)).returning();
  }

  async remove(id: string) {
    return db.delete(Roles).where(eq(Roles.id, id)).returning();
  }
}
