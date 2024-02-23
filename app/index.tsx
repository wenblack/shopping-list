import React, { useEffect, useState } from "react";
import {
  Center,
  Input,
  InputField,
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
import ArrowRight from "@/assets/Icons/ChevronLeft";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  const [total, setTotal] = useState(3);
  const [amount, setAmount] = useState(100);
  const [percentage, setPercentage] = useState(100);

  const ref = React.useRef(null);
  function modalOpen() {
    setTimeout(() => {
      setShowModal(true);
    }, 1);
  }

  return (
    <Center bgColor="#1F2128" height={"$full"}>
      <CardWater percentage={percentage} amount={total / 1000} />
      <HStack
        w={"60%"}
        maxWidth={299}
        marginTop={27}
        justifyContent="space-between"
      >
        <Text color="#7FC4ED" fontSize={16} fontWeight="$medium">
          Meta diária
        </Text>
        <Text
          color="#4E4964"
          marginBottom={9}
          fontSize={12}
          fontWeight="$medium"
        >
          {total / 1000}L
        </Text>
      </HStack>
      <Slider
        defaultValue={1000}
        step={500}
        minValue={1000}
        maxValue={5000}
        size="sm"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
        w={"60%"}
        maxWidth={299}
        mb={10}
        onChange={(value) => {
          setTotal(value);
          console.log(total);
        }}
      >
        <SliderTrack backgroundColor="#322F40">
          <SliderFilledTrack backgroundColor="#7FC4ED" />
        </SliderTrack>
        <SliderThumb bgColor="#7FC4ED" />
      </Slider>
      <HStack
        w={"60%"}
        maxWidth={299}
        marginTop={27}
        justifyContent="space-between"
      >
        <Text color="#7FC4ED" fontSize={16} fontWeight="$medium">
          Quantidade por timer
        </Text>
        <Text
          color="#4E4964"
          marginBottom={9}
          fontSize={12}
          fontWeight="$medium"
        >
          {amount}ml
        </Text>
      </HStack>
      <Slider
        defaultValue={100}
        minValue={100}
        maxValue={500}
        step={50}
        size="sm"
        orientation="horizontal"
        isDisabled={false}
        isReversed={false}
        w={"60%"}
        maxWidth={299}
        mb={10}
        onChange={(value) => {
          setAmount(value);
          console.log(amount);
        }}
      >
        <SliderTrack backgroundColor="#322F40">
          <SliderFilledTrack backgroundColor="#7FC4ED" />
        </SliderTrack>
        <SliderThumb bgColor="#7FC4ED" />
      </Slider>
      <HStack alignItems="center" marginTop={27} gap={12}>
        <Input
          borderColor="#7FC4ED"
          width={64}
          height={64}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            defaultValue="00"
            keyboardType="number-pad"
            color="white"
            fontSize={32}
            w={"$full"}
            type="text"
            textAlign="center"
          />
        </Input>
        <Text fontSize={20} color="white">
          :
        </Text>
        <Input
          borderColor="#7FC4ED"
          width={64}
          height={64}
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            defaultValue="00"
            keyboardType="number-pad"
            color="white"
            fontSize={32}
            w={"$full"}
            type="text"
            textAlign="center"
          />
        </Input>
      </HStack>
      <Button
        w={"60%"}
        height={56}
        maxWidth={299}
        bgColor="#7FC4ED"
        onPress={() => modalOpen()}
        marginTop={27}
        gap={8}
        padding={4}
        ref={ref}
      >
        <ButtonText fontSize={16} alignSelf="center" color="black">
          Começar
        </ButtonText>
        <Icon as={ArrowRight} alignSelf="center" />
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
