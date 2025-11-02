import "./Home.css";
import Mynav from "../../components/navbar/Mynav";
import { Col, Container, Row } from "react-bootstrap";
import pic from "../../assets/images/pic.svg";
import success from "../../assets/images/successpic.svg";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import CourseItem from "../../components/course/CourseItem";
import TeacherCard from "../../components/teacher/TeacherCard";
import Footer from "../../components/footer/Footer";
import { teachersData, courseItemsData } from "../../Data";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

function Home() {
  let [teachers, setTeachers] = useState(teachersData);
  let [courseItems, setCourseItems] = useState(courseItemsData);

  useEffect(() => {
    ScrollReveal().reveal(".pic-header", {
      origin: "right",
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".box", {
      delay: 500,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".section-course-home-page h1", {
      delay: 1000,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".section-course-home-page p", {
      delay: 1500,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".courses-home-page", {
      delay: 2000,
      origin: "left",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".pic-success", {
      origin: "right",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".success-1", {
      delay: 500,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".success-2", {
      delay: 1000,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".success-3", {
      delay: 1500,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".teacher-section h2", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".teacher-section .mySwiper", {
      delay: 500,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <a className="btn-top" href="#navId">
        <i className="bx bx-chevron-left-circle bx-rotate-90"></i>
      </a>
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

        <Row>
          <Col className="col-12 p-lg-5 col-lg-6 mt-lg-5">
            <div className="section-course-home-page section-course-des">
              <h1>دوره های آموزشگاه</h1>
              <p className="mx-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال دشواری موجود در ارائه
                راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                موجود طراحی اساسا مورد استفاده قرار گیرد.دشواری موجود در ارائه
                راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                موجود طراحی اساسا مورد استفاده قرار گیرد.دشواری موجود در ارائه
                راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </Col>

          <Col className="col-12 p-lg-5 col-lg-6">
            <div className="courses-home-page overflow-hidden">
              <Swiper
                style={{ color: "#fff" }}
                spaceBetween={30}
                autoplay={{
                  delay: 1800,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper p-5"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  }
                }}
              >
                {courseItems.map((item) => (
                  <SwiperSlide className="overflow-hidden rounded-3">
                    <CourseItem {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>

        <Row className="success-section mt-0 mt-lg-5">
          <Col className="col-12 col-lg-6 pt-5 pt-md-0 d-flex justify-content-center justify-content-lg-start">
            <img className="pic-success" src={success} />
          </Col>
          <Col className="col-12 col-lg-6">
            <Row className="success-info">
              <Col className="col-12 py-2 d-none d-xl-block">
                <div className="box success-1">
                  <h3>برترین آموزشگاه سال</h3>
                  <p>
                    للورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                </div>
              </Col>
              <Col className="col-12 py-2">
                <div className="box success-2">
                  <h3>عضو انجمن علمی</h3>
                  <p>
                    للورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است
                  </p>
                </div>
              </Col>
              <Col className="col-12 py-2">
                <div className="box success-3">
                  <h3> مورد تایید سازمان های بین المللی</h3>
                  <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است و مجله در ستون و سطرآنچنان
                    که لازم است
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="teacher-section">
              <h2>اساتید آموزشگاه</h2>
              <Swiper
                style={{ color: "#fff" }}
                spaceBetween={30}
                autoplay={{
                  delay: 1800,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper p-5"
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
                {teachers.map((item) => (
                  <SwiperSlide key={item.id}>
                    <TeacherCard {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="container-fluid start-teaching-section mt-5">
        <Container>
          <div className="start-teaching-info">
            <div>
              <h1>ساختن آینده با دانش پژهش آسونه</h1>
              <h3>فرصت از دست نده همین الان شروع کن!</h3>
            </div>
            <button className="btn-start-teaching-info align-self-lg-start">
              ثبت نام
            </button>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Home;
