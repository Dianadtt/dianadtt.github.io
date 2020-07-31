import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, FooterLinkList, Footer, FooterSection } from 'react-mdl'
import Main from "./Components/main"
import { Link } from 'react-router-dom'
// import { Link } from "react-scroll";



function App() {

    
    return (
        <div >
            <Layout  >
                <Header className="header-color" title="Diana Toth" scroll >
               

                    <Navigation className="header">
                        <Link to="/personal-webpage/landingpage">Home</Link>
                        <Link to="/personal-webpage/about-me">About Me</Link>
                        <Link to="/personal-webpage/experience">Experience</Link>
                        <Link to="/personal-webpage/education">Education</Link>
                        <Link to="/personal-webpage/projects">Projects</Link>
                        <Link to="/personal-webpage/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Diana Toth">
                    <Navigation >
                        <Link to="/personal-webpage/landingpage">Home</Link>
                        <Link to="/personal-webpage/about-me">About Me</Link>
                        <Link to="/personal-webpage/experience">Experience</Link>
                        <Link to="/personal-webpage/education">Education</Link>
                        <Link to="/personal-webpage/projects">Projects</Link>
                        <Link to="/personal-webpage/contact">Contact</Link>

                    </Navigation>
                </Drawer>
                <Content>
                
                    <Main />
                  
                </Content>
                <Footer className="header-color" size="mini">
                    <FooterSection type="middle" logo="">
                        <FooterLinkList>
                           
                            <a href="/personal-webpage/contact">@DianaToth</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </Layout>
        </div>

    );
}

export default App;