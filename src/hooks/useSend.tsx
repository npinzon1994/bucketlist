// import { useEffect, useCallback } from "react";
// import ListItemObject from "../model/ListItem";

// const useSend = (items: ListItemObject[], isInitial: Boolean) => {
//   const postSortedItemsToBackend = useCallback(
//     () => async () => {
//       await fetch(
//         "https://bucketlist-6c666-default-rtdb.firebaseio.com/bucketListItems.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(items),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//     },
//     [items]
//   );

//   useEffect(() => {
//     if (isInitial) {
//       isInitial = false;
//       return;
//     }
//     postSortedItemsToBackend();
//   }, [items]);

//   return [postSortedItemsToBackend];
// };

// export default useSend;
export {};
