// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/experiences?populate=logo')
    .then(result => result.json())
    .then(result => res.send({...result}))
    .catch(err => res.send("404"));
  }
  