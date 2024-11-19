import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const DevProjectModal = (props) => {
  const files = require.context("../assets/files", true);
  const images = require.context("../assets/devImages", true);

  const project = props.project;
  const title = project.name;
  const tools = project.tools;
  const description = { __html: project.desc };

  const [mainSlide, setMainSlide] = useState(0);

  const downloads = project.downloads.map((download) => {
    let link = "";
    if (download.local === 1) {
      link = files("./" + download.link);
    } else {
      link = download.link;
    }
    return (
      <>
        <Button key={download.name} href={link}>
          {download.name}
        </Button>{'  '}
      </>
    )
  });

  const collabs = project.collab.map((c) => {
    return (
      <a key={c.name} href={c.link}>
        {c.name}
      </a>
    )
  });


  const slides = project.pics.map((pic, picIndex) => {
    if (picIndex !== mainSlide) {
      return (
        <div key={pic.lg} className='activeSlide'>
          <Image src={images("./thumb/" + pic.thumb)} alt={pic.caption} onClick={() => setMainSlide(picIndex)} thumbnail />
          <h6>{pic.caption}</h6>
        </div>
      )
    } else {
      return (
        <div key={pic.lg} className='selectedSlide'>
          <Image src={images("./thumb/" + pic.thumb)} alt={pic.caption} thumbnail />
          <h6>{pic.caption}</h6>
        </div>
      )
    }
  });

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="container text-center">
          <Col xs={12} md={8} xl={8}>
            <Image src={images("./" + project.pics[mainSlide].lg)} alt={project.pics[mainSlide].caption} rounded fluid />
            <h4>{project.pics[mainSlide].caption}</h4>
          </Col>
          <Col xs={12} md={4} xl={4}>
            {slides}
          </Col>
        </Row>
        <Row className="container text-center">
          <Col>
          </Col>
        </Row>
        <br /><br />
        <b>TOOLS: {tools}</b><br /><br />{collabs.length !== 0 && <><b>COLLABORATORS: {collabs}</b> <br /><br /></>}
        <div dangerouslySetInnerHTML={description} />
        {downloads}
      </Modal.Body>
    </>
  )
}

export default DevProjectModal