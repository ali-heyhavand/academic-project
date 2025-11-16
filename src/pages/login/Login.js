import Mynav from "../../components/navbar/Mynav";
import "./Login.css";
import Footer from "../../components/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";

function Login() {
  return (
    <>
      <Mynav />
      <Container>
        <Row>
          <Col>
            <div className="container-login">
              <div className="login-box">
                <i id="icon-login" class="bx bxs-user-circle"></i>
                <i class="bx bx-user-circle"></i>
                <h1>فرم ورود</h1>
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="ایمیل خود را وارد کنید" />
                    <i class="bx bx-user"></i>
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="رمز عبور را وارد کنید"
                    />
                    <i class="bx bx-lock-alt"></i>
                  </div>
                  <div className="submit-btn">
                    <button>ورود به پنل</button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
