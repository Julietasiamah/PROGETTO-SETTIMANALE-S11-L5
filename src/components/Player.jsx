import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "../components/Player.css";
import Shuffle from "../images/shuffle.png";
import Prev from "../images/prev.png";
import Play from "../images/play.png";
import Next from "../images/next.png";
import Repeat from "../images/repeat.png";
// import MainSection from "./MainSection";
// import { useSelector } from "react-redux";

const Player = () => {
  // const selectedSong = useSelector((state) => state.selectedSong.content);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1" id="container-bg">
      <Row className="h-100 ">
        <Col className="lg-10 offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={Prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={Play} alt="playNext" />
                </a>
                <a href="#">
                  <img src={Next} alt="Next" />
                </a>
                <a href="#">
                  <img src={Repeat} alt="Repeat" />
                </a>
              </div>

              <ProgressBar className="mt-3" id="progress-bar" />
            </Col>
            {/* {selectedSong && (
              <Col md={4} className="songDetails mt-3">
                <h4>{selectedSong.title}</h4>
                <p>{selectedSong.artist.name}</p>
              </Col>
            )} */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
