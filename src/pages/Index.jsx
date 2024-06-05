import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton, Heading, Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => (i === index ? { ...task, completed: !task.completed } : task));
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} w="100%">
        <Heading as="h1" size="2xl" color="brand.900">
          Household Todo List
        </Heading>
        <HStack w="100%" spacing={4}>
          <Input placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)} />
          <Button onClick={addTask} colorScheme="brand">
            Add Task
          </Button>
        </HStack>
        <VStack spacing={4} w="100%">
          {tasks.map((task, index) => (
            <Flex key={index} w="100%" justifyContent="space-between" alignItems="center" as={motion.div} whileHover={{ scale: 1.05 }}>
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(index)}>
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </Checkbox>
              <IconButton aria-label="Delete task" icon={<FaTrash />} onClick={() => deleteTask(index)} />
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
