import Image from "next/image"
import { Button } from "./Button";
import { IImage } from "@/models/models";

interface ImageProps {
    image: IImage;
    onedit: (imageToEdit: IImage) => void;
    onrequest: (imageToEdit: IImage) => void;
}

export const ImageSection = ({image, onedit, onrequest}: ImageProps) => {
    return (
        <div className="flex justify-center items-center flex-col w-fit h-full p-3">
            <div className="h-full flex justify-center items-center mb-6">
                {image && <Image src={image.url} alt={image.alt} width={500} height={500} />}
            </div>
            <div className=" w-full flex justify-between items-center gap-x-2">
                <Button label="Edit" onclick={() => onedit(image)} />
                <Button label="Request edit" onclick={() => onrequest(image)} />
            </div>
        </div>
    )
}

