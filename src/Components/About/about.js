
import React from "react";
import { Container, Nav, Tab ,Row,Col} from "react-bootstrap";
import fonTab from '../../img/fonTab.jpeg'
import fonTab2 from '../../img/fonTab2.jpeg'
import fonTab3 from '../../img/fonTab3.jpeg'
export const About=()=>{
    return(
        <Container>
            <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row> 
            <Col sm={3}>
                <Nav  fill variant="pills" className="flex-column mt-3">
                        <Nav.Item>
                            <Nav.Link eventKey='first' >О компании</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='second'>Формат обучения</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='third' >Что получает студент </Nav.Link>
                        </Nav.Item>
                </Nav>
             </Col> 
             <Col sm={9}>
                 <Tab.Content className="mt-3">
                     <Tab.Pane eventKey="first">
                         <img className='' src={fonTab}/>
                        <h3 className='text-dark '> </h3>
                        <p className='font-italic'>Мы одни из крупных игроков в сфере онлайн образования, свою деятельность мы начали еще 2018 году. Мы предоставляем возможность
                         получить профессии будущего и трудоустроиться. Обучением занимаются преподаватели, имеющие большой практический опыт 
                         и с этой школой держат связь реальные заказчики. У нас можно не только обучаться, но и создавать свои,
                          приватные курсы (вложения – от 2900 руб.), обучая других людей. Обучаться можно как через сайт организации,
                           так и с помощью мобильных приложений через смартфон.

.</p>
                     </Tab.Pane>
                     <Tab.Pane eventKey="second">
                     <img className='' src={fonTab2}/>
                     <h3 >Формат обучения – пошаговые семинары:</h3>
                        <ul>
                            <li><p> Смотрите видеолекцию</p></li>
                            <li><p> Делаете задание</p></li>
                             <li><p>Отправляете его на проверку</p></li>  
                             <li><p>Получаете видеоразбор</p></li>
                             <li><p>Исправляете ошибки</p></li>  
                        </ul>
                     </Tab.Pane>
                     <Tab.Pane eventKey="third">
                     <img className='' src={fonTab3}/>
                     <h3 >После обучения на курсах студент получает:</h3>
                        <ul>
                            <li><p> Уровень профессионала</p></li>
                            <li><p> Портфолио для работы</p></li>
                             <li><p>Стажировку с возможностью трудоустройства</p></li>  
                             <li><p>Доступ к обучающим системам (до конца жизни)</p></li>
                             <li><p>Диплом</p></li>  
                        </ul>
                     </Tab.Pane>
                 </Tab.Content>
             </Col>
        </Row>
            </Tab.Container>
        </Container>
    )
}