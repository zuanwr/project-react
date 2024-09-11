import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TutorImg from "../data/TutorImg";
import PartnerLogo from "../Components/PartnerLogo";
import Contact from "../Components/Contact";

import { HomeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CourseSection";
import { Tutor, TutorList } from "../data/Tutor";
import { partner, partnerImg } from "../data/partner";
import { ContactSection } from "../data/contactSection";

import Parse from 'html-react-parser'
import "../style/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* <!-- untuk home --> */}
        <section id="home">
          <img src={HomeSection.image} />
          <div className="kolom">{Parse(HomeSection.content)}</div>
        </section>

        {/* <!-- untuk courses --> */}
        <section id="courses">
          <div className="kolom">{Parse(coursesSection.Content)}</div>
          <img src={coursesSection.Image} />
        </section>

        {/* <!-- untuk tutors --> */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{Parse(Tutor.content)}</div>
            <TutorImg tutorList={TutorList} />
          </div>
        </section>

        {/* <!-- untuk partners --> */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{Parse(partner.content)}</div>
            <PartnerLogo partnerList={partnerImg} />
          </div>
        </section>
      </div>
      <Contact ContactSection={ContactSection} />
      <Footer />
    </>
  );
}

export default Home;
