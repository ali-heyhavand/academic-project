import "./About.css";
import Footer from "../../components/footer/Footer";
import Mynav from "../../components/navbar/Mynav";
import { Col, Container, Row } from "react-bootstrap";
import pic from "../../assets/images/pic.svg";
import Map from "../../components/map/Map";

function About() {
  return (
    <>
      <Mynav />
      <Container>
        <Row className="my-5">
          <Col className="col-12 col-lg-6">
            <img className="pic-header" src={pic} />
          </Col>
          <Col className="col-12 col-lg-6 mt-5">
            <div className="box">
              <h1>
                مجموعه برنامه نویسی <br />
                دانش پژوهش
              </h1>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان را پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                قرار گیرد.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="box" style={{margin:"5rem 0"}}>
        <Col className="col-12 col-lg-6 p-3">
          <div>
            <h1>آدرس آموزشگاه</h1>
            <p style={{ lineHeight: "2rem" }}>
              خیابان کاوه ، خیابان خانه اصفهان ، چهار راه فرخ ، نبش کوچه 4 ،
              پلاک 5 ، واحد شماره 3 آموزشگاه فنی دانش پژوهان
            </p>
            <br />
            <div style={{lineHeight:".75rem"}}>
              <p>شماه تماس آموزشگاه : 0313222222</p>
              <p> شماره مدیریت : 091311111111</p>
              <p> ایمیل : alihwk213@gmail.com</p>
            </div>
          </div>
        </Col>
          <Col className="col-12 col-lg-6 p-3">
            <Map/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default About;
