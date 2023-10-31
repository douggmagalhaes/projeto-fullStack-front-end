import {z} from "zod"
//Image
export const ImageSchema = z.object({
  id: z.string(),
  anouncementId: z.string(),
  url_img: z.string(),
})

export const imageCreateSchema = ImageSchema.omit({id: true, anouncementId: true})

export type ImageSchemaData = z.infer<typeof ImageSchema>