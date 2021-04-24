import React from 'react';
import { Col, Row, Button, Image } from 'react-bootstrap';
import '../../../styles/mainpage.css';
import Logo from '../../../assets/mainpage-logo.png';
const PageRow = ({ title, description, index, hasLogo, dimention, url, btnTitle, hasButton, handleClick }) => {
    let classes = [];
    classes.push('row-container');
    classes.push('align-items-center');
    if (index > 0) {
        classes.push('margin-vertical')
    }
    classes.join(' ');
    return (
        <Row className={classes} style={{ marginBottom: index === 4 ? 10 : 40 }}>
            <Col md={9}>
                {hasLogo &&
                    <img src={Logo} alt="logo" className="logo" fluid />
                }
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                {hasButton &&
                    <Button className="custom-btn" onClick={() => handleClick && handleClick()} variant="default">{btnTitle}</Button>
                }
            </Col>
            <Col md={3}>
                <Image src={url} alt="Image" fluid width={dimention.width} height={dimention.height} />
            </Col>
        </Row>
    );
}

export default PageRow;