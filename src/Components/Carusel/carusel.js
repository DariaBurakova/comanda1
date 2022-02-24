import React from "react";
import Carousel  from "react-bootstrap/Carousel";
import fon2 from '../../img/fon2.jpeg'
import fon3 from '../../img/fon3.jpeg'
import fon4 from '../../img/fon4.jpeg'
export const Carusel=()=>{
    return(
        <Carousel >
            <Carousel.Item>
                <img className='d-block w-100 ' src={fon2} alt='img'/>

           
            <Carousel.Caption>
                <h2 className='text-white font-italic'>Помогаем построить карьеру мечты</h2>
            <p>Вас ждёт индивидуальная карьерная консультация, помощь в оформлении резюме и портфолио.
                 На основе ваших пожеланий подберём подходящие вакансии, подготовим к собеседованию и сделаем всё, чтобы вы получили оффер.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={fon3} alt='img'/>

            
            <Carousel.Caption>
                <h2 className='text-white font-italic'>Мы всегда найдем оптимальный путь решения</h2>
            <p>За 2021 год мы трудоустроили более 1000 специалистов на работу по новой профессии</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={fon4} alt='img'/>

            
            <Carousel.Caption>
                <h2 className='text-white font-italic'>Поможем в трудоустройстве</h2>
            <p>Трудоустроим или вернём деньги
Вас ждёт индивидуальная поддержка HR-специалиста. Вместе вы составите резюме, подготовите портфолио и разработаете карьерный план, 
который поможет найти работу быстрее. 
Сможете выбрать привлекательные вакансии и получите приоритет перед другими соискателями.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}