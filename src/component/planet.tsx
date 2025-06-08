import {Box} from "@mui/material";
import React from "react";
import { keyframes } from '@emotion/react';
export default function Planet(props: {orbitRadius: number, planetRadius: number, sunRadius: number, color: string}){
    const planetYear = Math.sqrt(props.orbitRadius**3) /100;
    const orbitRadius = props.orbitRadius
    const dotOrbit = keyframes`
      0% {
        transform: rotate(0deg) translateX(${orbitRadius}px);
      }
      100% {
        transform: rotate(360deg) translateX(${orbitRadius}px);
      }
    `;

    return (
      <Box
        sx={{
          position: 'absolute',
          top: -props.orbitRadius,
          left: -props.orbitRadius,
          width: props.orbitRadius*2,
          height: props.orbitRadius*2,
          borderRadius: '50%',

          border: '2px solid rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        >
          <Box
          sx={{
            position: 'absolute',
            top: -props.planetRadius,
            left: -props.planetRadius,
            width: props.planetRadius*2,
            height: props.planetRadius*2,
            bgcolor: props.color+'90',
            borderRadius: '50%',
            transform: 'translate(0, 0)',
            animation: `${dotOrbit} ${planetYear}s linear infinite reverse`,
          }}
        />

        </Box>

      </Box>
    );
}