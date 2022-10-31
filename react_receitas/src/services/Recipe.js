import Api from "./Api";

export const getAllRecipes = async () => {
	try {
		const result = await Api.get(`/recipe`)
		return result.data;
	} catch (err) {
		throw err 
	}
    
}