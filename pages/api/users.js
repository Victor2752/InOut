export default function usuario (req, res) {

    const {method, query} = req;

    if (method === 'GET'){
        res.status(200).json({
            id: 1, 
            email: 'victor', 
            senha: '12345',
            method,
            query
        });
    }else{
        res.status(405).json({ message: 'Metodo invalido'});
    }
}