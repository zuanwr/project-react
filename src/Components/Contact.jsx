import "../style/contact.css";
import Parse from "html-react-parser/lib/index";

function Contact(props) {
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          {props.ContactSection.map((item, index) => {
            return (
              <div className="footer-section" key={index}>
                {Parse(item.conten)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
