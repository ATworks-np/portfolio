import React, { useRef, useEffect, useState } from 'react';
import { Slide, Box, Typography } from '@mui/material';

interface SlideInProps {
  direction: "left"|'right';
  children: React.ReactElement; // childrenプロパティの型を定義
}

const SlideIn: React.FC<SlideInProps> = (props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // 一度だけ実行したい場合は解除
        }
      },
      { threshold: 0.9 } // 10%がビューポートに入ったら
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Box ref={ref}>
      <Slide direction={props.direction} in={visible}  container={ref.current} timeout={500}>
        {props.children}
      </Slide>
    </Box>
  );
};

export default SlideIn;