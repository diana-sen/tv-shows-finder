import { useEffect, useState } from 'react'

// services
import { axiosData } from '../services/fetchData'

//components
import Layout from '../layout'
import Card from './common/Card'

function App () {
  /* logics and hooks */
  const [shows, setShows] = useState([])
  useEffect(() => {
    const data = async () => {
      const res = await axiosData()
      setShows(res)
    }
    data()
  }, [])

  /* views */
  return (
    <Layout>
      <section className='container py-4'>
        <section className='row gy-4'>
          {shows.length === 0
            ? <p className='m-0'>Loading...</p>
            : shows.map((show, index) => (
              <aside key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <Card image={show.image} name={show.name} rating={show.rating} /* {...country} */ />
              </aside>)
            )}
        </section>
      </section>
    </Layout>
  )
}

export default App
