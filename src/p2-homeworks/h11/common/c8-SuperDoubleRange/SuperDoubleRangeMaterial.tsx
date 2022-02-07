import React, {useState} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min: number
    max: number
    width: number
    disable?: boolean
    step?: number
}

export const SuperDoubleRangeMaterial: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min,
        max,
        width,
        disable,
        step = 1,
    }
) => {
    function valuetext(value: number) {
        return `${value}`;
    }

    const minDistance = 10;
    const [valueRange, setValueRange] = useState<number[]>(value);

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValueRange([clamped, clamped + minDistance])
                onChangeRange([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValueRange([clamped - minDistance, clamped]);
                onChangeRange([clamped - minDistance, clamped]);
            }
        } else {
            setValueRange(newValue as number[]);
            onChangeRange([newValue[0], newValue[1]]);
        }
    };

    return (
        <>
            <Box sx={{width: width}}>
                <Slider
                    step={step}
                    min={min}
                    max={max}
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={valueRange}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                    disabled={disable}
                />
            </Box>
        </>
    )
}


