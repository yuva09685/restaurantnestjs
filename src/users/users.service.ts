import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { db } from '../db/index';
import { Users } from './users.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    return (await db.insert(Users).values(createUserDto).returning())[0] || null;
  }

  async findAll() {
    return db.select().from(Users);
  }

  async findOne(id: string) {
    const user = await db.select().from(Users).where(eq(Users.id, id)).limit(1);
    return user[0] || null;
  }

  async findByEmail(email: string) {
    const user = await db.select().from(Users).where(eq(Users.email, email)).limit(1);
    return user[0] || null;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return (await db.update(Users).set(updateUserDto).where(eq(Users.id, id)).returning())[0] || null;
  }

  async remove(id: string) {
    return (await db.delete(Users).where(eq(Users.id, id)).returning())[0] || null;
  }
}
