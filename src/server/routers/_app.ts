import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  getImages: procedure.query((opts) => {
    return {
      images: [
        {
          "url": "https://images.unsplash.com/photo-1678662054844-350c1b00001c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
          "alt": "Image 1",
          "image": ""
        },
        {
          "url": "https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          "alt": "Image 2",
          "image": ""
        }
      ] 
    }
  }),
  requestEditImage: procedure.input(z.object({
    url: z.string(),
    description: z.string()
  })).query((opts) => {
    return {
      status: 200
    }
  }),
  editImage: procedure.input(z.object({
    url: z.string(),
    newImage: z.string(),
  })).mutation((opts) => {
    return {
      images: [
        {
          url: '',
          alt: '',
          image: '',
        },
        {
          url: '',
          alt: '',
          image: ''
        }
      ]
    }
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
