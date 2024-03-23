import { Button, Input } from '../components';
import '../style/contact.scss';

// import { useProductContext } from '../Context/product_context';

const Contact = () => {
  // const { products, loading, error } = useProductContext();
  // console.log(products, loading, error);

  return (
    <section className="contact-section">
      <div className='contact-container'>
        <h2>Feel free to Contact Us</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60335.65072572963!2d73.01841266041686!3d19.064697376948494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21a53e30b83%3A0xa766b29f687709d7!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711036069816!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

        <div className="contact-container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xoqgnylj"
              method="POST"
              className="contact-inputs">
              <Input
                type="text"
                placeholder="Username"
                name="username"
                required
                autoComplete="off"
                userClassName="input"
              />

              <Input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
                userClassName="input"
              />

              <textarea
                name="Message"
                className='text-area'
                cols="30"
                rows="5"
                required
                autoComplete="off"
                placeholder="Enter you message">
              </textarea>

              {/* <input type="submit" value="send" /> */}
              <Button
                className="btn"
                type="submit"
                label="SEND"
                value="send" />
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact