import axios from 'axios'
import { toast } from 'sonner'

export const sendUsEmail = async (
  resetStates: React.Dispatch<React.SetStateAction<string>>[],
  userEmail: string,
  username: string,
  message: string,
  phone: string
) => {
  try {
    if (!phone || !userEmail || !username || !message) {
      return toast.error('Vul alle velden in.')
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const validEmail = emailRegex.test(userEmail)

    if (!validEmail) {
      return toast.error('Voer een geldig e-mailadres in.')
    }

    await axios.post('/api/emails', {
      userEmail: userEmail,
      username: username,
      message: message,
      phone: phone,
    })
    toast.success('E-mail is verzonden.')
    resetStates.forEach((setState) => {
      setState('')
    })
  } catch (err) {
    console.error(err)
  }
}
