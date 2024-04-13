import { useState, useEffect } from "react"

import Card from "../../Components/Card"

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    let urlapi = `https://api.escuelajs.co/api/v1/products`

    fetch(urlapi)
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(data => setItems(data))
      .catch(e => console.error("Error consumir api" + e))
  }, [])
  return (
    <>
      <div>Home</div>
      <div className="grid gap-4 grid-cols-4">
        {
          items?.map((data, index) => <Card data={data} key={index} index={index}/>)
        }
      </div>
      
    </>
  )
}

export default Home