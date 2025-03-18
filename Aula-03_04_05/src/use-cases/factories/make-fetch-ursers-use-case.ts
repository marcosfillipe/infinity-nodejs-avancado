import { PrismaUsersRepositorie } from "@/repositories/prisma/prisma-user-repository";
import { FetchUsersUseCase } from "../fetch-users";

export function makeFetchUsersUseCase () {
  const fetchUsersRepository = new PrismaUsersRepositorie()
  const useCase = new FetchUsersUseCase(fetchUsersRepository)
  return useCase
}