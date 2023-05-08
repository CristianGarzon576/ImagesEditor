import { trpc } from "@/utils/trcp";
import { FormEvent } from "react";
import { Button } from "./Button";
import { IImage } from "@/models/models";
import Image from "next/image";

interface EditImageProps {
    image: IImage | null;
    oncancel: () => void;
    onsuccess: (params: any) => void;
}


const EditImage = ({image, oncancel, onsuccess}: EditImageProps) => {
    const mutation = trpc.editImage.useMutation();
    const onsubmit = async (event: FormEvent | undefined) => {
        event?.preventDefault();
        const response = await mutation.mutate({url: image?.image ?? '', newImage: ''})
        onsuccess(response)
        oncancel()
    }

    return (
        <div className="flex justify-center items-center flex-col w-96 pt-5 px-5">
            <div className="h-full flex justify-center items-center mb-6">
                {image && <Image src={image.url} alt={image.alt} width={500} height={500} />}
            </div>
            <div className=" w-full flex justify-between items-center gap-x-2">
                <Button label="Save" onclick={onsubmit}/>
            </div>
        </div>
    )
}

export { EditImage }