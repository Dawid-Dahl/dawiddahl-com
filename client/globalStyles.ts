import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
        margin: 2em;
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
