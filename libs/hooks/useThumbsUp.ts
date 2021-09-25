import { updateVideoVoteById } from 'libs/service/db/video'
import { useState, useEffect } from 'react'

export interface VideoCacheMap {
  [key: string]: boolean
}

export const useThumbsUp = (
  videoTitle: string,
  _id: string,
  thumbsUp: number
) => {
  const [hasVoted, setHasUpVoted] = useState<VideoCacheMap>({})
  const [curThumbsUp, setCurThumbsUp] = useState({})

  useEffect(() => {
    if (!curThumbsUp[videoTitle]) {
      setCurThumbsUp((prevState) => ({
        ...prevState,
        [videoTitle]: thumbsUp
      }))
    }
  }, [videoTitle])

  useEffect(() => {
    const localVideoState = localStorage.getItem('video')

    if (localVideoState === null) {
      localStorage.setItem('video', JSON.stringify({ [videoTitle]: false }))
      setHasUpVoted((prevState) => ({
        ...prevState,
        [videoTitle]: false
      }))
    } else {
      const userVideoState = JSON.parse(localVideoState)
      if (!userVideoState[videoTitle]) {
        localStorage.setItem(
          'video',
          JSON.stringify({
            ...userVideoState,
            [videoTitle]: false
          })
        )
        setHasUpVoted((prevState) => ({
          ...prevState,
          [videoTitle]: false
        }))
      } else {
        setHasUpVoted((prevState) => ({
          ...prevState,
          [videoTitle]: userVideoState[videoTitle]
        }))
      }
    }
  }, [videoTitle])

  // request call
  const upVote = () => {
    const videoState = JSON.parse(localStorage.getItem('video'))
    localStorage.setItem(
      'video',
      JSON.stringify({
        ...videoState,
        [videoTitle]: true
      })
    )
    setHasUpVoted((prevState) => ({
      ...prevState,
      [videoTitle]: true
    }))
    setCurThumbsUp((prevState) => ({
      ...prevState,
      [videoTitle]: prevState[videoTitle] + 1
    }))
    updateVideoVoteById(_id, 'up')
  }

  // request call
  const downVote = () => {
    const videoState = JSON.parse(localStorage.getItem('video'))
    localStorage.setItem(
      'video',
      JSON.stringify({
        ...videoState,
        [videoTitle]: false
      })
    )
    setHasUpVoted((prevState) => ({
      ...prevState,
      [videoTitle]: false
    }))
    setCurThumbsUp((prevState) => ({
      ...prevState,
      [videoTitle]: prevState[videoTitle] - 1
    }))
    updateVideoVoteById(_id, 'down')
  }

  const toggleVote = () => {
    if (hasVoted[videoTitle]) {
      downVote()
    } else {
      upVote()
    }
  }

  return { hasVoted, toggleVote, curThumbsUp }
}
