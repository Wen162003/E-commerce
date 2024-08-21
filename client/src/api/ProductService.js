import axios from "axios";

class ProductService {
    async getAll(){
        try {
           const response = await axios.get("http://localhost:1337/api/products", {
            params: {
              populate: '*', // Esto incluye todas las relaciones
            },
          });
           return response.data
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default ProductService;