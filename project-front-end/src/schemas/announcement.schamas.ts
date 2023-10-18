import {z} from "zod"
import { UserSchema } from "./user.schemas"

export const AnnouncementSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
  km: z.string(),
  color: z.string(),
  priceTableFipe: z.string(),
  price: z.string(),
  coverImage: z.string(),
  description: z.string(),
  user: UserSchema
  //ficou faltando img
})

export type AnnouncementData = z.infer<typeof AnnouncementSchema>