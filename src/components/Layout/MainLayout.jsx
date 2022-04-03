import { Box, Drawer, Stack } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'

MainLayout.propTypes = {
  children: PropTypes.node,
}
MainLayout.defaultProps = {
  children: null,
}

export function MainLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  function handleToggleMenu() {
    setShowMenu((x) => !x)
  }

  function handleHideMenu() {
    setShowMenu(false)
  }

  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Header onClick={handleToggleMenu} isShowMenu={showMenu} />

      <Drawer open={showMenu} onClose={handleHideMenu}>
        <MobileMenu onItemClick={handleHideMenu} />
      </Drawer>

      <Box sx={{ flexGrow: 1 }}>{children}</Box>

      <Footer />
    </Stack>
  )
}

export default MainLayout
