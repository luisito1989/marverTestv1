import { useEffect, useState } from 'react'
import { Md5 } from 'ts-md5'
import { Container, AvatarContainer, Avatar, Degrade } from '../styled.components'
import { Movie, Item } from '../../interfaces/interfaces'

import BlackWidow from '../../assets/black-widow.png'



const Carousel = (): JSX.Element => {

  const [data, setdata] = useState<Movie[]>([])

  useEffect(() => {
        getData()
      }, [])
  const getData = async (): Promise<void> => {
    const timestamp = new Date().getTime()
    const url = import.meta.env.VITE_BASE_URL
    const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY
    const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY
    const hashRes = Md5.hashStr(timestamp+privateKey+publicKey)
    const consult = `${url}?ts=${timestamp}&apikey=${publicKey}&hash=${hashRes}`
    const items = await fetch(consult)
    const response = await items.json()
    console.log(response)
    const aItems = await response.data.results.map((item: Item) => {
        const obj: Movie = {
            name: item.name,
            description: item.description,
            thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
        }
        return obj
    })
    console.log(aItems)
    setdata(aItems)
  }
  
  return (<>
    { data.length > 0?
    <>
        <Container height={50} src={data[0].thumbnail} />
          <AvatarContainer height={50}>
            <Avatar height={50} src={BlackWidow} />
          </AvatarContainer>
        <Degrade height={50} />
    </>
    : <section className='loading'></section>
    }
    </>)
}

export default Carousel