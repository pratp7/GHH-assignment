import { ButtonComponent } from "../Atoms";
import { HeaderContainer, ButtonContainer, HeaderSection } from "./styles";
const Header = ({ onPreview, onClick }) => {
  return (
    <HeaderContainer>
      <HeaderSection>
        <h2>Website Builder</h2>
      </HeaderSection>
      <ButtonContainer>
        <ButtonComponent onClick={onPreview} title="Preview" />
        <ButtonComponent onClick={onClick} title="Save" />
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
