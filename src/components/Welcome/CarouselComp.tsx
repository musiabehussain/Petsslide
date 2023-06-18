import { Carousel } from '@mantine/carousel';
import { Text,useMantineTheme } from '@mantine/core';
import catImage from '../images/img12.jpg';
import catImage2 from '../images/img13.jpg';
import catImage3 from '../images/img1.jpg';
import catImage4 from '../images/img.jpg';
import catImage5 from '../images/poodle.jpg';
import catImage6 from '../images/img15.jpg';
import catImage7 from '../images/img16.jpg';
import catImage8 from '../images/img17.jpg';
import { useMediaQuery } from '@mantine/hooks';
import Card from '../Card/card';

const CarouselComp =()=> {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const data = [
    {
      id: 1,
      image: catImage,
      category: 'chalet',
      rate: 4.99,
      title: 'canaperche 1 kanata tremblend',
    },
    {
      id: 2,
      image: catImage3,
      category: 'poodle',
      rate: 580,
      title: 'canaperche 1 kanata tremblend',
    },
    {
      id: 3,
      image: catImage2,
      category: 'chalet',
      rate: 6.97,
      title: 'canaperche 1 kanata tremblend',
    },
    {
      id: 4,
      image: catImage4,
      category: 'chalet',
      rate: 2.19,
      title: 'canaperche 1 kanata tremblend',
    },
    {
      id: 5,
      image: catImage5,
      category: 'chalet',
      rate: 1.9,
      title: 'canaperche 1 kanata tremblend',
    },
    {
      id: 6,
      image: catImage6,
      category: 'chalet',
      rate: 253,
      title: 'canaperche 1 kanata tremblend',
    },
    {
      id: 7,
      image: catImage7,
      category: 'chalet',
      rate: 709,
      title: 'canaperche 1 kanata tremblend',
    },
    {
      id: 8,
      image: catImage8,
      category: 'chalet',
      rate: 9.99,
      title: 'canaperche 1 kanata tremblend',
    },
  ];
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title} >
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{ width: '55%' }}>
        <Text style={{ fontSize: '23px', marginLeft: '12px' }}>kanata's listings</Text>
        <Carousel
 
          slideSize="33.3333%"
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 1 }]}
          slideGap="10px"
          loop={true}
          controlSize={14}
          slidesToScroll={mobile ? 1 : 1}
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 1,
                color:"#d7dbda"
            
                
              },
            },
          }}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
}
export default CarouselComp;
