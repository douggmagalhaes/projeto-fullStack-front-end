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

//export const ReadUserSchema = UserSchema.omit({user: true, userId: true, createAt: true, id: true, anouncementId: true})

export type UserSchemaData = z.infer<typeof UserSchema>
//export type ReadUserSchemaData = z.infer<typeof UserSchema>