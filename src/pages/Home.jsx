import { Box, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import PostCard from '../components/page-comp/PostCard'

const Home = () => {
  const {posts, filterPosts, isPostLoad} = useSelector(state => state.postReducer)
  const {authors, isAuthorLoad} = useSelector(state => state.authorReducer)
  const dispatch = useDispatch()

  return (
    <Box>
      {filterPosts.length > 0 ? 
      filterPosts.map(item => (
        <PostCard item={item} authors={authors} key={item.id}/>
      ))
      :
      posts.map(item => (
        <PostCard item={item} authors={authors} key={item.id}/>
      ))}
    </Box>
  )
}

export default Home