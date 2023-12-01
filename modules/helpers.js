import { getData } from "./http";

export async function genresList(ids) {
    let genres = [];
    let response = await getData("/genre/movie/list");
    for (const genre of response.data.genres) {
        genres.push(genre);
    }

    let returnNames = [];

    for (const id of ids) {
        for (const genre of genres) {
            if (genre.id == id) {
                returnNames.push(genre.name);
            }
        }
    }

    return returnNames;

}