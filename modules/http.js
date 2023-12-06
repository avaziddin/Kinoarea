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

export async function getNews(path) {
    try {
        const res = await axios.get('https://newsapi.org/v2/everything?q=hollywood&apiKey=e01b196f3fb046bcb795a9ec1cb8b7b3')

        return res
    } catch (e) {
        console.log({ error: e });
    }
}

