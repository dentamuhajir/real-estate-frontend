class ArticleService {

    fetchData = async () => {
        try {
            const endpoint = 'http://localhost:8080/api/v1/article/headline';
            const response = await fetch(
                endpoint
            );
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };
}

const articleServiceInstance = new ArticleService();
export default articleServiceInstance;