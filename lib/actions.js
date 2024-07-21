'use server'
 
import { z } from 'zod'
 
const schema = z.object({
  username: z.string({
    invalid_type_error: 'Invalid username',
  }),
})
 
export default async function createsUser(formData) {
  
    const validatedFields = schema.safeParse({
    username: formData.get('username'),
  })
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Mutate data
}