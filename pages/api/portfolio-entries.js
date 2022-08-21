export default function handler(req, res) {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/portfolio-entries?populate=images')
    .then(result => result.json())
    .then(result => res.send({...result}))
    .catch(err => res.send("404"));
  }
  