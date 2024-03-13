import { ListItem, ItemProps } from "@/components/ListItem";
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
  ScrollView,
} from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";

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
    <ScrollView w={"$full"} paddingBottom={16}>
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
  );
}
