import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Parallax Scroll Down Animation Using JS"
            thumbnail={thumbFishWorkflow}
            href="https://youtube.com/watch?v=RajYpAlapBM"
          />
          <GridItem
            title="Timeline Animation Using Anime JS"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=mr1iXU9fCOQ"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Making A Resume Website"
            thumbnail={thumb500PaidUsers}
            href="https://www.youtube.com/watch?v=BeuDq5kulTI"
          />
          <GridItem
            title="How to Make A Digital Clock With JavaScript"
            thumbnail={thumbFinancialGoal}
            href="https://www.youtube.com/watch?v=iDnPI4wE6A0"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Top 10 JavaScript Projects"
            thumbnail={thumbHowToPriceYourself}
            href="https://www.youtube.com/watch?v=xFTNLcMSsQU"
          />
          <GridItem
            title="Making A Random Password Generator"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=fn_0ApEeeds"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
