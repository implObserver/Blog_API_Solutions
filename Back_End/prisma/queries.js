import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async () => {
    const { users } = await prisma.user.findMany();
    return users;
}

const getAllPosts = async () => {
    const { posts } = await prisma.post.findMany();
    return posts;
}

const setNewUser = async (user) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                name: user.username,
                password: user.password,
                isAdmin: false,
            },
        })
        return newUser.id;
    } catch (error) {
        console.log(error)
    }
}

const setToken = async (id, token) => {
    await prisma.user.update({
        where: { id: id },
        data: {
            token: token,
        }
    })
}

const findUser = async (id) => {
    console.log('find')
    const user = await prisma.user.findUnique({
        where: { id: id },
    });
    return user;
}

const findUserByName = async (name) => {
    const user = await prisma.user.findFirst({
        where: { name: name },
        include: {
            profile: true,
        }
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