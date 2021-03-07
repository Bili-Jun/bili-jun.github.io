import React from 'react';
import styled from 'styled-components';

import style from './style'

import me from '../../assets/bili-jun.jpg'

function Introduction (props: { className?: string}) {
  const { className } = props;
  return (
    <section
      className={className}
    >
      <h1 className="bili-jun-info">
        Hi,I'm Jun. I’m an experienced web developer with deep interest in rust/Web Assembly development.
      </h1>
      <img className="bili-jun" src={me} alt="Bili Jun" />
    </section>  
  )
}

const StyledIntroduction = styled(Introduction)`
  ${style}
`;

export default StyledIntroduction;