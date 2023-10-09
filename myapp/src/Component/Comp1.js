import React, { useState } from 'react'

export const Comp1 = () => {
    const [val, setVal] = useState({
        name: " ",
        email: " ",
        password: " "
    })
    const [addedVal, setAddedVal] = useState([])
    const [editBtnClicked, setEditBtnClicked] = useState(false)
    const [editIndex, setEditIndex] = useState(-1);

    const submitHandler = (event) => {
        event.preventDefault()

        setAddedVal([...addedVal, val])
        setVal({
            name: " ",
            email: " ",
            password: " "
        })

    }

    const del = (name) => {
        let newArr = addedVal.filter((newValue) => {
            return newValue.name !== name
        })
        setAddedVal(newArr)
    }


    const editHandler = (data, index) => {
        setVal(data)
        setEditIndex(index)
        setEditBtnClicked((prevVal) => {
            prevVal = true;
            return prevVal;
        })
    }

    const dataEdit = () => {
        setAddedVal((prevArr)=>{
            let newArr = [...prevArr];
            newArr[editIndex] = val;
            return newArr;
        })

        setEditBtnClicked(false);
        setVal({
            name: " ",
            email: " ",
            password: " "
        })
    }

    return (
        <div>

            Name: <input type="text" placeholder="Enter name" name="name" value={val.name} onChange={(e) => setVal({ ...val, [e.target.name]: e.target.value })} />
            <br />
            Email: <input type="text" placeholder="Enter email" value={val.email} onChange={(e) => setVal({ ...val, ["email"]: e.target.value })} />
            <br />
            Password: <input type="text" placeholder="Enter password" value={val.password} onChange={(e) => setVal({ ...val, ["password"]: e.target.value })} />
            {editBtnClicked ? <button type="submit" onClick={dataEdit}>Edit</button> : <button type="submit" onClick={submitHandler}>Submit</button>}

            <ul>

                <th>Id</th><th>Name</th> <th>Email</th> <th>Password</th><th>Delete</th><th>Edit</th>
                {addedVal.map((data, index) => {
                    return (
                        <>
                            <ul>
                                <table border="2px">
                                    <tr><td>{index + 1}</td><td>{data.name}</td><td> {data.email} </td><td>{data.password}</td>
                                        <td><button onClick={() => del(data.name)}>Deletes</button></td>
                                        <td><button onClick={() => editHandler(data, index)}>Edit</button></td>
                                    </tr>
                                </table>
                            </ul>

                        </>
                    )
                })}
            </ul>

        </div>
    )
}


// Name: <input type="text" placeholder="Enter name" name="name" value={val.name} onChange={(e) => setVal({...val, [e.target.name]:e.target.value})} />
//               <br/>
//                Email: <input type="text" placeholder="Enter email" value={val.email} onChange={(e) => setVal({...val,["email"]:e.target.value})} />
//                <br/>
//                Password: <input type="text" placeholder="Enter password" value={val.password} onChange={(e) => setVal({...val,["password"]:e.target.value})} />
//                 <button type="submit">Submit</button>