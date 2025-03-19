"use client"

const Navigation = () => {
  return (
    <nav>
      <div className="logo">VayaTorch</div>
      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">Destinations</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
      <style jsx>{`
        nav {
          background: rgba(18, 18, 22, 0.8);
          backdrop-filter: blur(10px);
          padding: 15px 30px;
          margin-bottom: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .logo {
          color: #d4af37;
          font-size: 1.5em;
          font-weight: 700;
          letter-spacing: 1px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 10px;
        }

        li {
          margin: 0;
        }

        a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 30px;
          transition: all 0.3s ease;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        a:hover, a.active {
          background: rgba(212, 175, 55, 0.15);
          color: #d4af37;
        }

        .auth-buttons {
          display: flex;
          gap: 10px;
        }

        button {
          padding: 8px 16px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .login {
          background: transparent;
          border: 1px solid rgba(212, 175, 55, 0.5);
          color: #d4af37;
        }

        .login:hover {
          background: rgba(212, 175, 55, 0.1);
        }

        .signup {
          background: linear-gradient(135deg, #d4af37 0%, #f5cc59 100%);
          border: none;
          color: #000;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }

        .signup:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
        }

        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 15px;
          }
          
          ul {
            width: 100%;
            justify-content: center;
          }
          
          .auth-buttons {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navigation

