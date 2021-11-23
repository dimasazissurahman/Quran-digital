import axios from "axios"

export const GetSurah = async (props?: string) => {
    if(!props) props='';
    try {
        const res = await axios.get(`https://api.quran.sutanlab.id/surah${props}`);
        return res;
    } catch (error) {
        throw error;
    }
}