import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta charSet='utf-8' />
        </Head>
    );
}


Meta.defaultProps = {
    title: 'ahmad news',
    description: 'ahmad abd',
    keywords: 'news',
}

export default Meta;