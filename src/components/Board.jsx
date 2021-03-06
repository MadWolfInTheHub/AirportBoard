import React from 'react';

import { Outlet } from 'react-router-dom';

const Board = () => {
  return (
    <section className='airport-board'>
      <h4 className='notice'>Please pay Attention that flights after February 24th 2022 were canceled</h4>
      <h1 className='title'>SEARCH FLIGHT</h1>
      <Outlet />
    </section>
  );
};

export default (Board);
