import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { Box, IconButton, List, ListItem, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Container from './page-comp/Container'
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterPost, toggleSidebar } from "../store/action";

const Header = () => {
    const dispatch = useDispatch()
    const { colorMode, toggleColorMode } = useColorMode()
    const headerBg = useColorModeValue('whiteAlpha.100', 'gray.900')
    const headerBorderColor = useColorModeValue('gray.200', 'gray.700')
    const { pathname } = useLocation()


    return (
        <Box as='header' borderBottom={'1px'} borderColor={headerBorderColor} shadow={'sm'} bg={headerBg}>
            <Container>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'10px'} h={'70px'}>
                    <Link to={'/'}>
                        <Box fontWeight={'700'} fontSize={'20px'} cursor={'pointer'} onClick={() => dispatch(filterPost([]))}>Medium</Box>
                    </Link>
                    <Box display={'flex'} alignItems={'center'} gap={'20px'}>
                        <List fontWeight={'600'} display={'flex'} alignItems={'center'} gap={'20px'}>
                            <Link to={'/'}>
                                <ListItem color={pathname === '/' && 'primary.400'}>Home</ListItem>
                            </Link>
                            <Link to={'/create-post'}>
                                <ListItem color={pathname === '/create-post' && 'primary.400'}>Create post</ListItem>
                            </Link>
                            <ListItem display={{ base: 'block', lg: 'none' }}>
                                <IconButton onClick={() => dispatch(toggleSidebar())} fontSize={'22px'} cursor={'pointer'} icon={<TbLayoutSidebarRightExpand />} />
                            </ListItem>
                        </List>
                        <IconButton onClick={toggleColorMode} rounded={'full'} icon={colorMode === 'dark' ? <BiSun /> : <BiMoon />} fontSize={'18px'}></IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Header