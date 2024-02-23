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
      h={"40%"}
      maxHeight={350}
      maxWidth={299}
      gap={20}
      backgroundColor="#7fc4ed"
    >
      <Center h={"$full"} justifyContent="space-evenly">
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
