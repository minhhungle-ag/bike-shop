import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuList } from '../../common/common'
import PropTypes from 'prop-types'

MobileMenu.propTypes = {
  onItemClick: PropTypes.func,
}
MobileMenu.defaultProps = {
  onItemClick: null,
}

export function MobileMenu({ onItemClick }) {
  return (
    <Box
      sx={{
        width: '60vw',
        p: 2,

        '.active > div': {
          color: 'primary.main',
          backgroundColor: 'grey.100',
        },
      }}
    >
      {Array.isArray(menuList) &&
        menuList.map((menu, idx) => (
          <NavLink
            key={idx}
            to={menu.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',

                mb: 0.5,
                p: 1,
                borderRadius: '8px',

                color: 'grey.500',
                backgroundColor: 'white',

                '&:hover': {
                  backgroundColor: 'grey.50',
                },
              }}
              onClick={onItemClick}
            >
              {menu.icon}

              <Box ml={1.5}>{menu.label}</Box>
            </Box>
          </NavLink>
        ))}
    </Box>
  )
}
