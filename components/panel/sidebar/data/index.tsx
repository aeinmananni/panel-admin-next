import { ClassificationType, GroupingType } from "../model";
import { IconsMap } from "../icons/icon";

export const classificationItem: ClassificationType[] = [
  { classificationId: 1, classificationName: "Dashboard" },
  { classificationId: 2, classificationName: "Trip Management" },
  { classificationId: 3, classificationName: "Driver Management" },
  { classificationId: 4, classificationName: "Ticket Management" },
  { classificationId: 5, classificationName: "User Management" },
  { classificationId: 6, classificationName: "Reports and Statistics" },
  { classificationId: 7, classificationName: "System Settings" },
  { classificationId: 8, classificationName: "Access & Roles" },
].map((it) => ({ ...it, icon: IconsMap[it.classificationId] }));

export const groupingItem: GroupingType[] = [
  {
    groupingId: 1,
    groupingName: "Number of Tickets Sold",
    classificationId: 1,
    link: "/dashboard/Tickets-Sold",
  },
  {
    groupingId: 2,
    groupingName: "Daily/Monthly Revenue",
    classificationId: 1,
    link: "/dashboard/Daily-Monthly-Revenue",
  },
  {
    groupingId: 3,
    groupingName: "Active Drivers",
    classificationId: 1,
    link: "/dashboard/Active-Drivers",
  },
  {
    groupingId: 4,
    groupingName: "Trip Status Report",
    classificationId: 1,
    link: "/dashboard/Trip-Status-Report",
  },
  {
    groupingId: 5,
    groupingName: "Create/Edit Trips",
    classificationId: 2,
    link: "/dashboard/Create-Edit-Trips",
  },
  {
    groupingId: 6,
    groupingName: "Set Route",
    classificationId: 2,
    link: "/dashboard/Set-Route",
  },
  {
    groupingId: 7,
    groupingName: "DepartureTime&Capacity",
    classificationId: 2,
    link: "/dashboard/DepartureTime-Capacity",
  },
  {
    groupingId: 8,
    groupingName: "SetTicketPrice",
    classificationId: 2,
    link: "/dashboard/Set-Ticket-Price",
  },
  {
    groupingId: 9,
    groupingName: "Create/Edit Drivers",
    classificationId: 3,
    link: "/dashboard/Create-Edit-Drivers",
  },
  {
    groupingId: 10,
    groupingName: "Driver Information",
    classificationId: 3,
    link: "/dashboard/Driver-Information",
  },
  {
    groupingId: 11,
    groupingName: "DriverStatus",
    classificationId: 3,
    link: "/dashboard/Driver-Status",
  },
  {
    groupingId: 12,
    groupingName: "AssignDrivertoaTrip",
    classificationId: 3,
    link: "/dashboard/AssignDrivertoaTrip",
  },
  {
    groupingId: 13,
    groupingName: "ViewUserList",
    classificationId: 5,
    link: "/dashboard/ViewUserList",
  },
  {
    groupingId: 14,
    groupingName: "ReviewTicketReservation",
    classificationId: 5,
    link: "/dashboard/Review-Ticket-Reservation",
  },

  {
    groupingId: 15,
    groupingName: "BlockUser",
    classificationId: 5,
    link: "/dashboard/Block-User",
  },
  {
    groupingId: 16,
    groupingName: "Purchased Tickets",
    classificationId: 4,
    link: "/dashboard/Purchased-Tickets",
  },
  {
    groupingId: 17,
    groupingName: "TicketStatus",
    classificationId: 4,
    link: "/dashboard/Ticket-Status",
  },
  {
    groupingId: 18,
    groupingName: "TicketRefund",
    classificationId: 4,
    link: "/dashboard/Ticket-Refund",
  },
  {
    groupingId: 19,
    groupingName: "Revenue",
    classificationId: 6,
    link: "/dashboard/Revenue",
  },
  {
    groupingId: 20,
    groupingName: "TripsCompleted",
    classificationId: 6,
    link: "/dashboard/Trips-Completed",
  },
  {
    groupingId: 21,
    groupingName: "Payment-Methods",
    classificationId: 7,
    link: "/dashboard/Payment-Methods",
  },
  {
    groupingId: 22,
    groupingName: "CommissionPercentage",
    classificationId: 7,
    link: "/dashboard/Commission-Percentage",
  },
  {
    groupingId: 23,
    groupingName: "Policies",
    classificationId: 7,
    link: "/dashboard/Policies",
  },

  {
    groupingId: 24,
    groupingName: "Admin Roles",
    classificationId: 8,
    link: "/dashboard/admin-roles",
  },
  {
    groupingId: 25,
    groupingName: "Access Levels",
    classificationId: 8,
    link: "/dashboard/access-levels",
  },
];
