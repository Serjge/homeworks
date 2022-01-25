import React, {useEffect, useState} from 'react'
import s from "./c8-SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min: number
    max: number
    width: number
    disable?: boolean
    step?: number
    // step, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min,
        max,
        width,
        disable,
        step=1,
        // step, ...
        ...restProps
    }
) => {
    // const thumbSize =14

    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(value[0]);
    const [maxVal, setMaxVal] = useState(value[1]);


    const minWidth =  ((avg - min) / (max - min)) * (width - 2 );
    const minPercent = ((minVal - min) / (avg - min)) * 100;
    const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
    const styles = {
        min: {
            width: minWidth,
            left: 0,
            "--minRangePercent": `${minPercent}%`
        },
        max: {
            width:  ((max - avg) / (max - min)) * (width - 2 ),
            left: minWidth,
            "--maxRangePercent": `${maxPercent}%`
        }
    };

    useEffect(() => {
        setAvg((maxVal + minVal) / 2);
    }, [minVal, maxVal]);

    return (
        <>
            <div
                className={s.min_max_slider}
                data-legendnum="2"
                data-rangemin={min}
                data-rangemax={max}
                // data-thumbsize={thumbSize}
                data-rangewidth={width}
            >
                <label htmlFor="min">Minimum price</label>
                <input
                    id="min"
                    className={s.min}
                    style={styles.min}
                    name="min"
                    type="range"
                    step={step}
                    min={min}
                    max={avg}
                    value={minVal}
                    onChange={({target}) => {
                        onChangeRange([Number(target.value), maxVal])
                        setMinVal(Number(target.value))
                    }}
                    disabled={disable}
                />
                <label htmlFor="max">Maximum price</label>
                <input
                    id="max"
                    className={s.max}
                    style={styles.max}
                    name="max"
                    type="range"
                    step={step}
                    min={avg}
                    max={max}
                    value={maxVal}
                    onChange={({target}) => {
                        onChangeRange([minVal, Math.round(Number(target.value))])
                        setMaxVal(Math.round(Number(target.value)))
                    }}
                    disabled={disable}
                />
            </div>
        </>
    )
}

export default SuperDoubleRange


