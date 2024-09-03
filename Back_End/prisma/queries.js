import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dropUsers = async (id) => {
    const users = await prisma.user.findMany({})
    const comments = await prisma.comment.findMany({})
    const profiles = await prisma.profile.findMany({})
    const posts = await prisma.post.findMany({})
    //await prisma.$queryRaw('DROP schema users CASCADE')
    console.log(users)
    console.log(comments)
    console.log(profiles)
    console.log(posts)
}

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
    console.log(id)
    const posts = await prisma.post.findMany({
        where: { userId: id },
    });
    return posts;
}

const addPost = async (user, title) => {
    const defaultElements = [{
        id: 0,
        type: 'main_title',
        value: '',
        fontSize: 1,
    },
    {
        id: 1,
        type: 'preview',
        imageUrl: '',
    },
    {
        id: 2,
        type: 'text',
        value: '',
    }];

    try {
        await prisma.post.create({
            data: {
                title,
                user: {
                    connect: { id: user.id },
                },
                elements: defaultElements,
            }
        })
    } catch (error) {
        console.log(error)
    }

}

const updateModels = async (data) => {
    const id = data.id;
    const models = data.models;
    console.log('noooo')
    try {
        const updatedModels = await prisma.post.update({
            where: {
                id: id,
            },
            data: {
                elements: {
                    set: models,
                },
            },
        });
    } catch (error) {
        console.log(error)
    }
}

const updatePost = async (user, post) => {
    try {
        const postObj = {
            title: post.title,
            isPublished: post.isPublished,
            postingDate: post.postingDate,
            tag: post.tag,
            elements: post.elements,
        }
        const updatedPost = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                posts: {
                    update: [
                        {
                            where: { id: post.id }, // Укажите ID поста для обновления
                            data: postObj,
                        },
                    ],
                },
            },
        });
    } catch (error) {
        console.log(error)
    }
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
    addPost,
    dropUsers,
    updatePost,
    updateModels,
}