// Define the Deal interface
export interface Deal {
  id: number
  destination: string
  description: string
  price: string
  originalPrice: string
  image: string
  expiresIn: string
}

// Define the Savings interface
export interface Savings {
  totalSaved: number
  lastBooking?: {
    destination: string
    saved: number
    date: string
  }
  referrals: number
  milestones: {
    current: number
    next: number
  }
}

// Mock savings data
export const mockSavings: Savings = {
  totalSaved: 750,
  lastBooking: {
    destination: "Bali, Indonesia",
    saved: 250,
    date: "2023-10-15",
  },
  referrals: 3,
  milestones: {
    current: 500,
    next: 1000,
  },
}

