import {z} from "zod"

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  dateOfBirth: z.string(),
  description: z.string(),
  is_seller: z.string(),
  
  //ficou faltando img
})

export type UserSchemaData = z.infer<typeof UserSchema>