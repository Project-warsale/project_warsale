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
    if (!phone || userEmail || !username || !message) {
      return toast.error('Please fill out all of the fields.')
    }
    await axios.post('/api/emails', {
      userEmail: userEmail,
      username: username,
      message: message,
      phone: phone,
    })
    toast.success('Email has been sent.')
    resetStates.forEach((setState) => {
      setState('')
    })
  } catch (err) {
    console.error(err)
  }
}
