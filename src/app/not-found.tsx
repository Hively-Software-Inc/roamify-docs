import {NotFoundPage} from "nextra-theme-docs";
import Link from "next/link";

export default function NotFound() {
    return (
        <NotFoundPage>
            <button className={"cursor-pointer"}>
                <Link href={"/"}>
                Go Back
                </Link>
            </button>
        </NotFoundPage>
    )
}