import { Box, Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const Img = styled('img')(() => ({
  width: '100%',
  verticalAlign: 'middle',
}))

export function About() {
  return (
    <Box sx={{ color: 'grey.700' }}>
      <Container>
        <Box sx={{ my: 10 }}>
          <Typography variant="h4" component="h4" fontWeight="bold" sx={{ mb: 2 }}>
            <Box component="span" sx={{ color: 'grey.500' }}>
              XE ĐẠP LEO NÚI MTB
            </Box>{' '}
            LÀ SỞ HỮU CỦA NHỮNG NGƯỜI LÃNH ĐẠO CHUYÊN NGHIỆP
          </Typography>

          <Typography variant="h5" component="p" sx={{ mb: 2 }}>
            Với hơn 40 năm trên thị trường, chúng tôi là một trong những cửa hàng kinh doanh xe đạp trong khu vực. Chúng
            tôi luôn ưu tiên chất lượng, giá cả và dịch vụ hoàn hảo.
          </Typography>

          <Typography variant="h5" component="p" sx={{ mb: 2 }}>
            Chúng tôi biết ơn tất cả những người đã đồng hành cùng chúng tôi và tất cả những người bạn mà chúng tôi đã
            kết bạn trên chặng đường dài này.
          </Typography>

          <Typography variant="h5" component="p">
            Raphael Nobre / Ricardo Nobre.
          </Typography>
        </Box>

        <Stack direction="row" flexWrap="wrap" sx={{ my: 10, mx: -2 }}>
          <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
            <Box sx={{ p: 2 }}>
              <Img src="https://d1di2lzuh97fh2.cloudfront.net/files/0x/0xu/0xun0u.jpg?ph=97063f6127" alt="about" />
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', md: 1 / 2 } }}>
            <Box sx={{ p: 2 }}>
              <Img src=" https://d1di2lzuh97fh2.cloudfront.net/files/42/429/42922j.jpg?ph=97063f6127" alt="about" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default About
