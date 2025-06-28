export default function handler(req, res) {
    res.status(200).json([
        {id: 1, name: 'Preet Singhwal'},
        {id: 2, name: 'NextJS Session Owner'}
    ])
}