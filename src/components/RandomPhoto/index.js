import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBLur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBLur: null,
};

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
  const { name, imageUrl, onRandomButtonBLur, onImageUrlChange } = props;

  const handleRandomPhotoClick = () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBLur}
          onClick={handleRandomPhotoClick}
        >
          Random Photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img
            onError={handleRandomPhotoClick}
            src={imageUrl}
            alt="ooop... not found"
          />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
