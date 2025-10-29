import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CourseItem.css"
import { Link } from 'react-router-dom';

function CourseItem({picture , title , id , active}) {
    

    return(
        <>
        <Card  style={{color:"#fff", backgroundColor:"#393E46"}} className={`p-3 rounded-4 card-course ${active}`}>
        <Card.Img className='card-img' variant="top" src={picture} />
        <Card.Body className='mt-2'>
            <Card.Title className=' mb-3 fw-bold'>{title}</Card.Title>
            <Card.Text>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها وای شرایط فعلی تکنولوژی مورد نیاز
            </Card.Text>
                <Link to={`/courses/${id}`}>
                    <Button className='btn fw-bold' style={{backgroundColor:"#DFD0B8", color:'#393E46', border:'none'}}>خرید دوره</Button>
                </Link>
        </Card.Body>
        </Card>
        </>
    )
}

export default CourseItem