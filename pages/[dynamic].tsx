import Head from "next/head";
import { useRouter } from "next/router"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

const DynamicRoute = () => {
    const router = useRouter();
    const query = router.query.dynamic;
    console.log("query", query)
    return <div>
        <Head>
            <title>{query}</title>
        </Head>Hy there i'm a dynamic route: {query}</div>
}

export default DynamicRoute 