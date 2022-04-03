import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

RangeSlider.propTypes = {
  onChange: PropTypes.func,
}

function valuetext(value) {
  return `${value}°C`
}

export function RangeSlider({ onChange }) {
  const [value, setValue] = React.useState([199, 499])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    onChange?.(newValue)
  }

  return (
    <Box>
      <Typography variant="body1" sx={{ mb: 0.5 }}>
        Khoảng giá
      </Typography>

      <Typography variant="body1">
        Từ ${value[0]} - đến ${value[1]}
      </Typography>

      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={100}
        max={2000}
      />
    </Box>
  )
}
