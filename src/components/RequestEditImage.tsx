import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { trpc } from "@/utils/trcp";
import { IImage } from "@/models/models";

interface RequestEditImageProps {
    image: IImage | null;
    handledOnCancel: () => void;
}

const RequestEditImage = ({image, handledOnCancel}: RequestEditImageProps) => {
    const [request, setRequest] = useState('')
    const onsubmit = (event: FormEvent | undefined) => {
        event?.preventDefault();
        trpc.requestEditImage.useQuery({url: image?.url ?? '', description: request})
    }
    return (
        <div className="flex justify-center items-center flex-col w-96 pt-5 px-5">
            <div className="pb-3">
                <p className="font-bold">{`Request's description`}</p>
            </div>
            <form className="flex justify-center items-center flex-col w-full pb-3">
                <textarea className="w-full" rows={4} onChange={event => setRequest(event.target.value)} placeholder="Description" value={request} />
            </form>
            <div className="flex justify-betweem items-center flex-row w-full gap-x-2">
            <Button label={'Save'} onclick={onsubmit}/>
            <Button label={'Cancel'} onclick={handledOnCancel}/>
            </div>
        </div>
    )
}

export { RequestEditImage }
