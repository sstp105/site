import React, { useContext } from 'react'
import { css } from 'styled-components'
import { ProfileContext } from 'context/ProfileContext'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Card } from 'components/organisms/Card'
import { Button } from 'components/atoms/Button'
import { Typography } from 'components/atoms/Typography'
import { Chip } from 'components/molecules/Chip'
import { Flex } from 'components/atoms/Flex'
import { IProjectBase } from 'types/schema/Project'
import { Link } from 'components/atoms/Link'
import { MESSAGE } from 'libs/constants/text'

const readMoreBtnStyle = css`
  position: absolute;
  bottom: 25px;
  width: calc(100% - 50px);

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
    position: initial;
  }
`

export const HomePortfolio: React.FC = () => {
  const projects: Array<IProjectBase> = useContext(ProfileContext).projects

  return (
    <>
      <SectionHeader title="Portfolio" subtitle="Learn by Doing." />
      {projects.map((elem, index) => (
        <Card
          key={elem._id}
          media={elem.banner}
          variant="flex"
          float={index % 2 == 0 ? 'left' : 'right'}
          height="400px"
          css={css`
            margin-bottom: 50px;
          `}
        >
          <Typography variant="h5" margin={false}>
            {elem.title}
          </Typography>
          <Typography variant="body">{elem.description}</Typography>
          <Flex
            css={css`
              margin: 20px 0;
            `}
          >
            {elem.tags.map((t) => (
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
          <Link href={`/project/${elem._id}`}>
            <Button variant="contained" fullWidth css={readMoreBtnStyle}>
              {MESSAGE.READMORE}
            </Button>
          </Link>
        </Card>
      ))}
    </>
  )
}
