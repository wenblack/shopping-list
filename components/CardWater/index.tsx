import { Card, Center, Icon, Text } from "@gluestack-ui/themed";
import CupICon from "@/assets/Icons/CupOfWater";

interface CardWaterProps {
  percentage: number;
  amount: number;
}
export function CardWater({ percentage, amount }: CardWaterProps) {
  return (
    <Card
      w={"60%"}
      maxWidth={299}
      padding={40}
      backgroundColor="#7fc4ed"
      justifyContent="center"
    >
      <Center height={"$full"} justifyContent="space-evenly">
        <Text color="#1F2128" fontSize={12} fontWeight="$bold">
          {percentage}%
        </Text>
        <Icon as={CupICon} />
        <Text color="#1F2128" fontSize={20} fontWeight="$bold">
          Beber água
        </Text>
        <Text color="#1F2128" fontSize={16}>
          Meta: {amount}L
        </Text>
      </Center>
    </Card>
  );
}
