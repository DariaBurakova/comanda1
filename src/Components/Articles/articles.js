
import React , { useState }from "react";
import { Container,Button,Card, CardGroup,Row} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const catalogCourse = [
    {
        id: uuidv4(),
        name: 'Программирование, Data Science и DevOps',
    },
    {
        id: uuidv4(),
        name: 'Сети и компьютерная безопасность',
    },
    {
        id: uuidv4(),
        name: '1C, Бухгалтерский учет, налогообложение, МСФО',
    },
    {
        id: uuidv4(),
        name: 'Excel и бизнес-аналитика',
    },
    {
        id: uuidv4(),
        name: 'Веб-технологии',
    },
    {
        id: uuidv4(),
        name: 'Менеджмент, маркетинг, продажи',
    },
    {
        id: uuidv4(),
        name: 'Курсы по офисным программам',
    },
];
export const Articles=()=>{
    const [courses,setCourses]=useState(catalogCourse)
    return(
      <>
        <Container>
            {courses.map((item)=>
            
                <Card style={{ margin: '10px'}}>
                <Card.Body>
        <Card.Title><p className='text-black'>{item.name}</p></Card.Title>
        <Card.Text>
     <p className='text-black'> Программа курса рассчитана на годичное обучение. Первый блок – Веб-дизайн с 0, второй – PRO. 
     После обучения студент выполняет работу по брифу заказчика. 
     Успешный проект позволит получить приглашение на стажировку.</p>
    </Card.Text>
            </Card.Body>
                <Button variant="outline-secondary" style={{margin:'10px'}}>Подробнее</Button>
                </Card>
            
            )}  
      </Container>
      </>
    )
}