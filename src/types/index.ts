export interface Savings {
  totalSaved: number
  lastBooking?: {
    destination: string
    saved: number
    date: string
  }
  milestones: {  // <-- Add this part
    current: number
    next: number
  }
}

