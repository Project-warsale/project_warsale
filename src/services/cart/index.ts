import axios from 'axios'

export const updateProductQty = async (id: number, newQty: number) => {
  try {
    const response = await axios.put('/api/cart', {
      id: id,
      newQty: newQty,
    })

    console.log(response)
  } catch (err) {
    console.error('Error updating quantity', err)
  }
}

export const removeFromCart = async (id: number) => {
  const { data } = await axios.delete(`/api/cart?id=${id}`)

  return data
}
