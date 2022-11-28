import React , {useState} from 'react';
import emailjs from 'emailjs-com';
import {Mail} from '../../config/smtp-mail'
import {Helmet} from 'react-helmet'

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}
function ContactForm({props}) {
    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        alert(e.target.name)
     /*   let res = Mail({
          from:e.target.email,
          subject:e.target.subject,
          text:e.target.message,
        })
        //e.target.reset()
        if(res===200)*/ showresult(true)
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="rn-form-group">
                <input 
                type="text"
                name="name"
                placeholder="Your Name"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="email"
                name="email"
                placeholder="Your Email"
                required
                />
            </div>

            <div className="rn-form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Subject"
                required
                />
            </div>
            
            <div className="rn-form-group">
                <textarea 
                name="message"
                placeholder="Your Message"
                required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
            </div> 

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
