import Link from "next/link";
import { useRouter } from "next/router";
import {server} from '../../../config';


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


export const getStaticProps = async (context) => {
    const response = await fetch(`${server}/api/articles/${context.params.id}`);
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}


export const getStaticPaths = async () => {
    const response = await fetch(`${server}/api/articles`);
    const data = await response.json();
    const ids = data.map(d => d.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

// =================================

// export const getServerSideProps = async (context) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const data = await response.json();

//     return {
//         props: {
//             data
//         }
//     }
// }

// =================================

// export const getStaticProps = async (context) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const data = await response.json();

//     return {
//         props: {
//             data
//         }
//     }
// }


// export const getStaticPaths = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const data = await response.json();
//     const ids = data.map(d => d.id);
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default Article;