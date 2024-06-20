import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const CarouselContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '300px',
});

const CarouselItem = styled(Box)({
    minWidth: '100%',
    transition: 'transform 0.5s ease-in-out',
});

const ArrowButton = styled(Box)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 2,
});

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = React.useState(-1);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === -1 ? React.Children.count(children) - 2 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === React.Children.count(children) -2  ? -1 : prevIndex + 1));
    };
        console.log(currentIndex)
    return (
        <CarouselContainer>
            <ArrowButton sx={{ left: '10px' }} onClick={prevSlide}>
                <ArrowBackIos />
            </ArrowButton>
            <ArrowButton sx={{ right: '10px' }} onClick={nextSlide}>
                <ArrowForwardIos />
            </ArrowButton>
            {React.Children.map(children, (child, index) => (
                <CarouselItem
                    sx={{
                        transform: `translateX(${-currentIndex * 100}%)`,
                    }}
                >
                    {child}
                </CarouselItem>
            ))}
        </CarouselContainer>
    );
};

export default Carousel;
