// //  │"Use Client"
// import { useState } from 'react';
// // import { format } from 'date-fns';
// import Head from 'next/head';
// import Link from 'next/link';


// const StatusBadge = ({ status }) => {
//   const getBadgeColor = () => {
//     switch (status) {
//       case 'approved':
//         return 'bg-green-100 text-green-800';
//       case 'rejected':
//         return 'bg-red-100 text-red-800';
//       case 'pending':
//       default:
//         return 'bg-yellow-100 text-yellow-800';
//     }
//   };

//   return (
//     <span className={`px-2 py-1 text-xs font-medium rounded-full ${getBadgeColor()}`}>
//       {status.charAt(0).toUpperCase() + status.slice(1)}
//     </span>
//   );
// };

// export default function ReviewTicketReservation() {
//   const [reservations, setReservations] = useState(RESERVATIONS);
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredReservations = reservations.filter(reservation => {
//     const matchesStatus = statusFilter === 'all' || reservation.status === statusFilter;
//     const matchesSearch =
//       reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       reservation.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       reservation.id.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesStatus && matchesSearch;
//   });

//   const handleStatusChange = (reservationId, newStatus) => {
//     setReservations(prevReservations =>
//       prevReservations.map(reservation =>
//         reservation.id === reservationId
//           ? { ...reservation, status: newStatus }
//           : reservation
//       )
//     );
//   };

//   // const formatPrice = (priceInRials) => {
//   //   return new Intl.NumberFormat('fa-IR').format(priceInRials / 10) + ' تومان';
//   // };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Head>
//         <title>بررسی رزرو بلیط‌ها | پنل ادمین</title>
//       </Head>

//       <div className="py-8 px-4 sm:px-6 lg:px-8">
//         <div className="mb-8 sm:flex sm:items-center sm:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">بررسی رزرو بلیط‌ها</h1>
//             <p className="mt-2 text-sm text-gray-700">
//               لیست درخواست‌های رزرو بلیط که نیاز به بررسی دارند
//             </p>
//           </div>
//           <div className="mt-4 sm:mt-0">
//             <Link href="/admin/dashboard">
//               <a className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
//                 بازگشت به داشبورد
//               </a>
//             </Link>
//           </div>
//         </div>

//         <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
//           <div>
//             <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700">
//               فیلتر وضعیت
//             </label>
//             <select
//               id="status-filter"
//               className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               <option value="all">همه</option>
//               <option value="pending">در انتظار بررسی</option>
//               <option value="approved">تایید شده</option>
//               <option value="rejected">رد شده</option>
//             </select>
//           </div>

//           <div>
//             <label htmlFor="search" className="block text-sm font-medium text-gray-700">
//               جستجو
//             </label>
//             <input
//               type="text"
//               id="search"
//               placeholder="جستجو بر اساس نام، رویداد یا شناسه..."
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="bg-white shadow overflow-hidden sm:rounded-md">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     شناسه
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     مشتری
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     رویداد
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     نوع بلیط / تعداد
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     مبلغ کل
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     تاریخ درخواست
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     وضعیت
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     عملیات
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredReservations.length > 0 ? (
//                   filteredReservations.map((reservation) => (
//                     <tr key={reservation.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                         {reservation.id}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {reservation.customerName}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {reservation.eventName}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {reservation.ticketType} / {reservation.quantity} عدد
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 direction-rtl">
//                         {formatPrice(reservation.totalPrice)}
//                       </td>
//                       {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {format(reservation.createdAt, 'yyyy/MM/dd - HH:mm')}
//                       </td> */}
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <StatusBadge status={reservation.status} />
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <div className="flex space-x-2 rtl:space-x-reverse">
//                           {reservation.status === 'pending' && (
//                             <>
//                               <button
//                                 onClick={() => handleStatusChange(reservation.id, 'approved')}
//                                 className="text-green-600 hover:text-green-900"
//                               >
//                                 تایید
//                               </button>
//                               <button
//                                 onClick={() => handleStatusChange(reservation.id, 'rejected')}
//                                 className="text-red-600 hover:text-red-900"
//                               >
//                                 رد
//                               </button>
//                             </>
//                           )}
//                           <Link href={`/admin/reservations/${reservation.id}`}>
//                             <a className="text-blue-600 hover:text-blue-900">جزئیات</a>
//                           </Link>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
//                       هیچ رزروی با این مشخصات یافت نشد.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="mt-5 flex items-center justify-between">
//           <div className="flex items-center">
//             <p className="text-sm text-gray-700">
//               نمایش <span className="font-medium">1</span> تا{' '}
//               <span className="font-medium">{filteredReservations.length}</span> از{' '}
//               <span className="font-medium">{filteredReservations.length}</span> نتیجه
//             </p>
//           </div>
//           <div className="flex justify-between px-4 py-3 text-right sm:px-6">
//             <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
//               قبلی
//             </button>
//             <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
//               بعدی
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }