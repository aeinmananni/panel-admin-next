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


export type TravelItemType = Pick<UpcomingTripType,"id"|"origin"|"destination"> &{
  price: number;             
  duration: string;          
  availableSeats: number;   
}

export const columnTravel: Record<keyof Omit<TravelItemType, "id">, string> = {
  origin: "مبدا",
  destination: "مقصد",
  availableSeats:"تعداد",
  price:"قیمت",
  duration:"مدت زمان سفر",
};


export type PurchasedTicketsType = Pick<
  TripCartProps,
  "id" | "departureDate" | "departureTime" | "origin" | "destination"
> & {
  price: string;
};

export const columnPurchased: Record<
  keyof Omit<PurchasedTicketsType, "id">,
  string
> = {
  origin: "مبدا",
  destination: "مقصد",
  departureDate: "تاریخ",
  departureTime: "ساعت",
  price: "قیمت",
};

export type ViewPasteTravelType = Omit<
  UpcomingTripType,
  "seatCount" | "status"
> &
  Pick<TravelItemType, "duration"> & {
    status: string;
  };

export const columnViewPased: Record<
  keyof Omit<ViewPasteTravelType, "id">,
  string
> = {
  origin: "مبدا",
  destination: "مقصد",
  departureDate: "تاریخ",
  departureTime: "ساعت",
  ticketNumber: "شماره بلیط",
  status: "وضعیت سفر",
  duration: "مدت زمان سفر",
};

export type RateTypes = Pick<
  ViewPasteTravelType,
  "id" | "departureTime" | "departureDate" | "origin" | "destination"
>;

export type FaqType = {
  question: string;
  answer: string;
};
