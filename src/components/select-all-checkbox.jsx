import React, { useState } from 'react'

export default function SelectAllCheckbox() {
    const initialData = [
        { name: "SelectAll", value: false },
        { name: "User1", value: false },
        { name: "Ravi", value: false },
        { name: "Test1", value: false },
        { name: "Test2", value: false },
        { name: "Test3", value: false },
    ];

    const [data, setData] = useState(initialData);

    const selectItem = (event, index) => {
        const updatedData = [...data];
        const { name } = updatedData[index];

        if (name === "SelectAll") {
            const newValue = !updatedData[index].value;
            updatedData.forEach(item => (item.value = newValue));
        } else {
            updatedData[index].value = !updatedData[index].value;
            const allChecked = updatedData.slice(1).every(item => item.value);
            updatedData[0].value = allChecked;
        }

        setData(updatedData);
    };

    return (
        <div className="App">
            {data.map((elm, index) => (
                <div key={elm.name}>
                    <input
                        type="checkbox"
                        checked={elm.value}
                        onChange={(event) => selectItem(event, index)}
                    />
                    <label>{elm.name}</label>
                </div>
            ))}
        </div>
    );
}
