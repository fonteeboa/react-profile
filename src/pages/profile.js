import React from 'react';
import { Col, Row, Breadcrumb, Typography } from "antd";
import ScrollIndicator from '../common/components/common/scrollIndicator';
import avatar from '../common/images/avatar-coffe.png';


const { Paragraph } = Typography;

function Profile() {
  return (
    <>
      <div className="profile-container-class" data-testid="profile-container-class">
        <Row gutter={16} justify="center">
          <Col xs={24} md={16} >
            <Row gutter={16} className=" center">
              <Breadcrumb
                className="breadCrumb"
                data-testid="breadCrumb"
                items={[{ title: 'Developer Full Cycle' }, { title: 'Developer Full Stack' }, { title: 'Tech Lead' }]}
              />
            </Row>

            <Row gutter={4} className="flex center padding3">
              <p className="paragraph" data-testid="profile-fisrt-title">Bringing ideas to life with code!</p>
            </Row>

            <Row gutter={3} className="flex center ">
              <div className="polygon-container zoomImg" data-testid="profile-polygon-img">
                <div className="polygon-shadow animate__animated  animate__fadeIn"></div>
                <div className="polygon-image animate__animated  animate__bounceInDown">
                  <img className="" src={avatar} height={'300px'} alt="avatar" />
                </div>
              </div>
            </Row>
            <Row gutter={16} className="flex center" data-testid="profile-hi">
              <h1 className="">Hi, I’m João. Nice to meet you.</h1>
            </Row>
            <Row gutter={32} style={{ paddingTop: '10px' }}>
              <Paragraph className="paragraph" data-testid="profile-desc">
                <p>I’m a Full Stack Developer with a passion for tackling complex challenges, crafting innovative solutions, and always fueled by a cup of coffee.</p>
              </Paragraph>
            </Row>
          </Col>
        </Row>
      </div>
      <ScrollIndicator color='#B5C18E' />
    </>
  );
}

export default Profile;
