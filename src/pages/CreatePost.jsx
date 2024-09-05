import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea } from '@chakra-ui/react'
import { Formik } from 'formik'
import * as Yup from "yup"
import RichText from '../components/page-comp/RichText'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CreatePost = () => {
  const { authors } = useSelector(state => state.authorReducer)
  const formReset = useRef()

  const validationSchema = Yup.object({
    title: Yup.string().min(10, 'Min character 10').max(100, 'Max character 100').required('Title is required'),
    excerpt: Yup.string().min(10, 'Min character 10').max(500, 'Max character 500').required('Excerpt is required'),
    content: Yup.string().min(50, 'Min character 50').required('Content is required'),
    image: Yup.string().url('Invalid image url').required("Image is required"),
    authorId: Yup.number().required('Author is required')
  })

  return (
    <Box>
      <Formik initialValues={{
        title: '',
        excerpt: '',
        content: '',
        image: '',
        authorId: '',
      }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(true)
          try {
            const res = axios.post('https://blog-db-1.onrender.com/posts', {
              ...values,
              slug: values.title.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")

            })

            actions.setSubmitting(false)
            
            toast.success('The post you created has been completed successfully', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",

            });

          } catch (err) {
            console.log(err);
            toast.error('Something went wrong', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",

            });
          }
          formReset.current.reset()
          actions.resetForm()
        }}
        validationSchema={validationSchema}>
        {(props) => (
          <form ref={formReset} onSubmit={props.handleSubmit}>
            <FormControl mb={'12px'} isInvalid={props.errors.title && props.touched.title}>
              <FormLabel fontSize={'16px'} fontWeight={'600'} mb={'3px'}>Title</FormLabel>
              <Input type='text' name='title' value={props.values.title} onBlur={props.handleBlur} onChange={props.handleChange} />
              <FormErrorMessage fontSize={'12px'} fontWeight={'500'} mt={'2px'}>{props.errors.title}</FormErrorMessage>
            </FormControl>

            <FormControl mb={'12px'} isInvalid={props.errors.excerpt && props.touched.excerpt}>
              <FormLabel fontSize={'16px'} fontWeight={'600'} mb={'3px'}>Excerpt</FormLabel>
              <Textarea resize={'none'} type='text' name='excerpt' value={props.values.excerpt} onBlur={props.handleBlur} onChange={props.handleChange} />
              <FormErrorMessage fontSize={'12px'} fontWeight={'500'} mt={'2px'}>{props.errors.excerpt}</FormErrorMessage>
            </FormControl>

            <FormControl mb={'12px'} isInvalid={props.errors.image && props.touched.image}>
              <FormLabel fontSize={'16px'} fontWeight={'600'} mb={'3px'}>Image url</FormLabel>
              <Input type='url' name='image' value={props.values.image} onBlur={props.handleBlur} onChange={props.handleChange} />
              <FormErrorMessage fontSize={'12px'} fontWeight={'500'} mt={'2px'}>{props.errors.image}</FormErrorMessage>
            </FormControl>

            <RichText props={props} />

            <FormControl mb={'12px'} isInvalid={props.errors.authorId && props.touched.authorId}>
              <FormLabel fontSize={'16px'} fontWeight={'600'} mb={'3px'}>Authors</FormLabel>
              <Select placeholder='Select Author' type='url' name='authorId' value={props.values.authorId} onBlur={props.handleBlur} onChange={props.handleChange} >
                {authors?.map(item => (
                  <option key={item.id} value={item.id}>{item.fullName}</option>
                ))}
              </Select>
              <FormErrorMessage fontSize={'12px'} fontWeight={'500'} mt={'2px'}>{props.errors.authorId}</FormErrorMessage>
            </FormControl>

            <Box display={'flex'} alignItems={'center'} justifyContent={'end'} py={'10px'}>
              <Button isLoading={props.isSubmitting} type='submit' colorScheme='primary' fontSize={'18px'} fontWeight={'500'} px={'25px'}>Send</Button>
            </Box>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  )
}

export default CreatePost