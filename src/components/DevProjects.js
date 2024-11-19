import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DevProjectModal from './DevProjectModal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const DevProjects = () => {
  const thumbs = require.context("../assets/devImages/thumb", true);
  
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showPrevBtn, setShowPrevBtn] = useState(false);

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [nextProjectIndex, setNextProjectIndex] = useState(0);
  const [prevProjectIndex, setPrevProjectIndex] = useState(0);

  useEffect(() => {
    let projectsData = require("../assets/db/projects.json");
    setProjects(projectsData);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setSelectedProject(projects[index]);
    if (projects.length !== index + 1) setNextProjectIndex(index + 1);
    setShowNextBtn(projects.length === index + 1);
    if (index !== 0) setPrevProjectIndex(index - 1);
    setShowPrevBtn(index === 0);
    setShow(true);
  }

  const projectHTML = projects.map((project) => {
    return (
      <Col key={project.id} className="container text-center devprojectitem">
        <Image src={thumbs("./" + project.icon)} alt={project.name} rounded />
        <h3>{project.name}</h3>
        <Button variant="primary" onClick={() => handleShow(project.id)}>
          MORE INFO
        </Button>
      </Col>
    )
  });

  return (
    <section className='devprojects' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
          </Col>
        </Row>
        <Row>
          {projectHTML}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
        <DevProjectModal project={selectedProject} />
        <Modal.Footer>
          <Button disabled={showPrevBtn} variant="primary" onClick={() => handleShow(prevProjectIndex)}>
            PREV
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button disabled={showNextBtn} variant="primary" onClick={() => handleShow(nextProjectIndex)}>
            NEXT
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}

export default DevProjects