import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

interface CardProps {
  title: string;
  description: string;
  date: string;
}
export default function CardImage(props: CardProps) {
  const { title, description, date } = props;

  return (
    <Card sx={{ maxWidth: 400, marginTop: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip label="Low" color="success" />
        <Chip label={date} color="default" />
      </CardActions>
    </Card>
  );
}
