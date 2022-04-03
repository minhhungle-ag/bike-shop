import { CircularProgress, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Loading(props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    loading && (
      <Stack
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,

          bgcolor: 'white',
        }}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    )
  )
}

export default Loading
