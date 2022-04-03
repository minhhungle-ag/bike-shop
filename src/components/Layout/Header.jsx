import styled from '@emotion/styled'
import { Close } from '@mui/icons-material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import MenuIcon from '@mui/icons-material/Menu'
import { alpha, Button, Container, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { menuList } from '../../common/common'
import { BANNER_URL } from '../../constants/common'

Header.propTypes = {
  onClick: PropTypes.func,
  isShowMenu: PropTypes.bool,
}

const Image = styled('img')(({ theme }) => ({
  width: '100%',
}))

export function Header({ onClick, isShowMenu }) {
  const [scrolling, setScrolling] = React.useState(false)

  const debounceScroll = debounce(() => {
    const windowHeight = window.scrollY
    windowHeight > 50 ? setScrolling(true) : setScrolling(false)
  }, 100)

  React.useEffect(() => {
    window.addEventListener('scroll', debounceScroll)
    return window.removeEventListener('scroll', () => debounceScroll())
  }, [debounceScroll])

  return (
    <Box
      sx={{
        backgroundImage: `url(${BANNER_URL})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: {
          xs: 'left',
          sm: 'center',
        },
      }}
    >
      <Box>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1030,
            backgroundColor: scrolling ? (theme) => alpha(theme.palette.common.black, 0.8) : 'transparent',
          }}
        >
          <Container>
            <Toolbar sx={{ p: { xs: '8px 0', sm: '16px 0' } }}>
              <Stack direction="row" alignItems="center" sx={{ flexGrow: 1, color: 'white' }}>
                <Box sx={{ width: 50 }}>
                  <Link to="">
                    <Image
                      alt="logo"
                      src="https://d6scj24zvfbbo.cloudfront.net/fe19b9233f35521d04e07d53950f660f/200000065-577695868e/200/RC%20BIKE%20-%20LOGOTIPO%20branco.png?ph=b835aeef8c"
                    />
                  </Link>
                </Box>

                <Typography variant="h6" component="span" fontWeight="bold" sx={{ ml: 1, color: 'white' }}>
                  Xe đạp RC
                </Typography>
              </Stack>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },

                  '.active > div': {
                    fontWeight: 'bold',
                    color: 'white',
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
                          ml: 3,
                          py: 1,
                          borderBottom: '1.5px solid',
                          borderColor: 'transparent',
                          color: 'grey.300',

                          '&:hover': {
                            color: 'white',
                            borderColor: 'white',
                          },
                        }}
                      >
                        {menu.label}
                      </Box>
                    </NavLink>
                  ))}
              </Box>

              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{
                  display: {
                    xs: 'block',
                    md: 'none',
                  },
                  p: 0,
                  color: 'white',
                  fontSize: 'large',
                }}
                onClick={onClick}
              >
                {isShowMenu ? <Close /> : <MenuIcon />}
              </IconButton>
            </Toolbar>
          </Container>
        </Box>

        <Box>
          <Container>
            <Stack sx={{ py: 20 }}>
              <Box sx={{ width: { xs: '100%', sm: '40%', color: 'white' } }}>
                <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
                  Với bạn trong hơn 40 năm.
                </Typography>

                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                  Cửa hàng nằm ở thành phố Montes Claros MG Xe đạp, phụ kiện và quần áo cho người đi xe đạp. Chúng tôi
                  giao hàng trên khắp Brazil!
                </Typography>

                <Typography variant="body1" component="p" sx={{ mb: 4 }}>
                  Xe đạp, phụ kiện và quần áo cho người đi xe đạp. Chúng tôi giao hàng trên khắp Brazil!
                </Typography>

                <Button variant="contained" color="primary" endIcon={<ArrowRightAltIcon />}>
                  Xem thêm
                </Button>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
