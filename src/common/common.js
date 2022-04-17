import HomeIcon from '@mui/icons-material/Home'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
export const menuList = [
  {
    path: '/home',
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    path: '/products',
    label: 'Products',
    icon: <Inventory2OutlinedIcon />,
  },
  {
    path: '/about',
    label: 'About',
    icon: <InfoOutlinedIcon />,
  },
  {
    path: '/contact',
    label: 'Contact',
    icon: <ContactsOutlinedIcon />,
  },
  {
    path: '/cart',
    label: 'Cart',
    icon: <ShoppingCartOutlinedIcon />,
  },
]

export const footerList = [
  {
    title: 'XE ĐẠP RC',
    descriptionList: [],
    linkList: [],
    textAlign: 'left',
  },
  {
    title: 'THÔNG TIN',
    descriptionList: [],
    linkList: [
      {
        label: 'Điều khoản và điều kiện',
        path: '/',
      },
      {
        label: 'Chính sách quyền riêng tư',
        path: '/',
      },
    ],
    textAlign: 'left',
  },
  {
    title: 'CỬA HÀNG',
    descriptionList: [],
    linkList: [
      {
        label: 'Về chúng tôi',
        path: '/about',
      },
      {
        label: 'Liên hệ',
        path: '/contact',
      },
    ],
    textAlign: 'left',
  },
  {
    title: 'Liên hệ nhanh',
    descriptionList: ['Email: demo@webnode.com', 'Phone: (541) 754-3010'],
    linkList: [],
    textAlign: 'right',
  },
]

export const contactList = [
  {
    title: 'Địa chỉ',
    descList: ['Rua Rui barbosa 144 Centro - Montes Claros / 39400-051'],
  },

  {
    title: 'Điện thoại:',
    descList: ['(+38) 3221-5030', '(+38) 98816-4767'],
  },
  {
    title: 'Instagram',
    descList: ['@ rcbokemoc'],
  },
  {
    title: 'Email:',
    descList: ['raphaelrcbike@gmail.com'],
  },
  {
    title: 'Giờ làm việc:',
    descList: ['Thứ Hai - Thứ Sáu: 08:00 - 18:00', 'Thứ Bảy: 08:00 - 13:00', 'Chủ Nhật: Đóng cửa'],
  },
]
