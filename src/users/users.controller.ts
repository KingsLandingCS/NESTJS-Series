import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users") // /users
export class UsersController {

  constructor(private readonly usersService: UsersService) { }
  @Get() //GET /users or /users?role=value
  findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN") {
    return this.usersService.findAll(role);
  }

  @Get(":id") //GET /users/:id
  findOne(@Param("id") id: number) {
    return this.usersService.findOne(id);
  }

  @Post() // Post /users
  create(@Body() userUserDto: CreateUserDto) {
    return this.usersService.create(userUserDto);
  }

  @Patch(":id") //PATCH /users/:id
  update(@Param("id", ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id") //Delete /users/:id
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
