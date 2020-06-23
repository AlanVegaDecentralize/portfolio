import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
  Progress,
} from "reactstrap";

// core components
import { Paper } from "@material-ui/core";

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

// Web3
import ethEnabled from "./metamask.js";

const carouselItems = [
  {
    src: require("assets/img/twitter.jpg"),
    altText: "Slide 1",
    caption: "Twitter Application to create Ethereum transactions via tweets.",
  },
  {
    src: require("assets/img/blocks.gif"),
    altText: "Slide 2",
    caption: "React application to purchase ERC-20 token.",
  },
  {
    src: require("assets/img/iota.gif"),
    altText: "Slide 3",
    caption: "Fully decentralized social media app. (React, Django, IPFS)",
  },
];

let ps = null;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  render() {
    return (
      <div id="profile">
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Alan Vega</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description text-align-left">
                    Full stack developer, driven and inspired by Web 3.0 and
                    first principles rational. Keen on becoming a valuable team
                    member through the design of maintainable code via TDD and a
                    willingness to share and learn alongside my peers.
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/BankzAkuma"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="linkedin"
                      href="https://www.linkedin.com/in/alan-vega/"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Connect
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="github"
                      href="https://github.com/AlanVegaDecentralize"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Be amazed... maybe
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className="title">
                        Production Skills <br />& Personal Attributes
                      </h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Node.js
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              ProfilePage,
                              active: this.state.tabs === 2,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Python
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              ProfilePage,
                              active: this.state.tabs === 3,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            Networks, Systems, & Databases
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              ProfilePage,
                              active: this.state.tabs === 4,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 4)}
                            href="#pablo"
                          >
                            Attributes
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter">
                            <div className="text-primary">JavaScript</div>
                            <Progress color="info" value={83} />
                            <div className="text-primary">HTML/CSS</div>
                            <Progress color="info" value={70} />
                            <div className="text-primary">Typescript</div>
                            <Progress color="info" value={65} />
                            <div className="text-primary">React</div>
                            <Progress color="info" value={60} />
                            <div className="text-primary">Express</div>
                            <Progress color="info" value={60} />
                            <div className="text-primary">Jest</div>
                            <Progress color="info" value={45} />
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Table className="tablesorter">
                            <div className="text-primary">Python3</div>
                            <Progress color="info" value={75} />
                            <div className="text-primary">Anaconda</div>
                            <Progress color="info" value={70} />
                            <div className="text-primary">IOTA</div>
                            <Progress color="info" value={70} />
                            <div className="text-primary">Django</div>
                            <Progress color="info" value={60} />
                            <div className="text-primary">Flask</div>
                            <Progress color="info" value={50} />
                            <div className="text-primary">ROBOT</div>
                            <Progress color="info" value={45} />
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Table className="tablesorter">
                            <div className="text-primary">Linux</div>
                            <Progress color="info" value={80} />
                            <div className="text-primary">Docker</div>
                            <Progress color="info" value={70} />
                            <div className="text-primary">
                              Utilizing/Creating Web APIs
                            </div>
                            <Progress color="info" value={65} />
                            <div className="text-primary">MongoDb</div>
                            <Progress color="info" value={60} />
                            <div className="text-primary">Ethereum</div>
                            <Progress color="info" value={50} />
                            <div className="text-primary">AWS (EC2 & S3)</div>
                            <Progress color="info" value={40} />
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab4">
                          <Table className="tablesorter">
                            <div className="text-primary">Ambitious</div>
                            <Progress color="info" value={83} />
                            <div className="text-primary">Creative</div>
                            <Progress color="info" value={80} />
                            <div className="text-primary">Adaptive</div>
                            <Progress color="info" value={80} />
                            <div className="text-primary">Sensibile</div>
                            <Progress color="info" value={75} />
                            <div className="text-primary">Follow-Through</div>
                            <Progress color="info" value={72} />
                            <div className="text-primary">Collaborative</div>
                            <Progress color="info" value={68} />
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <Paper elevation={24}>
                      <UncontrolledCarousel items={carouselItems} />
                    </Paper>
                  </Row>
                </Col>
                <Col md="5">
                  <h5 className="text-on-back">02</h5>
                  <h1 className="profile-title text-left">Projects</h1>
                  <p className="profile-description text-left">
                    Spearheaded product development of two projects through an
                    Agile approach in regards to handling project scope: a fully
                    functional Twitter application and a React based web
                    application. Deployed on AWS EC2 and maintained through
                    GitHub.
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="info"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          "https://github.com/AlanVegaDecentralize",
                          "_blank"
                        );
                      }}
                    >
                      <i className="tim-icons icon-bulb-63" /> GitHub Profile
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact</h1>
                      <h5 className="text-on-back">03</h5>
                    </CardHeader>
                    <CardBody>
                      <Form>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input defaultValue="Mike" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                placeholder="mike@email.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input defaultValue="001-12321345" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Company</label>
                              <Input defaultValue="CreativeTim" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder="Hello there!" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                          onClick={() => ethEnabled()}
                        >
                          Send text
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto" md="4">
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Location</h4>
                      <p>In a text-editor</p>
                      <p>Los Angeles, CA</p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        Alan Vega <br />
                        +1(323)327-2235 <br />
                        alanvega002@gmail.com <br />
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
