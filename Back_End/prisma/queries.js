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
    return id[0].id;
}

const setToken = async (id, token) => {
    console.log(`id: ${id}`)
    console.log(`token: ${token}`)
    await prisma.users.update({
        where: { id: id },
        data: {
            token: token,
        }
    })
}

const findUser = async (id) => {
    const user = await prisma.users.findUnique({
        where: { id: id }
    });
    return user;
}

const findUserByName = async (name) => {
    const user = await prisma.users.findFirst({
        where: { name: name }
    });
    return user;
}

export const prismaDB = {
    getAllUsers,
    getAllPosts,
    setNewUser,
    findUser,
    findUserByName,
    setToken,
}