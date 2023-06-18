import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, Image, Box } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  cardImage: {
    backgroundSize: 'cover',
    height: '200px',
    backgroundPosition: 'center',
    borderRadius: '10px',
    marginTop:"10px"
  },
  title: {
    fontSize: '16px',
    fontWeight: 600,
  },
  cardTitileWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '93%',
  },
  cardDescription: {
    fontSize: '13px',
    color: 'muted',
    textTransform: 'capitalize',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
  rate: number;
}

function Card({ image, title, category, rate }: CardProps) {
  const { classes } = useStyles();

  return (
    <Carousel.Slide>
      <Box>
        <Box>
          <img width={'100%'} src={image} className={classes.cardImage} />
        </Box>
        <Box pl={'sm'} className={classes.cardTitileWrapper}>
          <Box className={classes.title}>{category}</Box>
          <Box>{rate}</Box>
        </Box>
        <Box pl={'sm'}>
          <Text className={classes.cardDescription}>{title}</Text>
        </Box>
      </Box>
    </Carousel.Slide>
  );
}
export default Card;
