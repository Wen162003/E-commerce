import { API_URL } from "../utils/constants";

export async function registerApi(formData) {
  try {
    // endpoint que usa strappi
    const url = `${API_URL}/auth/local/register`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // volver el objeto en string
      body:JSON.stringify(formData),
    };
   const response = await fetch(url, params);
   const result = await response.json();
   return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function loginApi(formData) {
  try {
    const url = `${API_URL}/auth/local`;
    const params = {
        method: "POST",
        headers:{ 
          "content-Type": "aplication/json",   
        },
        body: JSON.stringify(formData),
    }
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
