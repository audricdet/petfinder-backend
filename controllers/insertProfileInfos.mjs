import client from "../src/db/connect.mjs";
import session from "express-session";

const insertProfileInfos = async (request, response) => {
    const userId = request.session.userId; // Récupère l'ID de l'utilisateur connecté depuis la session
    
    const {
        name,
        lastname,
        email,
        phone,
        adress
    } = request.body;

    await client.query(
        `INSERT INTO profile (name, lastname, email, phone, adress, user_id)
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, lastname, email, phone, adress, userId],
        (error, result) => {
        if (error) {
            throw error;
        } else {
            console.log(result);
            response.send({ result: result });
        }
        }
    );
};

export default insertProfileInfos;