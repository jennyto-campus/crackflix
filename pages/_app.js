import Layout from '../Components/Layout'
import '../styles/globals.css'

function MyApp({ Component, props }) {
  return (
    <Layout>
        <Component {...props} />
    </Layout>
    
  )
  
}

export default MyApp
