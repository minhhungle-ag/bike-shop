import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { contactList } from '../../common/common'

export function Contact() {
  return (
    <Box sx={{ my: 10 }}>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          <Box sx={{ width: { xs: '100%', md: '40%' } }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h4" component="h4" fontWeight="bold" sx={{ mb: 2, color: 'grey.700' }}>
                LIÊN HỆ CHÚNG TÔI
              </Typography>

              {contactList.map((item, idx) => (
                <Box key={idx} sx={{ mb: 1 }}>
                  <Typography variant="h6" component="h6" fontWeight="bold">
                    {item.title}
                  </Typography>

                  {item.descList.map((desc, descIdx) => (
                    <Typography key={descIdx} variant="body1" component="p" sx={{ color: 'grey.500' }}>
                      {desc}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', md: '60%' } }}>
            <Box sx={{ p: 2 }}>
              <iframe
                src="https://web-1061.webnode.vn/widgets/googlemaps/?z=15&amp;a=rui+barbosa+%E2%80%93+Montes+Claros%2F++39400-051&amp;s="
                loading="lazy"
                title="Map"
                width="100%"
                height="450px"
              ></iframe>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
