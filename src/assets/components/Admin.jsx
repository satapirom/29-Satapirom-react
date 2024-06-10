import React, { useState } from 'react'

const Admin = ({ data, setData }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newData = {
            name,
            lastName,
            position
        }
        setData([...data, { ...newData, id: `1${data?.length + 1}` }]);


    }
    const handleDelete = (id) => {
        const DeleteData = data.filter(user => user.id !== id);
        setData(DeleteData);
    }
    const handleDeleteAll = (id) => {
        const DeleteDataAll = [];
        setData(DeleteDataAll);
    }
    console.log(data)



    return (
        <div className='max-w-[1024px] m-auto'>
            <h1 className='text-lg font-bold my-4'>Create User Here</h1>
            <form onSubmit={handleSubmit} className='flex justify-between '>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                    className='w-[280px] rounded-md px-4' />
                <input
                    type='text'
                    name='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last Name'
                    className='w-[280px] rounded-md px-4' />
                <input
                    type='text'
                    name='position'
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder='Position'
                    className='w-[280px] rounded-md px-4' />
                <button
                    type='submit'
                    className='col-span-1 bg-[#5E5BFF] text-white rounded-md py-3 w-[80px]'>Save</button>
            </form>

            <table cellPadding={10} width='100%'
                className='text-center max-w-[1024px] mx-auto my-8 bg-white'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.position}</td>
                            <td><button
                                className=' text-red-600'
                                onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button
                className=' text-red-600'
                onClick={handleDeleteAll}>Delete All</button>
        </div>
    )
}

export default Admin