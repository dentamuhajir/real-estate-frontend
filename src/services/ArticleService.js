class ArticleService {

    fetchData = async () => {
        try {
            const response = await fetch(
                "https://raw.githubusercontent.com/dentamuhajir/test/refs/heads/master/headline-article.json"
            );
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };
}

const articleServiceInstance = new ArticleService();
export default articleServiceInstance;