import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export interface StylesPointProps {
  color: string
}

export const Wrapper = styled.div`
  margin-top: 1rem;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const Title = styled.h5`
  font-size: 16px;
  color: ${colors.gray900};
`
export const Points = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 0.3rem 0;
`
export const Point = styled.span`
  height: 0.35rem;
  width: calc(20% - 0.3rem);
  margin: 0 0 0 0.3rem;
  border-radius: 0.5rem;
  background-color: ${(props: StylesPointProps) =>
    colors[props.color as keyof typeof colors]};
`
export const Atributes = styled.ul`
  margin-top: 0.5rem;
`
export const Atribute = styled.li`
  font-size: 14px;
  margin-top: 0.3rem;
  color: ${(props: StylesPointProps) =>
    colors[props.color as keyof typeof colors]};
`
