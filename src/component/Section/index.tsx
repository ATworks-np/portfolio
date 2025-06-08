import React, { useRef, useEffect, useState } from 'react';
import { Slide, Box, Typography } from '@mui/material';
import SlideIn from "../SliteIn";

import styled from "@emotion/styled";
interface SectionProps {
  title: string;
  position: 'left'|'right';
  children?: React.ReactElement; // childrenプロパティの型を定義
}

const Divider = styled.div({
  height: '3px',
  width: '100%',
  background: '#333',
  marginBottom: '10px',
})

const Section: React.FC<SectionProps> = (props) => {
  return(
    <div style={{width: '100%', display: 'flex', justifyContent: props.position}}>
      <Box
         sx={{
            width: { xs: '80%'},
          }}
       >
        <Typography variant="h2"
          sx={{
            fontSize: { xs: '48px', md: '60px' },
          }}
        >
          {props.title}
        </Typography>
        <Divider />
        {props.children}
      </Box>
    </div>
  );
}

export default Section;