import { Avatar, Badge, Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

const DetailedPost = () => {
  const { slug } = useParams()
  const { posts } = useSelector(state => state.postReducer)
  const { authors } = useSelector(state => state.authorReducer)
  const selectedPost = posts.find(post => `${post.slug}-${post.id}` == slug)
  const selectedAuthor = authors.find(author => author.id == selectedPost?.authorId)
  
  return (
    <Box textAlign={'center'} display={'flex'} flexDirection={'column'} gap={'10px'} alignItems={'center'}>
      <Heading>{selectedPost?.title}</Heading>
      <Flex p={'10px'} rounded={'md'} cursor={'pointer'} _active={{ transform: 'scale(0.9)' }}>
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
      <Box>{selectedPost?.excerpt}</Box>
      <Image src={selectedPost?.image}/>
      <Box mb={'20px'} textAlign={'start'} dangerouslySetInnerHTML={{__html : selectedPost?.content}}></Box>
    </Box>
  )
}

export default DetailedPost