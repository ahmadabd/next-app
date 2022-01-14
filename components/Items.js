import ArticleList from "./ArticleList";

const Items = ({articles}) => {

    return (
        <>
        {articles.map(article => (
            <ArticleList key={article.id} article={article}>
              <div>
                <a>{article.title}</a>
              </div>
            </ArticleList>
          ))}
        </>
    );
}

export default Items;