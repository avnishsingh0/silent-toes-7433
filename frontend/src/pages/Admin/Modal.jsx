import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
export default function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
  
    return (
      <>
        <Button bg={'tomato'} onClick={onOpen}>Edit item</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Your Products</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input ref={initialRef} placeholder='Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Enter Original Price</FormLabel>
                <Input placeholder='Price' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Enter image url</FormLabel>
                <Input placeholder='Image url' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Discount Price</FormLabel>
                <Input placeholder='Dis Price' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Change
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }