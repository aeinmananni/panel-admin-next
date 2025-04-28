

export type UpcomingTripType = {
    id?: number;
    origin: string;
    destination: string;
    departureDate: string; 
    departureTime: string; 
    status: "تایید شده" | "در انتظار تایید" | "لغو شده"; 
    ticketNumber?: string; 
    seatCount: number; 
  };