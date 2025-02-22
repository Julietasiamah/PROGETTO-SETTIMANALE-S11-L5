import { Button, Col, Row } from "react-bootstrap";
import "../components/MainSection.css";
import { useEffect, useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouritesAction, removeFromFavouritesAction } from "../redux/actions";

const MainSection = () => {
  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [hipHop, setHipHop] = useState([]);

  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);

  const fillMusicSection = async (artistName, songsUpdate) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        const { data } = await response.json();
        songsUpdate(data.slice(0, 4));
      } else {
        alert("Error fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fillMusicSection("queen", setRock);
    fillMusicSection("kattyperry", setPop);
    fillMusicSection("eminem", setHipHop);
  }, []);

  return (
    <Col md={9} className="offset-md-3 mainPage">
      <Row>
        <Col lg={11} className="mainLinks d-none d-md-flex mt-3">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>

        {/* {favourites.length > 0 && (
          <div id="favouritesSection">
            <h2>🎵 Canzoni Preferite</h2>
            <Row>
              {favourites.map((song) => (
                <Col key={song.id} className="mb-3">
                  <img src={song.album.cover_medium} alt={song.title} />
                  <p>{song.title}</p>
                  <Button variant="outline-secondary" onClick={() => dispatch(addToFavouritesAction(song.id))}>
                    <HeartFill color="red" />
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        )} */}

        <Row>
          <Col>
            <div id="rock">
              <h2>Rock Classics</h2>
              <Row className=" imgLinks " id="rockSection">
                {rock.map((song) => {
                  const isFavourite = favourites.some((fav) => fav.id === song.id);

                  return (
                    <Col key={song.id} className="mb-3">
                      <img src={song.album.cover_medium} alt={song.title} />
                      <p>{song.title}</p>
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          isFavourite
                            ? dispatch(addToFavouritesAction(song.id))
                            : dispatch(removeFromFavouritesAction(song))
                        }
                      >
                        {isFavourite ? <HeartFill /> : <Heart />}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="rock">
              <h2>Pop culture</h2>
              <Row className=" imgLinks" id="popSection">
                {pop.map((song) => {
                  const isFavourite = favourites.some((fav) => fav.id === song.id);

                  return (
                    <Col key={song.id} className="mb-3">
                      <img src={song.album.cover_medium} alt={song.title} />
                      <p>{song.title}</p>
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          isFavourite
                            ? dispatch(addToFavouritesAction(song.id))
                            : dispatch(removeFromFavouritesAction(song))
                        }
                      >
                        {isFavourite ? <HeartFill /> : <Heart />}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="rock">
              <h2>Hip Hop</h2>
              <Row className=" imgLinks " id="hipHopSection">
                {hipHop.map((song) => {
                  const isFavourite = favourites.some((fav) => fav.id === song.id);

                  return (
                    <Col key={song.id} className="mb-3">
                      <img src={song.album.cover_medium} alt={song.title} />
                      <p>{song.title}</p>
                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          isFavourite
                            ? dispatch(addToFavouritesAction(song.id))
                            : dispatch(removeFromFavouritesAction(song))
                        }
                      >
                        {isFavourite ? <HeartFill /> : <Heart />}
                      </Button>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

export default MainSection;
