
const Table = ({headers, rows}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        {/* <th>{th1}</th> */}
                        {
                            headers.map((header,idx)=> <th key={idx}>
                                {header}
                            </th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) => (
                            <tr key={idx}>
                                {
                                    row.map((cell, idx)=> <td key={idx}>{cell}</td>)
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;