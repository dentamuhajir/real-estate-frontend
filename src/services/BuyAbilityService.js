class BuyAbilityService {

    postBuyAbility = async (request) => {
        try {
            const endpoint = 'http://localhost:8081/api/buy-ability';

            const options = {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify({
                    propertyPrice: request[0].propertyPrice,
                    downPayment: request[0].downPayment,
                    monthlyIncome:request[0].monthlyIncome,
                    loanTenure: request[0].loanTenure,
                    annualInterestRate: request[0].annualInterestRate
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
            if(data.code == 200) {
                return data.data;
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };

}

const buyAbilityServiceInstance = new BuyAbilityService();
export default buyAbilityServiceInstance;