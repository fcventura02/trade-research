import styled from 'styled-components';

export const Restaurante = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	margin-top: 5px;
	padding: 16px;
	background-color: #fff;
	border-left: 5px solid transparent;
	transition: 0.3s;
	&:hover{
		background-color: ${(props)=> props.theme.colors.background};
		border-left	: 5px solid ${(props)=> props.theme.colors.primary} ;
	}
`

export const RestauranteInfo = styled.div`
	display: flex;
	flex-direction: column;
`
export const Title = styled.span`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${props => props.theme.colors.text};
	font-weight: bold;
	font-size: 1.4rem;
	line-height: 29px;
	margin-bottom: 10px;
`

export const Address = styled.span`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${props => props.theme.colors.text};
	font-weight: bold;
	font-size: 1rem;
	line-height: 29px;
	margin-bottom: 10px;
`

export const  RestaurantePhoto = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 5px;
	object-fit: cover;
`