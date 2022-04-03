import { Box, Container, Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { initialProductList } from '../../../api/mockApi'
import { stringToASCII } from '../../../utils/common'
import ProductFilter from '../components/ProductFilter'
import ProductList from '../components/ProductList'

function ProductPage() {
  const [productList, setProductList] = useState(initialProductList)
  const [searchParams, setSearchParams] = useState({ page: 1, searchKey: '', sortKey: '', priceKey: [0, 399] })

  useEffect(() => {
    if (searchParams.page) {
      const newProductList = initialProductList
        .filter((item) => (searchParams.page ? item.page === searchParams.page : item))
        .filter((item) =>
          searchParams.searchKey ? stringToASCII(item.title).includes(stringToASCII(searchParams.searchKey)) : item
        )
        .filter((item) => (searchParams.sortKey ? item.sortKey === searchParams.sortKey : item))
        .filter((item) =>
          searchParams.priceKey
            ? parseInt(searchParams.priceKey[0]) <= parseInt(item.price) &&
              parseInt(item.price) <= parseInt(searchParams.priceKey[1])
            : item
        )

      setProductList(newProductList)
    }
  }, [searchParams])

  function handleChange(values) {
    console.log({ values })
    setSearchParams(values)
  }

  function handlePaginationChange(e, nextPage) {
    setSearchParams({
      ...searchParams,
      page: nextPage,
    })
  }

  return (
    <Box sx={{ my: 10 }}>
      <Container>
        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          <Box sx={{ width: { xs: '100%', sm: 1 / 4 } }}>
            <Box sx={{ p: 2 }}>
              <ProductFilter onChange={handleChange} searchParams={searchParams} />
            </Box>
          </Box>

          <Box sx={{ width: { xs: '100%', sm: 3 / 4 } }}>
            <Box sx={{ p: 2 }}>
              <ProductList productList={productList} />
            </Box>

            <Stack alignItems="center" sx={{ mt: 2 }}>
              <Pagination
                count={Math.ceil(initialProductList.length / 9)}
                variant="outlined"
                shape="rounded"
                onChange={handlePaginationChange}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default ProductPage
