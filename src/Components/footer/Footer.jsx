import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Uzair</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">about</a>
            </li>

            <li>
                <a href="#project" className="footer__link">project</a>
            </li>

            <li>
                <a href="#testimonials" className="footer__link">Testimonials</a>
            </li>
        </ul>

        <div className="footer social">
        <a href="https://facebook.com/" className="footer__social-link" target="_blank">
      <i className="bx bxl-facebook"></i>
    </a>

    <a href="https://instagram.com/" className="footer__social-link" target="_blank">
      <i className="bx bxl-instagram"></i>
    </a>
    
    <a href="https://twitter.com/" className="footer__social-link" target="_blank">
      <i className="bx bxl-twitter"></i>
    </a>
        </div>

        <span className="footer__copy"> &#169;All Right Reserved</span>
    </div>
   </footer>
  )
}

export default Footer
