class AuthService {

    userRegistration = async (request) => {
        try {
            const endpoint = 'http://localhost:8081/api/user/register';

            const options = {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify({
                    fullName: request[0].fullName,
                    email: request[0].email,
                    address: request[0].address,
                    idCard: request[0].idCard,
                    password: request[0].password,
                    confirmPassword: request[0].confirmPassword 
                }),
            };

            const response = await fetch(
                endpoint, 
                options
            );

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