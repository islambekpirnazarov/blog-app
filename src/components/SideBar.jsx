
import { useDispatch, useSelector } from 'react-redux'
import { filterPost, toggleSidebar } from '../store/action'
import { Avatar, Badge, Box, Divider, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const SideBar = () => {

  const { authors, isAuthorLoad } = useSelector(state => state.authorReducer)
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.postReducer)

  function filteredPosts(id) {
    const filterData = posts.filter(item => item.authorId == id)
    dispatch(filterPost(filterData))
    dispatch(toggleSidebar())
  }
  return (
    <Link to={'/'}>
      <Box>
        {authors.map((author, index) => (
          <Box key={author.id} _hover={{ bg: 'blackAlpha.100' }} >
            <Flex onClick={() => filteredPosts(author.id)} p={'10px'} rounded={'md'} cursor={'pointer'} _active={{ transform: 'scale(0.9)' }}>
              <Avatar src={author.avatar} />
              <Box ml='3'>
                <Text fontWeight='bold'>
                  {author.fullName}
                  {author.new && <Badge ml='1' colorScheme='green'>
                    New
                  </Badge>}
                </Text>
                <Text fontSize='sm'>{author.job}</Text>
              </Box>
            </Flex>
            {index !== authors.length - 1 && <Divider my={'10px'} />}
          </Box>
        ))}
      </Box>
    </Link>
  )
}

export default SideBar