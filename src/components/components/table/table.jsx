import "./table.css";

export const OrderTable = () => {
  const data = [
    { name: "manikanta", age: 21, email: "abcd@gmail.com" },
    { name: "manikanta", age: 21, email: "abcd@gmail.com" },
    { name: "manikanta", age: 21, email: "abcd@gmail.com" },
  ];

  return (
    <>
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((item) => (
              <td>{item.name}</td>
                
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};
