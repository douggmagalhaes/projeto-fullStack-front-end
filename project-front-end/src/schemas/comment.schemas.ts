import {z} from "zod"
import { AnnouncementSchema } from "./announcement.schamas"
import { UserSchema } from "./user.schemas"

export const CommentSchema = z.object({
  id: z.string(),
  userId: z.string(),
  anouncementId: z.string(),
  comment: z.string(),
  createAt: z.string(),
  user: UserSchema,
})


export const CreateCommentSchema = CommentSchema.omit({user: true, userId: true, createAt: true, id: true, anouncementId: true})

export const EditeCommentSchema = CreateCommentSchema.partial()

export type CommentSchemaData = z.infer<typeof CommentSchema>

export type CreateCommentData = z.infer<typeof CreateCommentSchema>

export type EditeCommentSchemaData = z.infer<typeof EditeCommentSchema>