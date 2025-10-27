import { Card } from "react-bootstrap"

function TeacherCard({picture , teacher}) {
    return(
        <>
        <Card className="rounded-4" style={{ width: '18rem', backgroundColor: "#DFD0B8", overflow:"hidden"}}>
            <Card.Img variant="top" src={picture} style={{maxHeight: '350px'}}/>
            <Card.Body>
                <Card.Title style={{fontFamily:"Lalezar", fontSize:"2rem"}}>استاد{teacher}</Card.Title>
                <Card.Text>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default TeacherCard