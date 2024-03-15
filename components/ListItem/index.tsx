import {
  HStack,
  VStack,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckIcon,
  CheckboxLabel,
  Text,
  Icon,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { CarrotIcon } from "@/assets/Icons/CarrotIcon";
import { MeatIcon } from "@/assets/Icons/MeatIcon";
import { PieIcon } from "@/assets/Icons/PieIcon";
import { MilkIcon } from "@/assets/Icons/MilkIcon";
import { OptionsIcon } from "@/assets/Icons/OptionsIcon";
import { AppleIcon } from "@/assets/Icons/AppleIcon";

export interface ItemProps {
  title: string;
  amount: string;
  type: "Fruits" | "Bakery" | "Vegetables" | "Drinks" | "Meat";
}

export function ListItem({ amount, title, type }: ItemProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleToggleComplete() {
    if (isCompleted === false) {
      setIsCompleted(true);
      console.log(isCompleted);
    } else {
      setIsCompleted(false);
      console.log(isCompleted);
    }
  }

  if (type === "Fruits") {
    return (
      <HStack
        height={68}
        width={"80%"}
        alignItems="center"
        borderWidth={2}
        borderColor="#252529"
        justifyContent="space-between"
        bgColor={isCompleted ? "#111112" : "#17171A"}
        padding={16}
        borderRadius={5}
        onTouchEnd={handleToggleComplete}
      >
        <Checkbox size="md" value={""} isChecked={isCompleted}>
          <CheckboxIndicator
            borderColor={isCompleted ? "#2F723D" : "#A881E6"}
            mr="$2"
          >
            <CheckboxIcon as={CheckIcon} bgColor="#2F723D" />
          </CheckboxIndicator>
          <CheckboxLabel marginLeft={16}>
            <VStack>
              <Text
                strikeThrough={isCompleted}
                fontWeight="$bold"
                fontSize={14}
                color={isCompleted ? "#AFABB6" : "#FBF9FE"}
              >
                {title}
              </Text>
              <Text color="#AFABB6" fontSize={12}>
                {amount}
              </Text>
            </VStack>
          </CheckboxLabel>
        </Checkbox>

        <HStack gap={12} alignItems="center">
          <HStack
            height={32}
            padding={8}
            borderRadius={"$full"}
            bgColor="#261A17"
            alignItems="center"
            justifyContent="center"
            alignSelf="center"
          >
            <Icon as={AppleIcon}></Icon>
          </HStack>
          <Icon as={OptionsIcon}></Icon>
        </HStack>
      </HStack>
    );
  }
  if (type === "Bakery") {
    return (
      <HStack
        borderWidth={2}
        borderColor="#252529"
        height={68}
        width={"80%"}
        alignItems="center"
        justifyContent="space-between"
        bgColor={isCompleted ? "#111112" : "#17171A"}
        padding={16}
        borderRadius={5}
        onTouchEnd={handleToggleComplete}
      >
        <Checkbox size="md" value={""} isChecked={isCompleted}>
          <CheckboxIndicator
            borderColor={isCompleted ? "#2F723D" : "#A881E6"}
            mr="$2"
          >
            <CheckboxIcon as={CheckIcon} bgColor="#2F723D" />
          </CheckboxIndicator>
          <CheckboxLabel marginLeft={16}>
            <VStack>
              <Text
                strikeThrough={isCompleted}
                fontWeight="$bold"
                fontSize={14}
                color={isCompleted ? "#AFABB6" : "#FBF9FE"}
              >
                {title}
              </Text>
              <Text color="#AFABB6" fontSize={12}>
                {amount}
              </Text>
            </VStack>
          </CheckboxLabel>
        </Checkbox>

        <HStack gap={12} alignItems="center">
          <HStack
            height={32}
            padding={8}
            borderRadius={"$full"}
            bgColor="#211E12"
            alignItems="center"
            justifyContent="center"
            alignSelf="center"
          >
            <Icon as={PieIcon}></Icon>
          </HStack>
          <Icon as={OptionsIcon}></Icon>
        </HStack>
      </HStack>
    );
  }
  if (type === "Drinks") {
    return (
      <HStack
        borderWidth={2}
        borderColor="#252529"
        height={68}
        width={"80%"}
        alignItems="center"
        justifyContent="space-between"
        bgColor={isCompleted ? "#111112" : "#17171A"}
        padding={16}
        borderRadius={5}
        onTouchEnd={handleToggleComplete}
      >
        <Checkbox size="md" value={""} isChecked={isCompleted}>
          <CheckboxIndicator
            borderColor={isCompleted ? "#2F723D" : "#A881E6"}
            mr="$2"
          >
            <CheckboxIcon as={CheckIcon} bgColor="#2F723D" />
          </CheckboxIndicator>
          <CheckboxLabel marginLeft={16}>
            <VStack>
              <Text
                strikeThrough={isCompleted}
                fontWeight="$bold"
                fontSize={14}
                color={isCompleted ? "#AFABB6" : "#FBF9FE"}
              >
                {title}
              </Text>
              <Text color="#AFABB6" fontSize={12}>
                {amount}
              </Text>
            </VStack>
          </CheckboxLabel>
        </Checkbox>

        <HStack gap={12} alignItems="center">
          <HStack
            height={32}
            padding={8}
            borderRadius={"$full"}
            bgColor="#1A1D23"
            alignItems="center"
            justifyContent="center"
            alignSelf="center"
          >
            <Icon as={MilkIcon}></Icon>
          </HStack>
          <Icon as={OptionsIcon}></Icon>
        </HStack>
      </HStack>
    );
  }
  if (type === "Vegetables") {
    return (
      <HStack
        borderWidth={2}
        borderColor="#252529"
        height={68}
        width={"80%"}
        alignItems="center"
        justifyContent="space-between"
        bgColor={isCompleted ? "#111112" : "#17171A"}
        padding={16}
        borderRadius={5}
        onTouchEnd={handleToggleComplete}
      >
        <Checkbox size="md" value={""} isChecked={isCompleted}>
          <CheckboxIndicator
            borderColor={isCompleted ? "#2F723D" : "#A881E6"}
            mr="$2"
          >
            <CheckboxIcon as={CheckIcon} bgColor="#2F723D" />
          </CheckboxIndicator>
          <CheckboxLabel marginLeft={16}>
            <VStack>
              <Text
                strikeThrough={isCompleted}
                fontWeight="$bold"
                fontSize={14}
                color={isCompleted ? "#AFABB6" : "#FBF9FE"}
              >
                {title}
              </Text>
              <Text color="#AFABB6" fontSize={12}>
                {amount}
              </Text>
            </VStack>
          </CheckboxLabel>
        </Checkbox>

        <HStack gap={12} alignItems="center">
          <HStack
            height={32}
            padding={8}
            borderRadius={"$full"}
            bgColor="#1C2015"
            alignItems="center"
            justifyContent="center"
            alignSelf="center"
          >
            <Icon as={CarrotIcon}></Icon>
          </HStack>
          <Icon as={OptionsIcon}></Icon>
        </HStack>
      </HStack>
    );
  }
  return (
    <HStack
      borderWidth={2}
      borderColor="#252529"
      height={68}
      width={"80%"}
      alignItems="center"
      justifyContent="space-between"
      bgColor={isCompleted ? "#111112" : "#17171A"}
      padding={16}
      borderRadius={5}
      onTouchEnd={handleToggleComplete}
    >
      <Checkbox size="md" value={""} isChecked={isCompleted}>
        <CheckboxIndicator
          borderColor={isCompleted ? "#2F723D" : "#A881E6"}
          mr="$2"
        >
          <CheckboxIcon as={CheckIcon} bgColor="#2F723D" />
        </CheckboxIndicator>
        <CheckboxLabel marginLeft={16}>
          <VStack>
            <Text
              strikeThrough={isCompleted}
              fontWeight="$bold"
              fontSize={14}
              color={isCompleted ? "#AFABB6" : "#FBF9FE"}
            >
              {title}
            </Text>
            <Text color="#AFABB6" fontSize={12}>
              {amount}
            </Text>
          </VStack>
        </CheckboxLabel>
      </Checkbox>

      <HStack gap={12} alignItems="center">
        <HStack
          height={32}
          padding={8}
          borderRadius={"$full"}
          bgColor="#251622"
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
        >
          <Icon as={MeatIcon}></Icon>
        </HStack>
        <Icon as={OptionsIcon}></Icon>
      </HStack>
    </HStack>
  );
}
