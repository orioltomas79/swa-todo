import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { cardStyles } from "./styles";

interface BasicCardProps{
    header: any;
    content: any;
}

const BasicCard = ({ header, content } : BasicCardProps) => {
  return (
    <Card sx={cardStyles}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default BasicCard;
