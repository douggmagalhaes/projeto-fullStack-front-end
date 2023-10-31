import {z} from "zod"

export const AddressSchema = z.object({
  //id: z.string(),
  zipCode: z.string().min(8, "O código postal precisa ter apenas os 8 dígitos.").max(8, "O código postal precisa ter apenas os 8 dígitos."),
  state: z.string().min(2, "O estado precisa conter apenas os 2 caracteres da sigla.").max(2, "O estado precisa conter apenas os 2 caracteres da sigla."),
  city: z.string().min(1, "E preciso passar o nome da cidade.").max(20, "O nome da cidade não pode ter mais que 20 caracteres."),
  street: z.string().min(1,  "E preciso passar o nome da rua.").max(45, "O nome da rua não pode ter mais que 45 caracteres."),
  number: z.string().min(1 , "E preciso passar o número da residência.").max(7, "O número da residência não pode ter mais que 7 dígitos."),
  complement: z.string().min(1, "E preciso passar o complemento do endereço.").max(20, "O completmento não pode possuir mais que 20 caracteres."),
})

//export type RegisterSchemaData = z.infer<typeof RegisterSchema>;
export type AddressSchemaSchemaData = z.infer<typeof AddressSchema>;