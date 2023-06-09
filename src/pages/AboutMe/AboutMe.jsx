import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBProgress,
    MDBProgressBar,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardLink
} from 'mdb-react-ui-kit';
import web from '../../assets/web-svgrepo-com.svg'
import linkedin from '../../assets/linkedin-svgrepo-com.svg'
import git from '../../assets/github-01-svgrepo-com.svg'
import telegram from '../../assets/telegram-svgrepo-com.svg'
import { Button } from 'react-bootstrap';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';


export default function AboutMe() {
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <MDBContainer className="py-5">
                <BreadCrumbs items={[{ path: '/', text: 'Home' }]} active={'About Me'} />

                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center" >
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    height={150}
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p className="text-muted mb-1">Frontend Developer</p>
                                <p className="text-muted mb-4">Java Script, React, Redux-Saga</p>
                                <div className="d-flex pt-1">
                                    {/* <button outline className="me-1 flex-grow-1">Chat</button>
                                    <button className="flex-grow-1">Follow</button> */}
                                    <Button className='me-1 flex-grow-1' variant="primary">Message</Button>
                                    <Button className='flex-grow-1' variant="primary">Follow</Button>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <img width={35} src={web} alt="web site" />
                                        <MDBCardLink target='blank' href='https://alukesh.github.io/AlisherKenzhebaev.htmlCV/' >
                                            My Resume
                                            {/* <Button style={{ width: '200px' }} variant="primary">My Resume</Button> */}
                                        </MDBCardLink>
                                    </MDBListGroupItem>

                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <img width={35} src={git} alt="my github" />
                                        <MDBCardLink target='blank' href='https://github.com/Alukesh'>
                                            Alukesh
                                            {/* <Button style={{ width: '200px' }} variant="primary">My Github</Button> */}
                                        </MDBCardLink>
                                    </MDBListGroupItem>

                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <img width={25} src={linkedin} alt="my linkedin" />
                                        <MDBCardLink target='blank' href='https://linkedin.com/in/alisher-kenzhebaev-1b4796230'>
                                            @Alisher Kenzhebaev
                                            {/* <Button style={{ width: '200px' }} variant="primary">My Linkedin</Button> */}
                                        </MDBCardLink>
                                    </MDBListGroupItem>

                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <img width={25} src={telegram} alt="my telegram" />
                                        <MDBCardLink href='https://t.me/Haskiken'>
                                            @Haskiken
                                            {/* <Button style={{ width: '200px' }} variant="primary">@Haskiken</Button> */}
                                        </MDBCardLink>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Alisher Kenzhebaev</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">akenzhebaev422@gmail.com</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Phone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">+996 (707) 340-701</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Mobile</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">+996 (707) 340-701</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0 h-100">
                                    <MDBCardBody className='h-100'>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1"></span>About</MDBCardText>
                                        <MDBCardText className="font-italic mb-1"> <p>Begin in 16.07.2021  </p> </MDBCardText>
                                        <MDBCardText className="font-italic mb-1">  React Javascript ,  web courses, 2021 IT run
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-0">React, Redux - Bailyk finance. Front-end developer ( from 01 October.2022) 4 month</MDBCardText>
                                        <MDBCardText className="font-italic mb-0">React, Next.js  - kassir.kg ( from 01.Februry.2023) - now</MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>JavaScript</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={79} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>React</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={69} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Rest API</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}