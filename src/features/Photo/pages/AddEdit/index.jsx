import Banner from "components/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/PhotoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { randomNumber } from "utils/common";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editPhoto = useSelector((state) =>
    state.photos.find((x) => x.id === +photoId)
  );

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editPhoto;

  const handleSubmit = (value) => {
    return new Promise((resolve) => {
      console.log("formsubmit", value);

      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...value,
            id: randomNumber(10000, 99999),
          };

          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(value);
          dispatch(action);
        }

        history("/photos/");
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner
        title="Pick your amazing photo"
        backgroundUrl={Images.ORANGE_BG}
      />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          isAddMode={isAddMode}
          initialValues={initialValues}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
