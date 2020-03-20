import styled from 'styled-components';


export const NavMenu = styled.div`
  background-color: lightblue;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2em;
  `
  
  export const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 0em 1em;
  `
  
  export const RowCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 1.5em;
  `
  
  export const Paragraph = styled.p`
  font-size: 1em;
  
  `
  
  export const QuakeCard = styled.div`
  border: solid 1px orange;
  border-radius: 4px;
  padding: 1em;
  `
  
  export const ShockCard = styled.div`
  border: solid 3px purple;
  border-radius: 4px;
  padding: 1em;
  `
  
  export const Button = styled.button`
  font-size: 1em;
  border: solid 1px darkred;
  padding: 0em .5em;
  border-radius: 3px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`