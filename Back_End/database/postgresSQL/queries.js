import { pool } from "./dispatcherdb.js";

const getAllUsers = async () => {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

const getAllPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
}

const setNewUser = async (user) => {
    const id = await pool.query("INSERT INTO users (username, password, isadmin) VALUES ($1, $2, $3) RETURNING id", [user.username, user.password, false]);
    return id;
}

const findUser = async (id) => {
    const { rows } = await pool.query("SELECT * FROM users WHERE id=($1)", [id]);
    return rows;
}

const findUserByName = async (name) => {
    const { rows } = await pool.query("SELECT * FROM users WHERE name=($1)", [name]);
    return rows;
}

export const db = {
    getAllUsers,
    getAllPosts,
    setNewUser,
    findUser,
    findUserByName,
}