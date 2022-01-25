import {useEffect, useState } from "react";

import s from "../h11/common/c8-SuperDoubleRange/c8-SuperDoubleRange.module.css";




// export const Slider = ({ min, max }: {min:number, max:number}) => {
//     const [avg, setAvg] = useState((min + max) / 2);
//     const [minVal, setMinVal] = useState(avg);
//     const [maxVal, setMaxVal] = useState(avg);
//     const thumbsize = 14
//     const width = 300;
//     const minWidth =
//         thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
//     const styles = {
//         min: {
//             width: minWidth,
//             left: 0
//         },
//         max: {
//             width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
//             left: minWidth
//         }
//     };
//
//     useEffect(() => {
//         setAvg((maxVal + minVal) / 2);
//     }, [minVal, maxVal]);
//
//     return (
//         <div
//             className={s.min_max_slider}
//             data-legendnum="2"
//             data-rangemin={min}
//             data-rangemax={max}
//             data-thumbsize={thumbsize}
//             data-rangewidth={width}
//         >
//             <label htmlFor="min">Minimum price</label>
//             <input
//                 id="min"
//                 className={s.min}
//                 style={styles.min}
//                 name="min"
//                 type="range"
//                 step="1"
//                 min={min}
//                 max={avg}
//                 value={minVal}
//                 onChange={({ target }) => setMinVal(Number(target.value))}
//             />
//             <label htmlFor="max">Maximum price</label>
//             <input
//                 id="max"
//                 className={s.max}
//                 style={styles.max}
//                 name="max"
//                 type="range"
//                 step="1"
//                 min={avg}
//                 max={max}
//                 value={maxVal}
//                 onChange={({ target }) => setMaxVal(Number(target.value))}
//             />
//         </div>
//     );
// };