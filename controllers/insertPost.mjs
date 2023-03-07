import client from "../src/db/connect.mjs";

const insertPost = async (request, response) => {
    const {
        description,
        photo,
        location,
        category_id,
        animal_id,
        profile_id
    } = request.body;

    try {
        const result = await client.query(
            `INSERT INTO post (
            description,
            photo,
            location,
            category_id,
            animal_id,
            profile_id
            ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
            [description, photo, location, category_id, animal_id, profile_id]
        );

        const postId = result.rows[0].id;

        response.status(201).json({ id: postId });
        } catch (error) {
            console.error(error);
            response.status(500).json({ error: 'Internal server error' });
        }
};

export default insertPost
