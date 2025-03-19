"use client";

import type React from "react";
import Image from "next/image";

interface Deal {
  id: number;
  destination: string;
  description: string;
  price: string;
  originalPrice?: string; // Marked optional to avoid crashes
  image: string;
  expiresIn: string;
}

const LuxuryCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  // Ensure the original price is available before processing
  const discount =
    deal.originalPrice && deal.price
      ? Math.round(
          ((Number.parseFloat(deal.originalPrice.replace("$", "").replace(",", "")) -
            Number.parseFloat(deal.price.replace("$", "").replace(",", ""))) /
            Number.parseFloat(deal.originalPrice.replace("$", "").replace(",", ""))) *
            100
        )
      : 0;

  return (
    <div className="luxury-card">
      <div className="image-container">
        <Image
          src={deal.image || "/placeholder.svg"}
          alt={deal.destination}
          width={400}
          height={250}
          layout="responsive"
          className="deal-image"
        />
        <div className="expires">Expires in {deal.expiresIn}</div>
        <div className="overlay"></div>
      </div>
      <div className="content">
        <h3>{deal.destination}</h3>
        <p className="description">{deal.description}</p>
        <div className="price-container">
          <span className="price">{deal.price}</span>
          {deal.originalPrice && <span className="original-price">{deal.originalPrice}</span>}
          {discount > 0 && <span className="discount">Save {discount}%</span>}
        </div>
        <button className="book-now">Book Now</button>
      </div>
      <style jsx>{`
        .luxury-card {
          background: rgba(18, 18, 22, 0.8);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .luxury-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        
        .deal-image {
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        
        .luxury-card:hover .deal-image {
          transform: scale(1.1);
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%);
        }
        
        .expires {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(212, 175, 55, 0.9);
          color: #000;
          padding: 6px 12px;
          font-size: 0.8em;
          font-weight: 600;
          border-radius: 20px;
          z-index: 2;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .content {
          padding: 24px;
        }
        
        h3 {
          color: #d4af37;
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 1.5em;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 20px;
          font-size: 0.95em;
          line-height: 1.5;
        }
        
        .price-container {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .price {
          color: #d4af37;
          font-size: 1.5em;
          font-weight: 700;
        }
        
        .original-price {
          color: rgba(255, 255, 255, 0.5);
          text-decoration: line-through;
          font-size: 0.9em;
        }
        
        .discount {
          background: linear-gradient(135deg, #d4af37 0%, #f5cc59 100%);
          color: #000;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8em;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .book-now {
          background: linear-gradient(135deg, #d4af37 0%, #f5cc59 100%);
          color: #000;
          border: none;
          padding: 12px 0;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1em;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }
        
        .book-now:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
          background: linear-gradient(135deg, #e5c04a 0%, #f7d46b 100%);
        }
      `}</style>
    </div>
  );
};

export default LuxuryCard;
