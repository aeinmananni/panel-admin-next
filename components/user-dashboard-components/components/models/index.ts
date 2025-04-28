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

export type TripCartProps = {
  id?: number;
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  status: "تایید شده" | "در انتظار تایید" | "لغو شده";
  ticketNumber?: string;
  seatCount: number;
};

export const column: Record<keyof Omit<TripCartProps, "id">, string> = {
  origin: "مبدا",
  destination: "مقصد",
  departureDate: "تاریخ",
  departureTime: "ساعت",
  status: "وضعیت",
  ticketNumber: "شماره تیکت",
  seatCount: "تعداد صندلی",
};
