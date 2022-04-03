import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

ProductList.propTypes = {
  productList: PropTypes.array,
}

const Img = styled('img')(() => ({
  width: '100%',
  verticalAlign: 'middle',
}))

export function ProductList({ productList = [] }) {
  return (
    <Stack direction="row" flexWrap="wrap">
      {productList.map((product, idx) => (
        <Box
          sx={{
            width: { xs: '100%', sm: 1 / 2, md: 1 / 3 },
          }}
          key={product.id}
        >
          <Box sx={{ p: 2, textAlign: 'center', fontWeight: 'bold' }}>
            <Img src={product.thumbnailUrl} alt="product" />
            <Typography variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ color: 'grey.500' }}>
              $ {product.price}.00
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  )
}

export default ProductList
