import React from "react";
import email from "../../Resources/email.png";
import call from "../../Resources/telephone-call.png";
import location from "../../Resources/location-pin.png";

const Contact = () => {
  return (
    <div className="contact" id="contact-id">
      <h2>Contact Me</h2>
      <hr className="contact-hr" />

      <div className="contact-flex">
        <div className="contact-flex-1">
          <div>
            <h3>Let's connect</h3>
            <p className="contact-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              praesentium.adipisicing elit. Magni, praesentium. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magni,
              praesentium.adipisicing elit. Magni, praesentium. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magni,
              praesentium.adipisicing elit. Magni, praesentium.
            </p>
          </div>

          <div className="info-flex">
            <div>
              <p>
                <span>
                  <img src={email} alt="" />
                </span>{" "}
                raghavkhandelwal11@gmail.com
              </p>
            </div>

            <div>
              <p>
                <span>
                  <img src={call} alt="" />
                </span>{" "}
                +91 9352099679
              </p>
            </div>

            <div>
              <p>
                {" "}
                <span>
                  <img src={location} alt="" />
                </span>{" "}
                Bikaner, Rajasthan
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send me a message</h3>
          <form action="https://formsubmit.co/18fee21a76b3f577424e261a690d63fc" method="POST">
            <label htmlFor="fname">Full Name</label>
            <br />
            <input type="text" id="pnum" name="Name" required/>
            <br /> <br />
            <label htmlFor="pnum">Phone Number</label>
            <br />
            <input type="text" placeholder="optional" id="fname" name="Phone" />
            <br /> <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" name="Email"/> <br />
            <br />
            <label htmlFor="textArea">Message</label> <br />
            <textarea
              name="Message"
              id="textArea"
              cols="50"
              rows="5"
              placeholder="your message here"
            ></textarea>{" "}
            <br />
            <br />
            <input
              className="btn btn-warning text-white"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
