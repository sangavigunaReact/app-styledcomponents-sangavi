import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../Globalstyle';
import {Infosec, 
        InfoRow,
        Infocolumn,
        Textwrapper,
        Topline,
        Heading,
        Subtitle,
        Imgwrapper,
        Img
        } from './infosection.element';

const Infosection = ({primary, lightBg, imgstart, lighttopline, Toplinetext, lighttext, headline, lighttextdec, description, buttonlabel, start, img, alt }) => {
  return (
    <>
      <Infosec lightBg={lightBg}>
        <Container>
            <InfoRow imgstart={imgstart}>
                <Infocolumn>
                    <Textwrapper>
                        <Topline lighttopline={lighttopline}>{Toplinetext}</Topline>
                        <Heading lighttext={lighttext}>{headline}</Heading>
                        <Subtitle lighttextdec={lighttextdec}>{description}</Subtitle>
                        <Link to="/sign-up">
                            <Button big fontbig primary={primary}>{buttonlabel}</Button>
                            </Link>
                    </Textwrapper>
                </Infocolumn>
                <Infocolumn>
                    <Imgwrapper start={start} >
                        <Img src={img} alt={alt} />
                    </Imgwrapper>
                </Infocolumn>
            </InfoRow>
        </Container>
      </Infosec>
    </>
  )
}

export default Infosection;
