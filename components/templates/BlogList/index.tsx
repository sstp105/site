import React from 'react'
import { css } from 'styled-components'
import { Flex } from 'components/atoms/Layout'
import { Typography } from 'components/atoms/Typography'
import { Chip } from 'components/molecules/Chip'
import { Card } from 'components/organisms/Card'
import { IBlogBase } from 'types/schema/Blog'

interface IBlogListProps {
  blogs: Array<IBlogBase>
}

export const BlogList: React.FC<IBlogListProps> = (props) => {
  const { blogs } = props

  return (
    <>
      {blogs.map((blog: IBlogBase, index: number) => {
        const { _id, banner, title, tags, category, lastUpdatedDate, summary } =
          blog
        return (
          <Card
            key={_id}
            media={banner}
            variant="flex"
            float={index % 2 === 0 ? 'left' : 'right'}
            height="325px"
            css={css`
              margin-bottom: 25px;
            `}
          >
            <Typography variant="h6" margin={false}>
              {title}
            </Typography>
            <Flex
              css={css`
                margin-top: 10px;
              `}
            >
              <Chip
                variant="default"
                size="small"
                label={lastUpdatedDate.toString().split('T')[0]}
                icon="far fa-calendar-alt"
                css={css`
                  margin-right: 15px;
                `}
              />
              <Chip
                variant="default"
                size="small"
                label={category}
                icon="fas fa-inbox"
              />
            </Flex>
            <Typography variant="body">{summary.slice(0, 150)}...</Typography>
            <Flex
              css={css`
                margin: 20px 0;
              `}
            >
              {tags.slice(0, 3).map((t: string) => (
                <Chip
                  key={t}
                  label={t}
                  variant="outlined"
                  size="small"
                  css={css`
                    margin-right: 10px;
                    margin-bottom: 10px;
                  `}
                />
              ))}
            </Flex>
          </Card>
        )
      })}
    </>
  )
}
