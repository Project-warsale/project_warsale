export const authMiddleware = async (req: Request) => {
  const { searchParams } = new URL(req.url)
  const password = searchParams.get('pass')
  console.log(password)
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return false
  } else {
    return true
  }
}
