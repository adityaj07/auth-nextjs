import { FC } from 'react'

interface pageProps {
  params: any
}

const UserProfile: FC<pageProps> = ({params}) => {
  return <div className='text-black'>Hello user {params.id}</div>
}

export default UserProfile