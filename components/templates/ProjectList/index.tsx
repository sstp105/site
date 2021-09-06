import React from 'react'
import { css } from 'styled-components'
import { Flex } from 'components/atoms/Layout'
import { Typography } from 'components/atoms/Typography'
import { Chip } from 'components/molecules/Chip'
import { Card } from 'components/organisms/Card'
import { IProjectBase } from 'types/schema/Project'
import { Button } from 'components/atoms/Button'
import { Link } from 'components/atoms/Link'

interface IProjectListProps {
  projects: Array<IProjectBase>
}

const readMoreBtnStyle = css`
  position: absolute;
  bottom: 25px;
  width: calc(100% - 50px);

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
    position: initial;
  }
`

export const ProjectList: React.FC<IProjectListProps> = (props) => {
  const { projects } = props

  return (
    <>
      {projects.map((project: IProjectBase, index: number) => {
        const { _id, banner, title, tags, category, description, url } = project
        return (
          <Card
            key={_id}
            media={banner}
            variant="flex"
            float={index % 2 === 0 ? 'left' : 'right'}
            height="350px"
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
                label={category}
                icon="fas fa-inbox"
              />
            </Flex>
            <Typography variant="body">
              {description.slice(0, 150)}...
            </Typography>
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
            <Link href={`/project/${project._id}`}>
              <Button variant="contained" fullWidth css={readMoreBtnStyle}>
                Read More
              </Button>
            </Link>
          </Card>
        )
      })}
    </>
  )
}
