import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID wH766vkTEBiHDsDqcp3hV79tFfsNlwUeKVZuXbHg83c'
        },
        params: {
            query: term
        }
    });
    
    return response.data.results;
};

export default searchImages;