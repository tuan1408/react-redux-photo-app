import React from "react";
import PropTypes from "prop-types";
import Banner from "components/Banner";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/PhotoSlice";

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleEditClick = (photo) => {
    console.log("edit", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history(editPhotoUrl);
  };

  const handleRemoveClick = (photo) => {
    const removeId = photo.id;
    const action = removePhoto(removeId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Amazing photo" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="add">Add new photo</Link>
        </div>

        <PhotoList
          onPhotoRemoveClick={handleRemoveClick}
          onPhotoEditClick={handleEditClick}
          photoList={photos}
        />
      </Container>
    </div>
  );
}

export default MainPage;
