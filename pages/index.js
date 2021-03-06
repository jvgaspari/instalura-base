import { Button } from "../src/components/commons/Button";
import Footer from "../src/components/commons/Footer";
import Menu from "../src/components/commons/Menu";
import { Box } from "../src/components/foundation/layout/Box";
import { Grid } from "../src/components/foundation/layout/Grid";
import Text from "../src/components/foundation/Text";
 
export default function Home() {
  return (
    //essa estilização da div faz o footer ficar na parte de baixo da página
    <Box 
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Menu/>
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <div>
              <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                // textAlign="center"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Compartilhe momentos e conecte-se com amigos
              </Text>
              <Text
                variant="paragraph1"
                tag="p"
                color="tertiary.light"
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
              </Text>
              <Button
                variant="primary.main"
                margin={{
                  xs: 'auto',
                  md: 'initial',
                }}
                display="block"
                >
                  Cadastrar
              </Button>
              </div>
              </Grid.Col>
              <Grid.Col
                value={{ xs: 12, md: 6 }}
              >
                <img src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png" alt="imagem top"/>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer/>
    </Box>    
  )
}
