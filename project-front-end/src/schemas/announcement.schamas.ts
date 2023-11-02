import {z} from "zod"
import { CommentSchema, CommentSchemaData } from "./comment.schemas"
import { imageCreateSchema, ImageSchema } from "./imageSchema"
import { UserSchema } from "./user.schemas"

export const AnnouncementSchema = z.object({
  id: z.string(),
  brand: z.string().min(1, "A marca é obrigatório.").max(50, "A marca deve ter no máximo 50 caracteres."),
  model: z.string().min(1, "O modelo é obrigatório.").max(50, "A marca deve ter no máximo 50 caracteres."),
  year: z.string().min(4, "O ano é obrigatório.").max(50, "O ano deve ter no máximo 50 dígitos."),
  fuel: z.string().min(1, "O combustível é obrigatório.").max(50, "O combustível deve ter no máximo 50 caracteres."),
  km: z.string().min(1, "A quilometragem é obrigatório.").max(50, "A quilometragem deve ter no máximo 50 dígitos."),
  color: z.string().min(1, "A cor é obrigatório.").max(50, "A cor deve ter no máximo 50 caracteres."),
  priceTableFipe: z.string(),
  price: z.string(),
  coverImage: z.string(),
  description: z.string(),
  user: UserSchema,
  image: ImageSchema.array(),
  comments: CommentSchema.array(),
 
})


export const AnnouncementReturn = AnnouncementSchema.extend({image: ImageSchema ,comments: CommentSchema}).array()


export const AnnouncementCreate = AnnouncementSchema.omit({user: true, comments: true, id: true}).extend({image: imageCreateSchema.array(), url_img1: z.string(), url_img2: z.string()})

export const AnnouncementEdite = AnnouncementCreate.deepPartial()

export type AnnouncementData = z.infer<typeof AnnouncementSchema>

export type AnnouncementCreateData = z.infer<typeof AnnouncementCreate>

export type AnnouncementEditeData = z.infer<typeof AnnouncementEdite>

export type AnnouncementReturnData = z.infer<typeof AnnouncementReturn>