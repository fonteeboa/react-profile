import React from 'react';
import Profile from './profile'
import Social from './social';
import AboutMe from './aboutMe';
import Jobs from './jobs';
import Projects from './projects';

function ContainerItens() {
  return (
    <div className="flex flex-column masterContainer">
      <div className='container-item-profile containerItem '>
        <Profile />
      </div>
        <AboutMe />
      <div>
        <Jobs />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Social />
      </div>
    </div>
  );
}

export default ContainerItens;