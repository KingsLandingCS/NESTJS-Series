import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types";
import 


export class UpdateUserDto extends PartialType(CreateUserDto) { }
