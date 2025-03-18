import { Prisma, User } from "@prisma/client";
interface UserParams{
        username: string,
        email: string,
        firstname: string
        lastname: string
}
export interface UsersRepositorie {
    create(data:Prisma.UserCreateInput):Promise<User>
    findOne(email?:string, username?:string):Promise<User | null>
    findById(id:string):Promise<User | null>
    fetchUsers():Promise<UserParams[] | null>
}