import client from '../src/db/connect.mjs';


const getProfileInfos = (request, response) => {
    const id = request.params.id

    client.query("SELECT * FROM profile WHERE id = $1",
        [id],
        (error, result) => {
        if (error) {
            response.status(500).json({
                error
            });
        } else {
            response.status(200).json(result.rows);
        }
    });
};

export default getProfileInfos;