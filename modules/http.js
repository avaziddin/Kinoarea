import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL


export async function getData(path) {
    try {
        const res = await axios.get(base_url + path, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
            }
        })

        return res
    } catch (e) {
        console.log({ error: e });
    }
}
