import Link from "next/link";

const ArticleList = (props) => {
    const article = props.article;
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            {props.children}
        </Link>
    );
}

export default ArticleList;