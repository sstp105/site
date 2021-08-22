import React, { useContext } from 'react'
import { css } from 'styled-components'
import { ProfileContext } from 'context/ProfileContext'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Card } from 'components/organisms/Card'
import { Typography } from 'components/atoms/Typography'
import { Flex } from 'components/atoms/Layout'
import { IBlogBase } from 'types/schema/Blog'

export const HomeBlog: React.FC = () => {
  const blogs: Array<IBlogBase> = useContext(ProfileContext).blogs

  return (
    <>
      <SectionHeader title="Recent Blogs" subtitle="Sharing My Thoughts." />
      <Flex align="stretch" justify="space-evenly">
        {blogs.map((elem) => (
          <Card
            key={elem._id}
            media={elem.banner}
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
            <Typography variant="body">
              {elem.summary.substring(0, 150)}...
            </Typography>
          </Card>
        ))}
      </Flex>
    </>
  )
}
