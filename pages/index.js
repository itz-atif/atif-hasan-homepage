import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoGithub, IoLogoFacebook, IoLogoLinkedin, IoUnlink, IoUnlinkSharp, IoUnlinkOutline } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/inkdrop-banner.jpg'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Bangladesh!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Atif Hasan
          </Heading>
          <p>Web Developer, Designer, Programmer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/atif.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Atif is a freelance and a full-stack web developer based in Bogura with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera.
          
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2006</BioYear>
          Born in Bogura, Bangladesh.
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Junior School Certificate in Bogura Cantonment Public School & College
        </BioSection>

        <BioSection>
          <BioYear>2023</BioYear>
          Completed the Secondary School Certificate in Bogura Cantonment Public School & College
        </BioSection>
        
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Works as a Web Developer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Making Math Problems, Drawing, Photography, Programming, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Skills
        </Heading>
        <Paragraph>

          
          <Heading as="h3" variant="section-title">FrontEnd:</Heading>
            <ul>
            JavaScript,
            React JS,
            Next JS
            </ul>
          <Heading as="h3" variant="section-title">BackEnd:</Heading>
            <ul><ul>
            NODE JS,
            PHP,
            Python
            </ul></ul>
          <Heading as="h3" variant="section-title">Design:</Heading>
            <ul>
            Photoshop,
            Figma,
            Adobe XD
            </ul>

          
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/itz-atif/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Itz-Atif
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://facebook.com/atifhasan250" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                atifhasan250
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://instagram.com/_atif_hasan_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                _Atif_Hasan_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/atif-hasan-6850a122a/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Atif Hasan
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://atif-info-links.vercel.app/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoUnlinkSharp} />}
              >
                My Info
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://youtube.com/channel/UCjOB00rT2VkuLBThYr0dZ8A"
            title="FR Softwares"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://fr-softwares.netlify.app/"
            title="FR Softwares"
            thumbnail={thumbInkdrop}
          >
            My Agency Website
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
