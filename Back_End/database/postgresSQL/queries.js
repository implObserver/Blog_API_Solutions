import { pool } from "./dispatcherdb.js";

const getAllUsers = async () => {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

const getAllPosts = async () => {
    const { posts } = await pool.query("SELECT * FROM posts");
    return posts;
}

const setNewUser = async (user) => {
    const id = await pool.query("INSERT INTO users (username, password, isadmin) VALUES ($1, $2, $3) RETURNING id", [user.username, user.password, false]);
    return id;
}

const findUser = async (id) => {
    const { user } = await pool.query("SELECT * FROM users WHERE id=($1)", [id]);
    return user;
}

export const db = {
    getAllUsers,
    getAllPosts,
    setNewUser,
    findUser,
}