import Api from "./Api";

export const login = async (email, password) => {
	try {
		const result = await Api.post(`/login`, {email, password})
		return result.data;
	} catch (err) {
		throw err 
	}
    
}