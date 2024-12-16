import React, { useContext } from 'react'
import { css } from 'styled-components'
import { ProfileContext } from 'context/ProfileContext'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Card } from 'components/organisms/Card'
import { Typography } from 'components/atoms/Typography'
import { Flex } from 'components/atoms/Flex'
import { IBlogBase } from 'types/schema/Blog'
import { Link } from 'components/atoms/Link'

export const HomeBlog: React.FC = () => {
  const blogs: Array<IBlogBase> = useContext(ProfileContext).blogs.slice(0, 3)

  return (
    <>
      <SectionHeader title="Recent Blogs" subtitle="Sharing My Thoughts." />
      <Flex align="stretch" justify="space-evenly">
        {blogs.map((elem) => (
          <Link href={`/blog/${elem.id}`} key={elem.id}>
            <Card
              media={elem.banner}
              variant="stack"
              hoverable
              css={css`
                width: 425px;
                margin-bottom: 50px;
                height: 500px;
                cursor: pointer;
              `}
            >
              <Typography margin={false} variant="h6">
                {elem.title}
              </Typography>
              <Typography variant="body">
                {elem.summary.substring(0, 150)}...
              </Typography>

              <Typography
                variant="note"
                color="caption"
                css={css`
                  position: absolute;
                  bottom: 10px;
                  height: 100%;
                `}
              >
                Last updated on {elem.lastUpdatedDate.toString().split('T')[0]}
              </Typography>
            </Card>
          </Link>
        ))}
      </Flex>
    </>
  )
}
