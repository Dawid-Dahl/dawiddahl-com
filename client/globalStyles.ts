import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		/* box-shadow: inset 0 0 5px grey; */
        margin: 2em;
		/* border-radius: 10px; */
	}

	::-webkit-scrollbar-thumb {
		background: var(--main-color-ultra-light);;
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: var(--main-color-super-light);
	}
`;

export default GlobalStyle;
