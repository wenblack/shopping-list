import React, { useState } from "react";
import {
  Center,
  Button,
  ButtonText,
  Modal,
  ModalContent,
  ModalBackdrop,
  ModalHeader,
  ModalCloseButton,
  Icon,
  ModalBody,
  CloseIcon,
  Text,
  ModalFooter,
  VStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  HStack,
} from "@gluestack-ui/themed";
import waterIcon from "@/assets/Icons/Emoji";
import { CardWater } from "@/components/CardWater";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const ref = React.useRef(null);

  function modalOpen() {
    setTimeout(() => {
      setShowModal(true);
    }, 1);
  }

  return (
    <Center bgColor="#1F2128" height={"$full"}>
      <CardWater percentage={100} amount={3} />
      <HStack w={299} justifyContent="space-between">
        <Text color="#7FC4ED" fontSize={16} fontWeight="$semibold">
          Meta diaria
        </Text>
        <Text color="#7FC4ED" fontSize={16} fontWeight="$semibold">
          3L
        </Text>
      </HStack>
      <Slider
        defaultValue={0}
        size="sm"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
        w={"60%"}
        maxWidth={299}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <HStack w={299} justifyContent="space-between">
        <Text color="#7FC4ED" fontSize={16} fontWeight="$semibold">
          Quantidade por timer
        </Text>
        <Text color="#7FC4ED" fontSize={16} fontWeight="$semibold">
          100ml
        </Text>
      </HStack>
      <Slider
        defaultValue={0}
        size="sm"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
        w={"60%"}
        maxWidth={299}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Button onPress={() => modalOpen()} ref={ref}>
        <ButtonText>Show Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent backgroundColor="#1D1B26" h={254} w={299}>
          <ModalHeader justifyContent="flex-end">
            <ModalCloseButton backgroundColor="#322F40" borderRadius={"$full"}>
              <Icon as={CloseIcon} color="white" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody justifyContent="center">
            <Center gap={24}>
              <Icon as={waterIcon} />
              <VStack>
                <Text fontWeight="$semibold" color="#7FC4ED" fontSize={24}>
                  Lembrete para
                </Text>
                <Text
                  fontWeight="$semibold"
                  color="#7FC4ED"
                  alignSelf="center"
                  fontSize={24}
                >
                  beber água!
                </Text>
              </VStack>
            </Center>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
