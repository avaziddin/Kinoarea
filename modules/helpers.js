import { getData } from "./http";

export async function genresList(ids, genres) {
    
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