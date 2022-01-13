import Link from "next/link";
import { useRouter } from "next/router";

const Article = ({data}) => {
    // const router = useRouter();
    // const {id} = router.query;

    return (
        <>
            <div>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
            <h2>
                <Link href="/">go back</Link>
            </h2>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}

export default Article;