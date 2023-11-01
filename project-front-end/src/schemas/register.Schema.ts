import { z } from "zod";
import { AddressSchema } from "./address.schema";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório.").max(50, "O nome deve conter no máximo 50 caracteres."),
    email: z.string().min(1, "O e-mail é obrigatório.").max(100, "O email deve conter no máximo 100 caracteres.").email("Forneça um e-mail válido."),
    cpf: z.string().min(1, "O cpf é obrigatório.").max(11, "O cpf deve conter no máximo 11 caracteres."),
    phone: z.string().min(1, "O Telefone é obrigatório.").max(20, "O Telefone deve conter no máximo 20 dígitos."),
    dateOfBirth: z.string().min(10, "A data é obrigatória."),
    description: z.string().min(1, "A descrição é obrigatório.").max(300, "A descrição deve conter no máximo 300 caracteres."),
    is_seller: z.any(),
    password: z.string().min(7, "A senha precisa conter pelo menos 7 caracteres.").max(128, "A Senha deve conter no máximo 128 caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos 1 letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos 1 letra minúscula.")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos 1 número")
    .regex(/(?=.?[`!@#$%^&()_+\-=[\]{};':"\\|,.<>/?~*])/,"Pelo menos um caracter especial"),
   
    address: AddressSchema
  })
  
  export const RegisterSchemaForCreate = z
  .object({
    name: z.string().min(1, "O nome é obrigatório.").max(50, "O nome deve conter no máximo 50 caracteres."),
    email: z.string().min(1, "O e-mail é obrigatório.").max(100, "O email deve conter no máximo 100 caracteres.").email("Forneça um e-mail válido."),
    cpf: z.string().min(1, "O cpf é obrigatório.").max(11, "O cpf deve conter no máximo 11 caracteres."),
    phone: z.string().min(1, "O Telefone é obrigatório.").max(20, "O Telefone deve conter no máximo 20 dígitos."),
    dateOfBirth: z.string().min(10, "A data é obrigatória."),
    description: z.string().min(1, "A descrição é obrigatório.").max(300, "A descrição deve conter no máximo 300 caracteres."),
    is_seller: z.any(),
    password: z.string().min(7, "A senha precisa conter pelo menos 7 caracteres.").max(128, "A Senha deve conter no máximo 128 caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos 1 letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos 1 letra minúscula.")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos 1 número")
    .regex(/(?=.?[`!@#$%^&()_+\-=[\]{};':"\\|,.<>/?~*])/,"Pelo menos um caracter especial"),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatório."),
    address: AddressSchema
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });


export const RegisterEditeSchema = RegisterSchema.partial()
  
export type RegisterSchemaData = z.infer<typeof RegisterSchemaForCreate>;

export type RegisterEditeSchemaData = z.infer<typeof RegisterEditeSchema>;