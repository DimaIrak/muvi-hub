import axios from "axios";

const apiKey = "9d026cf4547a7102e9e8096732f63d75";
const baseURL = "https://api.themoviedb.org/3";

export const getMovieListFromApi = async () => {
    try {
        const response = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.statusText || "Błąd pobierania danych");
    }
};
