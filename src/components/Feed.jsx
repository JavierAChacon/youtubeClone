import { useState } from 'react'
import { Stack, Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Sidebar } from './'

const Feed = () => {
  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row' } }}
    >
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 }
        }}
      >
        <Sidebar />
        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: 'white' }}
        >
          Copyright 2023 Baxter Media
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed