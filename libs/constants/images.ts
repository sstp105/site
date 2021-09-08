const PATH_PREFIX = 'images'

const STATIC_IMAGE_PATH = {
  avatarOutline: '/avatar-outline.png',
  albumFrame: '/music_frame.png'
}

export const getImagePath = (key: keyof typeof STATIC_IMAGE_PATH) => {
  return PATH_PREFIX.concat(STATIC_IMAGE_PATH[key])
}
