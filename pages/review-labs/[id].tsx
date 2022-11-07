import Link from "next/link";
import { useRouter } from "next/router";

const ReviewLabs = () => {
    const router = useRouter();
    console.log("router", router);
    return <div>Review Labs{router.query.id}
    <Link href="/"> 
    <a>Back Home</a> 
    </Link>
    <Link href="/review-labs/certain">
        <a>Go to page certain</a>
    </Link>
    </div>
}

export default ReviewLabs;

