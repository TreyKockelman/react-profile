import React from 'react'
import { Container, Row } from "react-bootstrap"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
const Resume = () => {
  const docs = [ { uri: require("../Resume.pdf") } ];
  return (
    <>
      <Container id="resume" className='text-white' fluid>
        <h1 className="fw-bold text-center">Resume</h1>
        <Container fluid  style={{  justify: "center", width: "80%" }} >
          <Row className="justify-content-center m-4">
            <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
          </Row>
        </Container>
      </Container>
    </>
  )
}
export default Resume