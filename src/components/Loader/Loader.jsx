import HashLoader from "react-spinners/HashLoader";
import { theme } from "../../theme/theme";
import { Wrapper } from "./Loader.styled";

const Loader = () => {

    return (
        <Wrapper>
            <HashLoader color={theme.colors.blue} size={120}  />
        </Wrapper>
    );
};

export default Loader;