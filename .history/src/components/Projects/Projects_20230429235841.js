import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import web3 from "../../Assets/Projects/web3.png";
import editor from "../../Assets/Projects/codeEditor.png";
import gpt3 from "../../Assets/Projects/gpt3.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpt3}
              isBlog={false}
              title="Modern UI/UX GPT-3"
              description="My Web Project related to Deep Learning. This project helps you design and develop amazing website. Easy to use and move to more complex problems."
              ghLink="https://github.com/ds-astroboy/project_modern_ui_ux_gpt3.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page built with Next.js takes the content from mark files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/ds-astroboy/Bits-of-Code.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online editor for code and markdown. This supports html, css, and javascript code with instant views. Also enables for writing markdown files. This helps you develop easily and save local storage."
              ghLink="https://github.com/ds-astroboy/Editor.io.git"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              isBlog={false}
              title="Modern Crypto Exchange Uniswap App, Web3 Development & Smart Contracts"
              description="Master Web3 development by building a Uniswap dApp React application with metamask pairing, live smart contract data fetching, and most importantly, the ability to create your own ERC20 tokens, swap them and more."
              ghLink="https://github.com/ds-astroboy/project_web3_uniswap.git"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
