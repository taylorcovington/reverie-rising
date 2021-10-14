import styled from 'styled-components'

export const NavWrapper = styled.nav`
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #212121;
  background-color: ${props => props.inputColor || "palevioletred"};;
  font-size: 12px;
  padding: 10px 0;

  .nav-active {
    color: red;
  }

  ul {
    display: flex;
    justify-content: center;
    li {
      display: block;
      margin: 0 10px 0 0;
  
      a {
        display: flex;
        padding: 0 0 0 10px;
        transition: all 0.2s ease;
        text-decoration: none;
  
  
      }
    }

  }
`;