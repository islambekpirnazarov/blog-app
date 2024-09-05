import { Box } from '@chakra-ui/react'
import React from 'react'

const Container = ({children}) => {
  return (
    <Box w={{base : '90%', lg : '85%'}} maxW={'1440px'} mx={'auto'}>
        {children}
    </Box>
  )
}

export default Container