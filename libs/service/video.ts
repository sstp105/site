export const updateVideoVoteById = async (
  _id: string,
  voteType: 'up' | 'down'
) => {
  fetch(`api/video/${_id}?voteType=${voteType}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
