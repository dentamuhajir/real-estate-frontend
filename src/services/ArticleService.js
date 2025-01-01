class ArticleService {

    fetchDataArticleHeadline = async () => {
        try {
            const endpoint = 'http://localhost:8081/api/article/headline';
            const response = await fetch(
                endpoint
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

    fetchDataArticleListByCategories = async () => {
        try { 
            const endpoint = 'http://localhost:8081/api/article/list';
            const response = await fetch(
                endpoint
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


    fetchDataArticleReadpage = async (articleId) => {
        try {
            const endpoint = 'http://localhost:8081/api/article/' + articleId;
            const response = await fetch(
                endpoint
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

const articleServiceInstance = new ArticleService();
export default articleServiceInstance;