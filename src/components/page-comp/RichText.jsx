import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';
import { useState } from 'react';
import { Box, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';

const RichText = ({props}) => {
    const [model, setModel] = useState()
    const handleModelChange = event => {
        setModel(event)
        props.values.content = event
    }
    
  return (
    <FormControl mb={'12px'} isInvalid={props.errors.content && props.touched.content}>
      <FormLabel fontSize={'16px'} fontWeight={'600'} mb={'3px'}>Content</FormLabel>
      <FroalaEditorComponent tag='textarea' model={model} onModelChange={handleModelChange}/>
      <FormErrorMessage fontSize={'12px'} fontWeight={'500'} mt={'2px'}>{props.errors.content}</FormErrorMessage>
    </FormControl>
  )
}

export default RichText