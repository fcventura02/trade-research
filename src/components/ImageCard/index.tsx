import styled from "styled-components";

interface IPropos {
	photo: string,
	title?: string,
}

const Card = styled.div`
	display: flex;
	justify-content: center;
	width: 90px;
	height: 90px;
	border-radius: 6px;
	background-image: url(${(props: IPropos) => props.photo});
	background-position: center;
	background-repeat: no-repeat;
`

const Title = styled.p`
	font-family: ${(props) => props.theme.fonts.regular};
	max-height: 45px;
	color: #fff;
	text-shadow: 1px 1px #0000004e;
	font-size: 1rem;
	padding: 5px;
	display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
const ImageCard = (props: IPropos) => <Card photo={props.photo}>
	<Title>{props.title}</Title>
</Card>

export default ImageCard;