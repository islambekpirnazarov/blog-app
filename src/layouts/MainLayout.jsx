import { BsArrowLeftSquare } from "react-icons/bs";
import { Box, Flex, IconButton, Spinner, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Container from '../components/page-comp/Container'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataAuthor, fetchDataPost, toggleSidebar } from "../store/action";

const MainLayout = () => {
    const { isPostLoad } = useSelector(state => state.postReducer)
    const url = "https://blog-db-1.onrender.com/posts"
    const authorUrl = "https://blog-db-1.onrender.com/authors"
    useEffect(() => {
        dispatch(fetchDataPost(url))
        dispatch(fetchDataAuthor(authorUrl))
    }, [])
    const dispatch = useDispatch()
    const { showSidebar } = useSelector(state => state.sidebarReducer)
    const sidebarBg = useColorModeValue('white', 'gray.900')
    const postScroll = useRef()
    const { pathname } = useLocation()
    useEffect(() => {
        postScroll.current.scrollTop = 0
    }, [pathname])
    return (
        <Box fontFamily={'Work Sans'}>
            <Header />
            <Box ref={postScroll} maxH={'calc(100vh - 72px)'} minH={'calc(100vh - 72px)'} overflow={'auto'} pos={'relative'}>
                <Container>
                    {isPostLoad ?
                        <Box h={'65vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'10px'} fontSize={'20px'} fontWeight={'600'}>
                            <Spinner size={'lg'} speed="1s" thickness={'4px'} />
                            <Box>Loading...</Box>
                        </Box>
                        :
                        <Flex mt={'20px'} gap={'10px'} alignItems={'start'}>
                            <Box flex={'3'} p={'10px'}>
                                <Content>
                                    <Outlet />
                                </Content>
                            </Box>
                            {showSidebar &&
                                <Box zIndex={'10000'} display={{ base: 'block', lg: 'none' }} pos={'fixed'} top={'0'} bottom={'0'} left={'0'} right={'0'} bg={'blackAlpha.500'}>
                                    <Box pos={'absolute'} top={'5px'} right={'5px'} bottom={'5px'} minW={'50%'} p={'10px'} bg={sidebarBg}>
                                        <SideBar />
                                        <Box position={'absolute'} bottom={'20px'} left={'20px'}>
                                            <IconButton onClick={() => dispatch(toggleSidebar())} fontSize={'20px'} fontWeight={'bold'} icon={<BsArrowLeftSquare />} />
                                        </Box>
                                    </Box>
                                </Box>}
                            <Box flex={'1'} display={{ base: 'none', lg: 'block' }} pos={'sticky'} top={'20px'} p={'10px'} bg={sidebarBg}>
                                <SideBar />
                            </Box>
                        </Flex>}
                </Container>
            </Box>
        </Box>
    )
}

export default MainLayout