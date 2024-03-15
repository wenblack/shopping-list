import { ListItem, ItemProps } from "@/components/ListItem";
import {
  VStack,
  Input,
  InputField,
  Center,
  ScrollView,
  HStack,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
  Button,
  Text,
  ButtonText,
  ButtonIcon,
  Icon,
} from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import { ChevronDownIcon } from "@/assets/Icons/ChevronDownIcon";
import { PlusIcon } from "@/assets/Icons/PlusIcon";

export default function ToDOList() {
  const instState = Array<ItemProps>;
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const [task, setTasks] = useState(0);
  const [completedTask, SetCompletedTask] = useState(0);
  const [result, setResult] = useState("error");

  useEffect(() => {
    setList([
      {
        amount: "2 unidades",
        title: "Maçã",
        type: "Fruits",
      },
      {
        amount: "4 unidades",
        title: "Pão Francês",
        type: "Bakery",
      },
      {
        amount: "1 unidades",
        title: "Brócolis",
        type: "Vegetables",
      },
      {
        amount: "2 Litros",
        title: "Leite",
        type: "Drinks",
      },
      {
        amount: "2 Kgs",
        title: "Peito de Frango",
        type: "Meat",
      },
    ]);
  }, []);

  const addItem = ({ amount, title, type }: ItemProps) => {
    if (title === "") {
      alert("Please fill the filds");
    } else if (list.length === 9) {
      setTimeout(() => {}, 2000);

      return alert('"You already have many tasks"');
    }

    setList((prevList) => {
      return [
        ...prevList,
        {
          title: title,
          amount: amount,
          type: type,
        },
      ];
    });
  };

  const handleDelete = (index: number) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  return (
    <VStack>
      <Center>
        <VStack width={"80%"}>
          <Text marginBottom={8} color="#AFABB6">
            Item
          </Text>
          <Input borderColor="gray" variant="outline" bgColor="#252529">
            <InputField placeholder="Enter Text here" color="white" />
          </Input>

          <HStack
            marginTop={12}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack width={"35%"}>
              <VStack width={"100%"}>
                <Text marginBottom={8} color="#AFABB6">
                  Quantidade
                </Text>
                <HStack>
                  <Input
                    variant="outline"
                    bgColor="#252529"
                    borderColor="gray"
                    borderRightWidth={0}
                    zIndex={0}
                    maxWidth={66}
                    size="sm"
                    width={"30%"}
                  >
                    <InputField placeholder="1" color="white" />
                  </Input>
                  <Select width={"70%"} zIndex={100} bgColor="#252529">
                    <SelectTrigger
                      borderColor="gray"
                      variant="outline"
                      size="sm"
                    >
                      <SelectInput placeholder="UN" />
                      <SelectIcon mr="$3">
                        <Icon as={ChevronDownIcon} />
                      </SelectIcon>
                    </SelectTrigger>
                    <SelectPortal>
                      <SelectBackdrop />
                      <SelectContent>
                        <SelectDragIndicatorWrapper>
                          <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <SelectItem label="UX Research" value="ux" />
                        <SelectItem label="Web Development" value="web" />
                        <SelectItem
                          label="Cross Platform Development Process"
                          value="Cross Platform Development Process"
                        />
                        <SelectItem
                          label="UI Designing"
                          value="ui"
                          isDisabled={true}
                        />
                        <SelectItem
                          label="Backend Development"
                          value="backend"
                        />
                      </SelectContent>
                    </SelectPortal>
                  </Select>
                </HStack>
              </VStack>
            </HStack>

            <VStack width={"39%"}>
              <Text marginBottom={8} color="#AFABB6">
                Categoria
              </Text>
              <Select width={"100%"} bgColor="#252529">
                <SelectTrigger borderColor="gray" variant="outline" size="sm">
                  <SelectInput placeholder="Selecione" />
                  <SelectIcon mr="$3">
                    <Icon as={ChevronDownIcon} />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="UX Research" value="ux" />
                    <SelectItem label="Web Development" value="web" />
                    <SelectItem
                      label="Cross Platform Development Process"
                      value="Cross Platform Development Process"
                    />
                    <SelectItem
                      label="UI Designing"
                      value="ui"
                      isDisabled={true}
                    />
                    <SelectItem label="Backend Development" value="backend" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </VStack>

            <Button
              size="xs"
              marginTop={18}
              width={45}
              height={45}
              action="primary"
              bg="#7450AC"
              isDisabled={false}
              isFocusVisible={false}
              borderRadius={"$full"}
            >
              <ButtonIcon as={PlusIcon} />
            </Button>
          </HStack>
        </VStack>
      </Center>

      <ScrollView w={"$full"} marginTop={40} paddingBottom={16}>
        <Center gap={8}>
          {list.map((item, itemI) => (
            <ListItem
              amount={item.amount}
              title={item.title}
              type={item.type}
              key={itemI}
            />
          ))}
        </Center>
      </ScrollView>
    </VStack>
  );
}
