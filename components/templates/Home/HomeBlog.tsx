import { css } from 'styled-components'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Card } from 'components/organisms/Card'
import { Typography } from 'components/atoms/Typography'
import { Flex } from 'components/atoms/Layout'
import blogData from 'data/blog.json'

export const HomeBlog: React.FC = () => {
  return (
    <>
      <SectionHeader title="Recent Blogs" subtitle="Sharing My Thoughts." />
      <Flex align="stretch" justify="space-evenly">
        {blogData.map((elem) => (
          <Card
            key={elem.banner}
            media={{
              url: `${elem.banner}`,
              alt: 'demo'
            }}
            variant="stack"
            hoverable
            css={css`
              width: 425px;
              margin-bottom: 50px;
            `}
          >
            <Typography margin={false} variant="h5">
              {elem.title}
            </Typography>
            <Typography variant="body">{elem.desc}</Typography>
          </Card>
        ))}
      </Flex>
    </>
  )
}
