import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`

export const Container = styled.aside`
	background-color: ${(props) => props.theme.colors.background};
	width: 360px;
	height: 100vh;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`;

export const Search = styled.section`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	justify-content: center;
	box-sizing: border-box;
	padding: 16px;
`;

export const Logo = styled.img`
	width: 180px;
	margin-bottom: 15px;
`
export const CarouselTitle = styled.h1`
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-size: 1.5rem;
font-weight: bold;
line-height: 2.9rem;
`
export const Carousel = styled(Slider)`
	.slick-slide{
		margin-right: 16px;
	}
`
export const Map = styled.div`
	background-color: red;
	display: flex;
	flex: 1;
`