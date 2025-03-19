"use client";

import { useEffect, useState } from "react";
import LuxuryCard from "@components/LuxuryCard";
import Navigation from "@components/Navigation";
import MyVaya from "@components/MyVaya";
import Footer from "@components/Footer";

interface Deal {
  id: number;
  destination: string;
  description: string;
  price: string;
  originalPrice: string;
  image: string;
  expiresIn: string;
}

export default function App() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [tickerDeals, setTickerDeals] = useState<string[]>([]);

  useEffect(() => {
    async function fetchDeals() {
      try {
        const response = await fetch("/api/mockDeals"); // Fetch mock deals from API
        const data = await response.json();
        setDeals(data);
        setTickerDeals(data.map((deal: Deal) => `${deal.destination} - ${deal.price}`));
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    }
    fetchDeals();
  }, []);

  if (loading) return <p>Loading deals...</p>;
  if (error) return <p>Error loading deals: {error.message}</p>;

  return (
    <div className="app-container">
      {/* Navigation */}
      <Navigation />

      {/* Animated Hero Section */}
      <header className="hero">
        <h1>🔥 Exclusive Luxury Travel Deals</h1>
        <p>Book your dream getaway at unbeatable prices.</p>
        <button className="cta-button">View All Deals</button>
      </header>

      {/* Live Ticker for Trending Deals */}
      <div className="ticker">
        <div className="ticker-content">
          {tickerDeals.map((deal, index) => (
            <span key={index}>{deal} &bull; </span>
          ))}
        </div>
      </div>

      {/* Luxury Deals Section */}
      <section className="deals-container">
        {deals.map((deal) => (
          <LuxuryCard key={deal.id} deal={deal} />
        ))}
      </section>

      {/* MyVaya Section - Referral Rewards */}
      <MyVaya />

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .app-container {
          background: #0f0f0f;
          color: white;
        }

        .hero {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #161616 0%, #1f1f1f 100%);
          border-bottom: 2px solid #d4af37;
        }

        .hero h1 {
          font-size: 2.5em;
          color: #d4af37;
        }

        .hero p {
          font-size: 1.2em;
          color: #aaa;
          margin-top: 10px;
        }

        .cta-button {
          background: #d4af37;
          color: #000;
          padding: 12px 20px;
          border-radius: 30px;
          font-size: 1em;
          font-weight: bold;
          cursor: pointer;
          border: none;
          margin-top: 20px;
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .cta-button:hover {
          transform: scale(1.1);
          background: #f5cc59;
        }

        .ticker {
          background: #161616;
          color: #d4af37;
          padding: 10px 0;
          overflow: hidden;
          white-space: nowrap;
          border-bottom: 1px solid #d4af37;
        }

        .ticker-content {
          display: inline-block;
          animation: ticker 20s linear infinite;
        }

        @keyframes ticker {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .deals-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 40px;
        }
      `}</style>
    </div>
  );
}
