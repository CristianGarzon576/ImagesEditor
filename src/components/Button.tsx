import Link from "next/link"
import { FormEvent } from "react";

interface LinkButtonProps {
    label: string;
    path: string;
}

const LinkButton = ( {label, path}: LinkButtonProps ) => {
    return (
        <div className="bg-white border-2 border-black box-shadow-link-button hover:shadow-none hover:bg-black hover:text-white rounded-lg h-12 w-full max-w-sm flex justify-center items-center cursor-pointer">
            <Link className="w-full h-full grid place-items-center" href={path}>
                {label}
            </Link>
        </div>
    )
}

interface ButtonProps {
    label: string;
    onclick: (props?: FormEvent) => void
}

const Button = ({ label, onclick}: ButtonProps) => {
    return(
        <div className="bg-white border-2 border-black hover:shadow-none hover:bg-black hover:text-white rounded-lg h-12 w-full max-w-sm flex justify-center items-center cursor-pointer">
            <button className="w-full" onClick={onclick}>
                {label}
            </button>
        </div>
    )
}

export { Button, LinkButton}
