import "./Course.css";
import Mynav from "../../components/navbar/Mynav";
import Footer from "../../components/footer/Footer";
import { courseItemsData } from "../../Data";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import CourseItem from "../../components/course/CourseItem";

function Course() {
  let [courseItems, setCourseItems] = useState(courseItemsData);
  let p = useParams().courseId;
  const courseData = courseItems.find((item) => item.id == p);

  console.log(courseData)
  return (
    <>
      <Mynav></Mynav>
      <Container>
        <Row style={{ margin: "6rem 0" }}>
          <Col className="px-5 col-12 col-lg-6">
            <img className="pic-title-course" src={courseData.picture} alt="" />
          </Col>
          <Col className="px-5 col-12 col-lg-6 d-flex ">
            <div className="section-course-des">
              <div className="section-title">
                <h1 className="courser-title">{courseData.title}</h1>
              </div>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، پیوسته اهل دنیای موجود طراحی اساسا
                مورد استفاده قرار گیرد.
              </p>
              <div className="section-buy">
                <h3 className="price-course">تومان {courseData.price} </h3>
                <button>خرید دوره</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="course-section">
              <h1>دوره های آموزشگاه</h1>
              <Swiper
                style={{ color: "#fff" }}
                spaceBetween={30}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper pb-5 pt-2"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {courseItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <CourseItem active="active" {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Course;
