import React from 'react';
import { FloatButton } from 'antd';
import { GithubOutlined, LinkedinOutlined, PaperClipOutlined } from '@ant-design/icons';

const Social = () => {

  return (
    <div className="social-container" data-testid="social-container">
      <FloatButton.Group
        trigger="hover"
        style={{
        }}
        icon={<PaperClipOutlined />}
        data-testid="float-button-group"
      >
        <FloatButton
          icon={<GithubOutlined />}
          href="https://github.com/fonteeboa"
          target="_blank"
          type="primary"
          shape="circle"
          className="social-button github"
          data-testid="github-button"
        />
        <FloatButton
          icon={<LinkedinOutlined />}
          href="https://www.linkedin.com/in/fonteeboa/?locale=en_US"
          target="_blank"
          type="primary"
          shape="circle"
          className="social-button linkedin"
          data-testid="linkedin-button"
        />
      </FloatButton.Group>
    </div>
  );
};

export default Social;
