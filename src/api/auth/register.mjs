import client from "../../db/connect.mjs";
import bcrypt from "bcrypt";
import express  from "express";
const registerRouter = express.Router()

// Define a function for creating a new user
const register = async (request, response) => {
    const { email, password } = request.body;

    // Vérifiez si l'email ou le mot de passe est manquant
    if (!email || !password) {
        return response.status(400).send("L'email ou le mot de passe est manquant");
    }

    // Vérifiez si l'email existe déjà en effectuant une requête SELECT
    const existingUser = await client.query(
        "SELECT * FROM user WHERE email = $1",
        [email]
    );

    // Si l'utilisateur existe déjà, renvoyez une réponse "L'utilisateur existe déjà"
    if (existingUser.rows.length > 0) {
        return response.status(400).send("L'utilisateur existe déjà");
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Write a SQL query to insert the new user into the database
    const result = await client.query(
        "INSERT INTO user (email, password) VALUES ($1, $2) RETURNING *",
        [email, hashedPassword]
    );

    response.status(201).send(`User added with ID: ${result.rows[0].id}`);
};


registerRouter.post('/register', register)

export default registerRouter
