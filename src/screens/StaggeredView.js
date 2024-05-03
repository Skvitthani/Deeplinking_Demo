// import {
//   Dimensions,
//   Image,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';

// const searchData = [
//   {
//     id: 0,
//     images: [
//       {
//         url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//     ],
//   },
//   {
//     id: 1,
//     images: [
//       {
//         url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//     ],
//   },
//   {
//     id: 2,
//     images: [
//       {
//         url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//       {
//         url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//       },
//     ],
//   },
// ];
// const Tinderdata = [
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 0,
//     name: 'mountain',
//     url: 'https://images.pexels.com/photos/8020071/pexels-photo-8020071.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 1,
//     name: 'snow',
//     url: 'https://images.pexels.com/photos/17548204/pexels-photo-17548204/free-photo-of-malana-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 2,
//     name: 'snow mountain',
//     url: 'https://images.pexels.com/photos/18498506/pexels-photo-18498506/free-photo-of-a-snowy-mountain-road-with-a-river-running-through-it.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 3,
//     name: 'thiksey monastery',
//     url: 'https://images.pexels.com/photos/13979460/pexels-photo-13979460.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 4,
//     name: 'manali',
//     url: 'https://images.pexels.com/photos/15612352/pexels-photo-15612352/free-photo-of-a-view-of-mountains-and-trees-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
//   {
//     id: 5,
//     name: 'paragliding',
//     url: 'https://images.pexels.com/photos/17521689/pexels-photo-17521689/free-photo-of-paragliding.jpeg?auto=compress&cs=tinysrgb&w=600',
//   },
// ];

// const SCREEN_WIDTH = Dimensions.get('screen').width;
// const StaggeredView = () => {
//   console.log('Tinderdata----------', Tinderdata?.length);
//   let temp = [];
//   while (Tinderdata.length > 0) {
//     if (temp.length % 3 == 1) {
//       temp.push({images: Tinderdata.splice(0, 3), id: 2});
//     } else if (temp.length % 3 == 2) {
//       temp.push({images: Tinderdata.splice(0, 5), id: 1});
//     } else {
//       temp.push({images: Tinderdata.splice(0, 3), id: 0});
//     }
//   }

//   return (
//     <ScrollView>
//       {temp.map((data, index) => {
//         return (
//           <View key={index}>
//             {data.id === 0 ? (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   flexWrap: 'wrap',
//                   justifyContent: 'space-between',
//                   width: '100%',
//                 }}>
//                 {data.images.map((imageData, imgIndex) => {
//                   return (
//                     <TouchableOpacity
//                       key={imgIndex}
//                       style={{paddingBottom: 2, width: '33%'}}>
//                       <Image
//                         source={imageData}
//                         style={{width: '100%', height: 150}}
//                       />
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             ) : null}
//             {data.id === 1 ? (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     flexWrap: 'wrap',
//                     width: '66.5%',
//                     justifyContent: 'space-between',
//                   }}>
//                   {data.images.slice(0, 4).map((imageData, imgIndex) => {
//                     return (
//                       <TouchableOpacity
//                         key={imgIndex}
//                         style={{paddingBottom: 2, width: '49.5%'}}>
//                         <Image
//                           source={imageData}
//                           style={{width: '100%', height: 150}}
//                         />
//                       </TouchableOpacity>
//                     );
//                   })}
//                 </View>

//                 <TouchableOpacity style={{marginLeft: 2, width: '33%'}}>
//                   <Image
//                     source={data.images[4]}
//                     style={{width: '100%', height: 300}}
//                   />
//                 </TouchableOpacity>
//               </View>
//             ) : null}
//             {data.id === 2 ? (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <TouchableOpacity style={{paddingRight: 2, width: '66.5%'}}>
//                   <Image
//                     source={data.images[2]}
//                     style={{width: '100%', height: 300}}
//                   />
//                 </TouchableOpacity>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     flexWrap: 'wrap',
//                     width: '33%',
//                     justifyContent: 'space-between',
//                   }}>
//                   {data.images.slice(0, 2).map((imageData, imgIndex) => {
//                     return (
//                       <TouchableOpacity
//                         key={imgIndex}
//                         style={{paddingBottom: 2, width: '100%'}}>
//                         <Image
//                           source={imageData}
//                           style={{width: '100%', height: 150}}
//                         />
//                       </TouchableOpacity>
//                     );
//                   })}
//                 </View>
//               </View>
//             ) : null}
//           </View>
//         );
//       })}
//     </ScrollView>
//   );
// };

// export default StaggeredView;

// import React from 'react';
// import {Tinderdata} from '../helper/TinderDummyData';
// import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';

// const numColumns = 3;
// const screenWidth = Dimensions.get('window').width;

// const StaggeredView = () => {
//   const renderItem = ({item, index}) => {
//     const isOddIndex = index % 2 === 1;
//     console.log('isOddIndex----------', isOddIndex);
//     const isBigImage = isOddIndex && index !== 1;
//     console.log('isBigImage----------', isBigImage);
//     return (
//       <Image
//         source={{uri: item.url}}
//         style={[styles.image, isBigImage && styles.bigImage]}
//       />
//     );
//   };
//   const KeyExtractor = (item, index) => index.toString();

//   return (
//     <View>
//       <FlatList
//         data={Tinderdata}
//         renderItem={renderItem}
//         keyExtractor={KeyExtractor}
//         numColumns={numColumns}
//       />
//     </View>
//   );
// };

// export default StaggeredView;

// const styles = StyleSheet.create({
//   image: {
//     width: screenWidth / numColumns,
//     height: screenWidth / numColumns,
//   },
//   bigImage: {
//     width: (screenWidth * 2) / 3,
//     height: (screenWidth * 2) / 3,
//   },
// });

import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StaggeredList from '@mindinventory/react-native-stagger-view';
import {Tinderdata} from '../helper/TinderDummyData';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const StaggeredView = () => {
  const renderChildren = item => {
    return (
      <View
        style={{
          width: (SCREEN_WIDTH - 18) / 2,
          height: Number(Math.random() * 20 + 12) * 10,
          backgroundColor: 'gray',
          margin: 4,
          borderRadius: 18,
          overflow: 'hidden',
        }}
        key={item.id}>
        <View style={styles.avatarImage}>
          <Image
            onError={() => {}}
            style={{width: '100%', height: '100%'}}
            source={{
              uri: item.postMedia[0]?.url,
            }}
            resizeMode={'cover'}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StaggeredList
        data={Tinderdata}
        animationType={'FADE_IN_FAST'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => renderChildren(item)}
      />
    </View>
  );
};

export default StaggeredView;

const styles = StyleSheet.create({});
