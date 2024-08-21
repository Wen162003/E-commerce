import axios from "axios";

class CategoryService{
    urlBase='http://localhost:1337/api'

  async  getCategories(){
        try {
            const response = await axios.get(`${this.urlBase}/categories`)
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

export default CategoryService;