import { Box, Container, Divider, Stack, styled, Typography, alpha } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { footerList } from '../../common/common'
import { FOOTER_BG_URL } from '../../constants/common'

const Line = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.grey[500],
}))

export function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${FOOTER_BG_URL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'grey.500',
      }}
    >
      <Box sx={{ backgroundColor: (theme) => alpha(theme.palette.common.black, 0.6) }}>
        <Container>
          <Stack direction="row" flexWrap="wrap" sx={{ py: 10, mx: -2 }}>
            {footerList.map((item, idx) => (
              <Box
                sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 4 }, textAlign: { xs: 'left', md: item.textAlign } }}
                key={idx}
              >
                <Stack sx={{ p: 2 }}>
                  <Typography variant="h5" component="h5" fontWeight="bold" sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>

                  {item.descriptionList.length > 0 &&
                    item.descriptionList.map((desc, idx) => (
                      <Typography variant="body1" component="p" key={idx}>
                        {desc}
                      </Typography>
                    ))}

                  {item.linkList.length > 0 &&
                    item.linkList.map((item, idx) => (
                      <Link to={item.path} key={idx}>
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{ display: 'inline', borderBottom: '1.5px solid', borderColor: 'grey.500' }}
                        >
                          {item.label}
                        </Typography>
                      </Link>
                    ))}
                </Stack>
              </Box>
            ))}
          </Stack>

          <Line />

          <Box
            sx={{
              py: 2,

              textAlign: 'center',
            }}
          >
            Website đồ án được phát triển bởi FE: Lê Minh Hùng - BE: Ông Hoài Thịnh | FDEV - D003
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
