import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {
    SuperDoubleRangeMaterial
} from './common/c8-SuperDoubleRange/SuperDoubleRangeMaterial';

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }


    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{value1}</span>
                Range
                <br/>
                <SuperRange
                    onChangeRange={setValue1}
                    width={200}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                DoubleRange
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                    min={0}
                    max={1000}
                    width={200}
                    // step={100}
                    // disable={true}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
            <div>
                <span>{value1}</span>
                DoubleRangeMaterial
                <SuperDoubleRangeMaterial
                    onChangeRange={onChangeRange}
                    value={[value1, value2]}
                    min={50}
                    max={1000}
                    width={200}
                    step={20}
                    // disable={true}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}

        </div>
    )
}

export default HW11
