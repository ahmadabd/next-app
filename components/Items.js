import ArticleList from "./ArticleList";

const Items = ({articles}) => {

    return (
        <>
        {articles.map(article => (
            <ArticleList article={article}>
              <div>
                <a key={article.id}>{article.title}</a>
              </div>
            </ArticleList>
          ))}
        </>
    );
}

export default Items;