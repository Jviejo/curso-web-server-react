import { useQuery } from 'react-query';

const clienteFacturas = async ({ queryKey }) => {
    const [_, id] = queryKey
    const res = await fetch(`http://localhost:5555/customers/${id}`);
    return res.json();
};

function App() {

    const { isLoading, data } = useQuery(["facturas", 'VINET'], clienteFacturas);

    if (isLoading) {
        return <div>Cargando...</div>
    }
    return (
        <div className="container">
            <h3>cliente</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>nombre</td>
                    </tr>
                </thead>
                <tbody>
                    {data.cliente.map(cliente => (
                        <tr key={cliente.customer_id}>
                            <td>{cliente.customer_id}</td>
                            <td>{cliente.company_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>facturas</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <td>factura</td>
                        <td>fecha</td>
                    </tr>
                </thead>
                <tbody>
                    {data.facturas.map(factura => (
                        <tr key={factura.order_id}>
                            <td>{factura.order_id}</td>
                            <td>{factura.order_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default App;