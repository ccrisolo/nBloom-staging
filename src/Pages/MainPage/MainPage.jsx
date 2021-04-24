import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../../styles/mainpage.css';
import PageRow from './component/PageRow';
import Logo from '../../assets/mainpage-logo.png';

import DATA from './component/data';
function MainPage() {
    const data = DATA;
    return (
        <div className="mainpage--container">
            <Container>
                {data.map((c, i) => (
                    <PageRow
                        key={i}
                        index={i}
                        hasButton={c.hasButton}
                        hasLogo={c.hasLogo}
                        url={c.url}
                        title={c.title}
                        description={c.description}
                        btnTitle={c.btnTitle}
                        dimention={c.dimention}
                    />
                ))}
                <Row className="d-flex justify-content-center">
                    <Col xs={4} />
                    <Col xs={4}>
                        <Image src={Logo} alt="logo" className="logo" />
                    </Col>
                    <Col xs={4} />
                </Row>
            </Container>
        </div>
    )
}

export default MainPage
