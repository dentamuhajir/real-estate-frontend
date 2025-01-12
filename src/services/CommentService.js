class CommentService {

    postCommentData = async (comment, articleId) => {
        try {
            const endpoint = 'http://localhost:8081/api/comment/post';

            const options = {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json;charset=UTF-8",
                },
                body: JSON.stringify({
                  comments:comment,
                  articleId: articleId
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

const commentServiceInstance = new CommentService();
export default commentServiceInstance;