import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async () => {
    const { users } = await prisma.users.findMany();
    return users;
}

const getAllPosts = async () => {
    const { posts } = await prisma.posts.findMany();
    return posts;
}

const setNewUser = async (user) => {
    const id = await prisma.$queryRaw`INSERT INTO users (name, password, "isAdmin") VALUES (${user.username}, ${user.password}, ${false}) RETURNING id`;
    return id;
}

const findUser = async (id) => {
    const { user } = await prisma.users.findUnique({
        where: { id: id }
    });
    return user;
}

export const prismaDB = {
    getAllUsers,
    getAllPosts,
    setNewUser,
    findUser,
}