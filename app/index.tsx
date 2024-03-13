import { ListItem } from "@/components/ListItem";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Icon,
  Checkbox,
  Text,
  KeyboardAvoidingView,
  Center,
  Divider,
} from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
interface TaskProps {
  title: string;
  isCompleted: boolean;
}

interface ListProps {
  listName: string;
  userName: string;
}

export default function ToDOList({ listName, userName }: ListProps) {
  const instState = Array<TaskProps>;
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const [task, setTasks] = useState(0);
  const [completedTask, SetCompletedTask] = useState(0);
  const [result, setReulst] = useState("error");

  useEffect(() => {
    setList([
      {
        isCompleted: false,
        title: "test",
      },
      {
        isCompleted: false,
        title: "test",
      },
    ]);
    addItem("TEste 3");
    handleDelete(0);
  }, []);

  function addTask() {
    let totalPlus = task + 1;
    setTasks(totalPlus);
  }

  function addCompletedTask() {
    if (task === completedTask) {
      return;
    } else {
      let totalPlus = completedTask + 1;
      SetCompletedTask(totalPlus);
    }
  }

  function removeTask() {
    if (task === completedTask) {
      let totalMinus = task - 1;
      setTasks(totalMinus);
      console.log(task);
      removeCompletedTask();
    } else {
      let totalMinus = task - 1;
      setTasks(totalMinus);
      console.log(task);
    }
  }

  function removeCompletedTask() {
    let totalMinus = completedTask - 1;
    SetCompletedTask(totalMinus);
  }

  const addItem = (title: string) => {
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
          isCompleted: false,
        },
      ];
    });
    addTask();
  };

  const handleDelete = (index: number) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
    removeTask();
  };

  const handleStatusChange = (index: number) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      if (newList[index].isCompleted) {
        addCompletedTask();
      } else if (!newList[index].isCompleted) {
        removeCompletedTask();
      }

      return newList;
    });
  };

  return (
    <KeyboardAvoidingView
      h={"100%"}
      w={"100%"}
      display="flex"
      flex={1}
      alignItems={"center"}
    >
      <HStack
        w={"100%"}
        alignItems="center"
        flexDirection={"row"}
        justifyContent={"center"}
        display="flex"
        top={0}
        p={4}
      >
        <Center
          width={"100%"}
          flexDirection="row"
          justifyContent={"space-between"}
        >
          <HStack>
            <Text fontWeight={"bold"} fontFamily="Inter_800ExtraBold">
              TO-DO
            </Text>
          </HStack>
        </Center>
      </HStack>

      <VStack display="flex">
        <Center>
          <Box>
            <Heading
              size="md"
              mt={4}
              textTransform={"uppercase"}
              fontWeight="800"
              fontFamily={"Inter_800ExtraBold"}
              color="green.800"
            >
              {listName}
            </Heading>

            <VStack alignItems="center">
              {list.map((item, itemI) => (
                <HStack
                  w="100%"
                  justifyContent="space-between"
                  alignItems="center"
                  key={item.title + itemI.toString()}
                  borderColor={item.isCompleted ? "green.500" : "red.500"}
                  py={2}
                  marginBottom={1}
                >
                  <Checkbox
                    isChecked={item.isCompleted}
                    borderColor={item.isCompleted ? "green.500" : "red.500"}
                    onChange={() => handleStatusChange(itemI)}
                    value={item.title}
                    ml={2}
                  ></Checkbox>
                  <Text
                    width="100%"
                    flexShrink={1}
                    textAlign="left"
                    textTransform={"lowercase"}
                    fontWeight={"700"}
                    strikeThrough={item.isCompleted}
                    onPress={() => handleStatusChange(itemI)}
                  >
                    {item.title}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </Center>
      </VStack>

      <VStack bottom={0} zIndex={1} bg={"warmGray.50"}>
        <Divider></Divider>
      </VStack>
      <ListItem amount="2 unidades" title="Maçã" type="Fruits" />
      <ListItem amount="4 unidades" title="Pão Francês" type="Bakery" />
      <ListItem amount="1 unidades" title="Brócolis" type="Vegetables" />
      <ListItem amount="2 Litros" title="Leite" type="Drinks" />
      <ListItem amount="2 kg" title="Peito de Frango" type="Meat" />
    </KeyboardAvoidingView>
  );
}
