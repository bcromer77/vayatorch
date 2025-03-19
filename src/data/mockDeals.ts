import axios from "axios";

const PEXELS_API_KEY = "kaaiCr4VD2dSst4EgPqD8whTY3jEomGZ9gUTGmlFp9kna35cROBKZ6OG";
const PEXELS_API_URL = "https://api.pexels.com/v1/search?query=luxury travel&per_page=10";

interface Deal {
  id: number;
  destination: string;
  description: string;
  price: string;
  originalPrice: string;
  image: string;
  expiresIn: string;
}

// Fetch images from Pexels
async function fetchImages() {
  try {
    const response = await axios.get(PEXELS_API_URL, {
      headers: { Authorization: PEXELS_API_KEY },
    });
    return response.data.photos.map((photo: any) => photo.src.large);
  } catch (error) {
    console.error("Pexels API error:", error);
    return [];
  }
}

// Generate mock deals
export async function getMockDeals(): Promise<Deal[]> {
  const images = await fetchImages();

  return [
    {
      id: 1,
      destination: "Maldives",
      description: "Experience the ultimate luxury getaway in an overwater villa.",
      price: "$2,500",
      originalPrice: "$4,000",
      image: images[0] || "/placeholder.svg",
      expiresIn: "24h",
    },
    {
      id: 2,
      destination: "Santorini, Greece",
      description: "Enjoy breathtaking sunsets and white-washed buildings.",
      price: "$2,800",
      originalPrice: "$4,500",
      image: images[1] || "/placeholder.svg",
      expiresIn: "12h",
    },
    {
      id: 3,
      destination: "Amalfi Coast, Italy",
      description: "Drive along the stunning coastline and taste authentic Italian cuisine.",
      price: "$3,200",
      originalPrice: "$5,000",
      image: images[2] || "/placeholder.svg",
      expiresIn: "36h",
    },
  ];
}
