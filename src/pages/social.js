import React from 'react';
import { FloatButton } from 'antd';
import { GithubOutlined, LinkedinOutlined, PaperClipOutlined } from '@ant-design/icons';

const Social = () => {

  return (
    <div className="social-container">
      <FloatButton.Group
        trigger="hover"
        style={{
        }}
        icon={<PaperClipOutlined />}
      >
        <FloatButton
          icon={<GithubOutlined />}
          href="https://github.com/fonteeboa"
          target="_blank"
          type="primary"
          shape="circle"
          className="social-button github"
        />
        <FloatButton
          icon={<LinkedinOutlined />}
          href="https://www.linkedin.com/in/galvao845/?locale=en_US"
          target="_blank"
          type="primary"
          shape="circle"
          className="social-button linkedin"
        />
      </FloatButton.Group>
    </div>
  );
};

export default Social;
