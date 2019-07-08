export default ({ markup, helmet }) => {
	return `<!DOCTYPE html>
			<html ${helmet.htmlAttributes.toString()}>
				<head>
					${helmet.title.toString()}
					${helmet.meta.toString()}
					${helmet.link.toString()}	
					<link href="pc/css/style.min.css" rel="stylesheet">				
				</head>
				<body ${helmet.bodyAttributes.toString()}>
					<div id="root">${markup}</div>
					<script src="/dist/client.js" async></script>
				</body>
			</html>`;
};
