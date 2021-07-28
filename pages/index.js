import Footer from "../src/components/commons/Footer";
import Menu from "../src/components/commons/Menu";
 
export default function Home() {
  return (
    //essa estilização da div faz o footer ficar na parte de baixo da página
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu/>
      <Footer/>
    </div>
  )
}
