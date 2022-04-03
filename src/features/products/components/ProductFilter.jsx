import { Box, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { RangeSlider } from '../../../components/SortField/RangeSlider'
import { SearchBox } from '../../../components/SortField/SearchBox'
import { SortBox } from '../../../components/SortField/SortBox'

ProductFilter.propTypes = {
  onChange: PropTypes.func,
  searchParams: PropTypes.object,
}

const optionList = [
  {
    label: 'Xe đạp nam',
    value: 'man',
  },
  {
    label: 'Xe đạp nữ',
    value: 'women',
  },
]

function ProductFilter({ onChange, searchParams }) {
  function handleSearchChange(value) {
    onChange?.({
      ...searchParams,
      searchKey: value,
    })
  }

  function handleChange(value) {
    onChange?.({
      ...searchParams,
      sortKey: value,
    })
  }

  function handleSliderChange(values) {
    onChange?.({
      ...searchParams,
      priceKey: values,
    })
  }

  return (
    <Stack>
      <Typography variant="h5" fontWeight="bold" component="div" sx={{ mb: 3 }}>
        Categories
      </Typography>

      <Box sx={{ mb: 2, width: '100%' }}>
        <SearchBox onSearchChange={handleSearchChange} />
      </Box>
      <Box sx={{ mb: 2, width: '100%' }}>
        <SortBox optionList={optionList} onChange={handleChange} label="Sắp sếp theo" />
      </Box>

      <Box>
        <RangeSlider onChange={handleSliderChange} />
      </Box>
    </Stack>
  )
}

export default ProductFilter
