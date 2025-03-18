import { UsersRepositorie } from "@/repositories/user-repository";

type UsersParam = {
    username: string,
    email: string,
    firstname: string
    lastname: string
}

interface FetchUsersUseCaseResponse {
    user: UsersParam[] | null
}

export class FetchUsersUseCase {
    constructor(
        private usersRepository: UsersRepositorie
    ){}

    async execute(): Promise<FetchUsersUseCaseResponse> {
        const user = await this.usersRepository.fetchUsers()

        return {
            user,
        }
    }
}