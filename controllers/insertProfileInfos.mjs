import client from "../src/db/connect.mjs";
import session from "express-session";

const insertProfileInfos = async (request, response) => {
    const {
        name,
        lastname,
        email,
        phone,
        adress,
        user_id
    } = request.body;

    if (userId) {
        await client.query(
            `INSERT INTO profile (name, lastname, email, phone, adress, user_id)
            VALUES ($1, $2, $3, $4, $5, $6)`,
            [name, lastname, email, phone, adress, user_id],
            (error, result) => {
            if (error) {
                throw error;
            } else {
                console.log(result);
                response.send({ result: result });
            }
            }
        );
    } else {
        // Handle the case where userId is null
        response.status(400).send({ error: 'No user ID provided' });
    }
};

export default insertProfileInfos;