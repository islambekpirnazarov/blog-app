import { Avatar, Badge, Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PostCard = ({ item, authors }) => {
  const {isPostLoad} = useSelector(state => state.postReducer)
  const selectedAuthor = authors.find(author => author.id == item.authorId)
  const cardBorder = useColorModeValue('gray.300', 'gray.700')
  const navigate = useNavigate()

  return (
    <Box onClick={() => navigate(`/post/${item.slug}-${item.id}`)} cursor={'pointer'} mb={'20px'} display={'flex'} border={'1px'} borderColor={cardBorder} rounded={'lg'} p={'15px'} flexDirection={{base : 'column-reverse', md : 'row'}} gap={'20px'}>
      <Box flex={2.5}>
        <Flex p={'10px'} rounded={'md'} cursor={'pointer'}>
          <Avatar src={selectedAuthor?.avatar} />
          <Box ml='3'>
            <Text fontWeight='bold'>
              {selectedAuthor?.fullName}
              {selectedAuthor?.new && <Badge ml='1' colorScheme='green'>
                New
              </Badge>}
            </Text>
            <Text fontSize='sm'>{selectedAuthor?.job}</Text>
          </Box>
        </Flex>
        <Heading fontSize={'25px'}>{item.title}</Heading>
        <Text fontSize={{base : '14px', lg : '16px'}}>{item.excerpt}</Text>
      </Box>
      <Box flex={1} rounded={'md'} overflow={'hidden'}>
        <Image w={'full'} h={'full'} minW={'250px'} objectFit={'cover'} src={item.image} />
      </Box>
    </Box>
  )
}

export default PostCard