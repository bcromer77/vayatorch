"use client";

import type React from "react";

interface Deal {
  id: number;
  destination: string;
  price: string;
  expiresIn: string;
}

const DealTicker: React.FC<{ deals: Deal[] }> = ({ deals }) => {
  if (deals.length === 0) {
    return null;
  }

  return (
    <div className="ticker-container">
      <div className="ticker" role="marquee" aria-live="off">
        {[...deals, ...deals].map((deal, index) => (
          <span key={`${deal.id}-${index}`} className="deal">
            <span className="destination">{deal.destination}</span> for{" "}
            <span className="price">{deal.price}</span>{" "}
            <span className="expires">Expires in {deal.expiresIn}</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        .ticker-container {
          background: rgba(18, 18, 22, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 12px;
          margin: 20px 0;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ticker {
          overflow: hidden;
          white-space: nowrap;
          animation: scroll 40s linear infinite;
          padding: 5px 0;
        }

        .ticker:hover {
          animation-play-state: paused;
        }

        .deal {
          display: inline-block;
          margin-right: 40px;
          color: rgba(255, 255, 255, 0.8);
          position: relative;
          padding-right: 40px;
        }

        .deal::after {
          content: "•";
          position: absolute;
          right: 0;
          color: #d4af37;
        }

        .destination {
          color: #d4af37;
          font-weight: 600;
        }

        .price {
          font-weight: 600;
        }

        .expires {
          background: rgba(212, 175, 55, 0.2);
          color: #d4af37;
          padding: 3px 8px;
          border-radius: 20px;
          font-size: 0.8em;
          margin-left: 10px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default DealTicker;
