import "./Courses.css";
import { Col, Container, Row } from "react-bootstrap";
import Mynav from "../../components/navbar/Mynav";
import { useState } from "react";
import { courseItemsData } from "../../Data";
import CourseItem from "../../components/course/CourseItem";
import Footer from "../../components/footer/Footer";
function Courses() {
  const [allcourses, setAllCourses] = useState(courseItemsData);
  const [courseItems, setCourseItem] = useState(courseItemsData);
  const [searchkey, setSearchKey] = useState("");
  const [sortType, setSortType] = useState("");
  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };
  const searchBtnhandler = () => {
    const searchData = allcourses.filter((item) =>
      item.title.includes(searchkey)
    );
    setCourseItem(searchData);
  };

  const sortHandlerLatest = () => {
    const sorted = [...courseItems].sort((a, b) => b.id - a.id);
    setCourseItem(sorted);
  };
  const sortHandlerNewest = () => {
    const sorted = [...courseItems].sort((a, b) => a.id - b.id);
    setCourseItem(sorted);
  };
  const sortHandler = (e) => {
    const type = e.target.id;

    const toNum = (price) => Number(price.replaceAll("/", ""));

    let sorted = [...courseItems];

    if (type === "expensive") {
      sorted.sort((a, b) => toNum(b.price) - toNum(a.price));
    }

    if (type === "cheapest") {
      sorted.sort((a, b) => toNum(a.price) - toNum(b.price));
    }

    setCourseItem(sorted);
  };
  return (
    <>
      <Mynav />
      <Container className="my-3">
        <Row className="mt-5">
          <h2 className="courses-title">دوره ها</h2>
          <Col className="col-12 col-lg-3 mt-3">
            <div className="filter-section">
              <div className="search-section">
                <input
                  className="search-input"
                  type="text"
                  placeholder="نام دوره ..."
                  onChange={searchInputHandler}
                />
                <button onClick={searchBtnhandler}>جستجو</button>
              </div>
              <div className="d-flex align-items-center mt-1 ms-2">
                <input
                  id="newest"
                  type="radio"
                  name="sort"
                  onChange={sortHandlerNewest}
                />
                <label className="ms-2" htmlFor="newest">
                  تازه ترین
                </label>
              </div>
              <div className="d-flex align-items-center mt-2 ms-2">
                <input
                  id="latest"
                  type="radio"
                  name="sort"
                  onChange={sortHandlerLatest}
                />
                <label className="ms-2" htmlFor="latest">
                  قدیمی ترین
                </label>
              </div>
              <div className="d-flex align-items-center mt-2 ms-2">
                <input
                  id="expensive"
                  type="radio"
                  name="sort"
                  onChange={sortHandler}
                />
                <label className="ms-2" htmlFor="expensive">
                  گران ترین
                </label>
              </div>
              <div className="d-flex align-items-center mt-2 ms-2">
                <input
                  id="cheapest"
                  type="radio"
                  name="sort"
                  onChange={sortHandler}
                />
                <label className="ms-2" htmlFor="cheapest">
                  ارزان ترین
                </label>
              </div>
            </div>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row>
              {courseItems.map((courseItem) => (
                <Col
                  className="col-12 col-md-6 col-lg-4 py-3"
                  key={courseItem.id}
                >
                  <CourseItem {...courseItem} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Courses;
