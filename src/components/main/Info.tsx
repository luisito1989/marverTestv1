import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { ContainerInfo, MiniAvatar, ButtonBuy } from '../styled.components'
import { Context } from '../../context/AppContext'
import Black from '../../assets/black-widow.png'

const Info = () => {
    const history = useNavigate()
    const { state } = useContext(Context)
    const goToDetails = (): void => {
        history('/details/2')
    }
    return (
    <>
        <ContainerInfo height={50}>
            <section className="icon-info">
                <FaRegPlayCircle size={25} color={'red'}/>
            </section>
            <section className="title-info">
                { state.name }
            </section>
            <section className="details-info">
                <section className="list-info">
                    <div>2020</div>
                    <div>Fantastic</div>
                    <div>{ state.time }</div>
                </section>
            </section>
            <section className="stars">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar />
            </section>
            <section className="description-info">
                <div className="description-title">Plot Summary</div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor, quasi odio voluptatem magni ex molestias incidunt dolorum esse, provident, et voluptatibus non. Cum repellat voluptatem et nulla delectus temporibus.</div>
            </section>
            <section className="description-info">
                <div className="description-title">Cast</div>
                <div className="images">
                    {[1, 2, 3, 4].map(item => <MiniAvatar key={item} src={Black} />)}
                </div>
            </section>
            <section className="button-buy">
                <ButtonBuy onClick={goToDetails}>Comprar</ButtonBuy>
            </section>
        </ContainerInfo>
    </>
    )
}

export default Info