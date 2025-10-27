import Mynav from "../../components/navbar/Mynav";
import { Col, Container, Row } from "react-bootstrap";

import pic from "../../assets/images/pic.svg";
import planing from "../../assets/images/planing.svg";
import math from "../../assets/images/math.svg";
import finance from "../../assets/images/finance.svg";
import computer from "../../assets/images/computer.svg";
import success from "../../assets/images/successpic.svg";

import teacher1 from "../../assets/images/teacher1.jpg";
import teacher2 from "../../assets/images/teacher2.jpg";
import teacher3 from "../../assets/images/teacher3.jpg";
import teacher4 from "../../assets/images/teacher4.jpg";
import teacher5 from "../../assets/images/teacher5.jpg";
import teacher6 from "../../assets/images/teacher6.jpg";
import teacher7 from "../../assets/images/teacher7.jpg";
import teacher8 from "../../assets/images/teacher8.jpg";
import teacher9 from "../../assets/images/teacher9.jpg";

import "./Home.css";
import { useEffect } from "react";

import ScrollReveal from "scrollreveal";
import CourseItem from "../../components/course/CourseItem";
import TeacherCard from "../../components/teacher/TeacherCard";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";

function Home() {
  let courseItems = [
    {
      id: 1,
      picture: planing,
      title: "برنامه ریزی",
    },
    {
      id: 2,
      picture: math,
      title: "ریاضی",
    },
    {
      id: 3,
      picture: computer,
      title: "کامپیوتر",
    },
    {
      id: 4,
      picture: finance,
      title: "حسابداری",
    },
  ];

  let teachers = [
    {
      id: 1,
      picture: teacher1,
      teacher: " هیهاوند",
    },
    {
      id: 2,
      picture: teacher2,
      teacher: " حسین زاده",
    },
    {
      id: 3,
      picture: teacher3,
      teacher: " شیرازی",
    },
    {
      id: 4,
      picture: teacher4,
      teacher: " رضایی",
    },
    {
      id: 5,
      picture: teacher5,
      teacher: " جعفری نیا",
    },
    {
      id: 6,
      picture: teacher6,
      teacher: " یزدانی",
    },
    {
      id: 7,
      picture: teacher7,
      teacher: "محمدی",
    },
    {
      id: 8,
      picture: teacher8,
      teacher: " بهرامی",
    },
    {
      id: 8,
      picture: teacher9,
      teacher: "تقی زاده",
    },
  ];

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
    ScrollReveal().reveal(".course-section", {
      delay: 1000,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".pic-success", {
      origin: "left",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".success-info", {
      delay: 1000,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".success-1", {
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
      delay: 1300,
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".teacher-section h1", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".teacher-section .carousel", {
      delay: 1000,
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
          <Col className="col-12 col-lg-6 mb-5 mt-3">
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

        <Row className="course-section mt-5">
          <h2>دوره های آموزشی</h2>

          {
            // انیمیشن فراموشت نشه *******************************************
            courseItems.map((courseItem) => (
              <Col
                key={courseItem.id}
                className="col-12 col-md-6 col-lg-4 col-xl-3 p-3"
              >
                <CourseItem {...courseItem} />
              </Col>
            ))
          }
        </Row>

        <Row className="success-section mt-5">
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
          <Col className="col-12 col-lg-6 pt-5 pt-md-0 d-flex justify-content-center justify-content-lg-end">
            <img className="pic-success" src={success} />
          </Col>
        </Row>

        <Row className="teacher-section mt-5 d-none d-md-block">
          <h1 className="my-5">اساتید آموزشگاه</h1>
          <div
            id="carouselExample"
            class="carousel slide pe-5"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <Row>
                  <Col className="p-4 d-none d-lg-block">
                    <TeacherCard {...teachers[0]} />
                  </Col>
                  <Col className="p-4 col-6 col-lg-4">
                    <TeacherCard {...teachers[1]} />
                  </Col>
                  <Col className="p-4 col-6 col-lg-4">
                    <TeacherCard {...teachers[2]} />
                  </Col>
                </Row>
              </div>
              <div class="carousel-item">
                <Row>
                  <Col className="p-4 d-none d-lg-block">
                    <TeacherCard {...teachers[3]} />
                  </Col>
                  <Col className="p-4 col-6 col-lg-4">
                    <TeacherCard {...teachers[4]} />
                  </Col>
                  <Col className="p-4 col-6 col-lg-4">
                    <TeacherCard {...teachers[5]} />
                  </Col>
                </Row>
              </div>
              <div class="carousel-item">
                <Row>
                  <Col className="p-4 p-4 d-none d-lg-block">
                    <TeacherCard {...teachers[6]} />
                  </Col>
                  <Col className="p-4 col-6 col-lg-4">
                    <TeacherCard {...teachers[7]} />
                  </Col>
                  <Col className="p-4 col-6 col-lg-4">
                    <TeacherCard {...teachers[8]} />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      <div className="container-fluid start-teaching-section mt-5">
        <Container>
          <div className="start-teaching-info">
            <div>
              <h1>ساختن آینده با دانش پژهش آسونه</h1>
              <h3>فرصت از دست نده همین الان شروع کن!</h3>
            </div>
            <button className="btn-start-teaching-info align-self-lg-start">ثبت نام</button>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Home;
