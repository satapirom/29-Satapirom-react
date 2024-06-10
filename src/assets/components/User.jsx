import React from 'react'

 const User = () => {
    
  return (
    <div>
         <table cellPadding={10} width='100%'
                className='text-center max-w-[1024px] mx-auto my-8 bg-white'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
  
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default User