import React, { useState } from "react";
import useStore from "../Store/Store";
import { Button, Input, Modal } from "antd";
import { MdEdit } from "react-icons/md";

const Show = () => {
  const { firstName, age, gender } = useStore((state) => state.data);
  const data = useStore((state) => state.data);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeEditMode = () => {
    setIsEditMode(!isEditMode);
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    useStore.setState({
      ...data,
      [name]: value,
    });
  };
  return (
    <div className="home">
      <div className="left">
        <img
          src="top.svg"
          alt="top"
          style={{ width: "60%", marginLeft: 100, marginTop: 100 }}
        />
        <img
          src="bottom.svg"
          alt="bottom"
          style={{ width: "100%", marginTop: 100 }}
        />
      </div>
      <div className="right">
        <div className="heading">Information</div>
        <div className="infoSection">
          {isEditMode ? (
            <div className="editView">
              <Input
                type="text"
                value={firstName}
                name="firstName"
                onChange={handleEditChange}
              />
              <Button className="btn" onClick={changeEditMode}>
                X
              </Button>
            </div>
          ) : (
            <div>{firstName}</div>
          )}

          <Button icon={<MdEdit color="#ff4b2b" />} onClick={changeEditMode} />
        </div>
        <div className="infoSection">
          {isEditMode ? (
            <div className="editView">
              <Input
                type="text"
                value={age}
                name="age"
                onChange={handleEditChange}
              />
              <Button className="btn" onClick={changeEditMode}>
                X
              </Button>
            </div>
          ) : (
            <div>{age}</div>
          )}
          <Button icon={<MdEdit color="#ff4b2b" />} onClick={changeEditMode} />
        </div>
        <div className="infoSection">
          {isEditMode ? (
            <div className="editView">
              <Input
                type="text"
                value={gender}
                name="gender"
                onChange={handleEditChange}
              />
              <Button className="btn" onClick={changeEditMode}>
                X
              </Button>
            </div>
          ) : (
            <div>{gender}</div>
          )}
          <Button icon={<MdEdit color="#ff4b2b" />} onClick={changeEditMode} />
        </div>
        <div className="btnContainer">
          <Button className="btn">Save</Button>
          <Button className="btn" onClick={showModal}>
            Preview
          </Button>
          <Modal
            title="All Information"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Name : {firstName}</p>
            <p>Gender : {gender}</p>
            <p>Age : {age}</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Show;
