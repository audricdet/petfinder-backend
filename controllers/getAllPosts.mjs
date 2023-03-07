import client from '../db/connect';

const getAllPosts = async (request, response) => {
    try {
        const result = await client.query('SELECT * FROM post');
        response.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        response.status(500).send('Erreur serveur');
    }
};

export default getAllPosts;
