import ReactDom from "react-dom";

interface IProps{
	children: React.ReactNode
}

const PortalModal = ({children}:IProps)=>{
	const portal = document.getElementById('modal-root')
	if(portal)
		return ReactDom.createPortal(children, portal);
	return null;
}

export default PortalModal;