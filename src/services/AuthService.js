class AuthService {

    userRegistration = async (request) => {
        try {
            console.log(request)
            return;
            const endpoint = 'http://localhost:8081/api/user/register';

            const options = {
                method: "POST",
                body: request, 
                credentials: "include", 
            };

            const response = await fetch(
                endpoint, 
                options
            );

            console.log(response)

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();

            console.log(data)
            if(data.code == 200) {
                return data.data;
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };

}

const AuthServiceInstance = new AuthService();
export default AuthServiceInstance;