import styled, { css } from 'styled-components'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Card } from 'components/organisms/Card'
import { Typography } from 'components/atoms/Typography'
import { Flex } from 'components/atoms/Layout/Flex'
import blogData from 'data/blog.json'

const StyledWrapper = styled.div`
  border: 1px solid red;
`

export const HomeBlog: React.FC = () => {
  return (
    <StyledWrapper>
      <SectionHeader title="Recent Blogs" subtitle="Sharing My Thoughts." />
      <Flex align="stretch" justify="space-evenly">
        {blogData.map((elem) => (
          <Card
            key={elem.banner}
            cardBanner={{
              url: `${elem.banner}`,
              alt: 'demo'
            }}
            variant="stack"
            hoverable
            css={css`
              width: 400px;
            `}
          >
            <Typography margin={false} variant="h5">
              {elem.title}
            </Typography>
            <Typography variant="body">{elem.desc}</Typography>
          </Card>
        ))}
      </Flex>
    </StyledWrapper>
  )
}
