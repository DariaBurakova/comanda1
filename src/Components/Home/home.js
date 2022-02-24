
import React from "react";
import { Container,Button,Card, CardGroup} from "react-bootstrap";
import {Carusel} from '../Carusel/carusel.js'
import project2 from '../../img/project2.jpeg'
import project3 from '../../img/project3.jpeg'
import project5 from '../../img/project5.jpeg'
import { Footer} from "../Footer/footer.js";
export const Home=()=>{
  
        return(
            <>
            <Carusel/>
            <Container>
<h3 className="text-center   m-4">Отзывы наших студентов</h3>
<CardGroup>
<Card style={{ margin: '10px' }} >
<Card.Img variant="top" src={project3}/>
<Card.Body>
<Card.Title><p className='text-black'>Василий Жуковский, г.Санкт-Петербург</p></Card.Title>
<Card.Text><p className='text-black'>Я начинал учить Python с нуля самостоятельно. Искал уроки на Ютубе, качал учебники с рутрекера,
     записывался на все вебинары и был очень внимательным. Но ничего не получалось. Я в какой-то момент просто зашел в тупик...И моим спасением сдал данный курс!</p></Card.Text>
</Card.Body>
</Card>
<Card style={{ margin: '10px' }}>
<Card.Img variant="top" src={project5}/>
<Card.Body>
<Card.Title><p className='text-black'>Наталья Яковлева, г.Череповец</p></Card.Title>
<Card.Text><p className='text-black'>Очень нравится то, что полученные знания можно сразу применить на деле. Считаю данное  местом  идеально для тех, кто ведет свои интернет-проекты, 
    но не имеет должной подготовки в веб-разработке.
</p></Card.Text>
</Card.Body>
</Card>
<Card style={{ margin: '10px' }} >
<Card.Img variant="top" src={project2}/>
<Card.Body>
<Card.Title><p className='text-black'>Михаил Асенов, г. Набережные Челны</p></Card.Title>
<Card.Text><p className='text-black'>Данная образовательная площадка будет полезена тем, кто решил в корне сменить профессию, сферу и изменить свою жизнь, а
     также понять, как можно получить новую профессию без изнурительного взаимодействия с академической системой.
</p></Card.Text>
</Card.Body>
</Card>
</CardGroup>
            </Container>
          
            </>
        )
    
}