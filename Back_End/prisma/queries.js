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

        await prisma.profile.create({
            data: {
                user: {
                    connect: newUser,
                },
                avatar: `public/images/${newUser.id}/avatar/`,
            }
        })

        return newUser.id;
    } catch (error) {
        console.log(error)
    }
}

const updateAvatar = async (id) => {
    const result = await prisma.profile.update({
        where: { userId: id },
        data: {
            avatar: `public/images/${id}/avatar/`,
        }
    })

    console.log('wtf')
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
        include: {
            profile: true,
            posts: true,
        },
    });
    return user;
}

const findUserByName = async (name) => {
    const user = await prisma.user.findFirst({
        where: { name: name },
        include: {
            profile: true,
            posts: true,
        }
    });
    return user;
}

const findProfile = async (id) => {
    const profile = await prisma.profile.findUnique({
        where: { userId: id },
    });
    return profile;
}

const findPosts = async (id) => {
    const posts = await prisma.post.findMany({
        where: { userId: id },
    });
    return posts;
}

export const prismaDB = {
    getAllUsers,
    getAllPosts,
    setNewUser,
    findUser,
    findUserByName,
    setToken,
    findProfile,
    findPosts,
    updateAvatar,
}