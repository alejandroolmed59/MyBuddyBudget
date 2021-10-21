import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import { Image, Row, Col, Card, Tag } from "antd";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Row justify="center">
      <Col span={8}>
        <Tag color="#f50">User id: {currentUser.uid}</Tag>
      </Col>
      <Col span={8} >
        <Image.PreviewGroup>
          <Image
            width={200}
            src={`https://avatars.dicebear.com/api/jdenticon/${currentUser.uid}.svg`}
          />
        </Image.PreviewGroup>
      </Col>

      <Col span={8}>
        <Tag color="magenta">{currentUser.displayName}</Tag>
        <Tag color="volcano">{currentUser.email}</Tag>
      </Col>
    </Row>
  );
};

export default Profile;
