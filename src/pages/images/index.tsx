"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { ImageSection } from '../../components/ImageSection';
import { Modal } from '../../components/Modal';
import { RequestEditImage } from '../../components/RequestEditImage';
import { trpc } from '../../utils/trcp';
import { EditImage } from '@/components/EditImage';
import { IImage } from '@/models/models';

enum RenderModal {
  close = 'CLOSE',
  eidt = 'EDIT',
  request = 'REQUEST',
}

const IndexPage = () => {
  const { data } = trpc.getImages.useQuery();
  const [images, setImages] = useState<IImage[]>([]);
  useEffect(() => {
    if (data?.images) {
      console.log(data)
      const newImages = data?.images ?? [];
      setImages(newImages)
    }
  }, [data])

  const [showModal, setShowModal] = useState(RenderModal.close)
  const [image, setImage] = useState<IImage | null>(null)
  const handledOnClose = () => {
    setImage(null)
    setShowModal(RenderModal.close)
  }
  const handledEdit = (imageToEdit: IImage) => {
    setImage(imageToEdit)
    setShowModal(RenderModal.eidt)
  }
  const handledRequestEdit = (imageToEdit: IImage) => {
    setImage(imageToEdit)
    setShowModal(RenderModal.request)
  }

  const renderModal = useCallback(() => {
    switch (showModal) {
      case RenderModal.eidt:
        return(
          <>
            <EditImage oncancel={handledOnClose} onsuccess={setImages} image={image} />
          </>
        )
    
      case RenderModal.request: 
        return (
          <>
            <RequestEditImage handledOnCancel={handledOnClose} image={image} />
          </>
        )
    }
    return null;
  }, [showModal, image])
  return (
    <div className='felx justify-center w-full items-center p-10'>
      <h1 className='font-bold text-xl text-center'>Images</h1>
      <div className='grid grid-cols-3'>
        {
          images && images.length > 0 && (
            images.map((val, index) => <ImageSection key={index} onedit={handledEdit} onrequest={handledRequestEdit} image={val} />)
          )
        }
      </div>

      <Modal onClose={handledOnClose} showModal={showModal !== RenderModal.close}>
        {renderModal()}
      </Modal>
    </div>
  )
}

export default trpc.withTRPC(IndexPage);
