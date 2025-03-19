"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h2>VayaTorch</h2>
          <p>Unlock exclusive luxury travel deals.</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>

        <div className="newsletter">
          <h4>Stay Updated</h4>
          <p>Sign up for exclusive deals and travel inspiration.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} VayaTorch. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0f0f0f;
          color: #fff;
          padding: 40px 0;
          text-align: center;
          border-top: 2px solid #d4af37;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .footer-top h2 {
          color: #d4af37;
          font-size: 24px;
          margin-bottom: 10px;
        }
        
        .footer-top p {
          font-size: 14px;
          color: #aaa;
        }
        
        .social-links {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        
        .social-links img {
          width: 24px;
          height: 24px;
          transition: transform 0.3s ease;
        }
        
        .social-links a:hover img {
          transform: scale(1.2);
        }
        
        .footer-links {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        
        .footer-links a {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #d4af37;
        }
        
        .newsletter {
          margin-top: 30px;
        }
        
        .newsletter h4 {
          color: #d4af37;
          margin-bottom: 10px;
        }
        
        .newsletter form {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          width: 250px;
          border: none;
          border-radius: 5px;
          outline: none;
        }
        
        .newsletter button {
          background: #d4af37;
          color: #000;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        
        .newsletter button:hover {
          background: #f5cc59;
        }
        
        .footer-bottom {
          margin-top: 30px;
          font-size: 12px;
          color: #aaa;
        }
      `}</style>
    </footer>
  );
}
