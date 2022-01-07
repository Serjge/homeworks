import React, {useState} from 'react'
import {homeWorkReducer, sortFilter} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

export type UserType = {
    _id: number,
    name: string,
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} style={{display: 'flex', justifyContent: 'space-between', width: '300px'}}>
            <span> {p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
        console.log('sortUp')
    }
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortCheck = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    const AlternativeInitialPeople = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Ярослав', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 6, name: 'Дмитрий', age: 45},
    ]


    const arrCheck = [0, 18, 65]
    const arrFilter = ['default','up', 'down']

    const [value, setValue] = useState(arrCheck[0])
    const [valueFilter, setValueFilter] = useState<sortFilter>('default')

    const filterPeople = homeWorkReducer(AlternativeInitialPeople, {type: 'check-up', payload: {age: value, filter: valueFilter}})


    const AlternativePeople = filterPeople.map((p: UserType) => (
        <div key={p._id} style={{display: 'flex', justifyContent: 'space-between', width: '300px'}}>
            <span> {p.name}</span>
            <span>{p.age}</span>
        </div>
    ))

    return (
        <div>
            <hr/>
            homeworks 8

            {finalPeople}

            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortCheck}>check 18</SuperButton>
            </div>


            <hr/>
            {AlternativePeople}
            Filter age: <SuperSelect options={arrCheck}
                         onChangeOption={setValue}
                         value={value}
            />   Sort Name: <SuperSelect options={arrFilter}
                         onChangeOption={setValueFilter}
                         value={valueFilter}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8

