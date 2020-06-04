import styled from "styled-components"

import { H3, P } from "../globals"

export const Island = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin: auto;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
`

export const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
`

export const Title = styled(H3)`
  color: red;
  margin-bottom: 1rem;
`

export const Message = styled(P)`
  margin-bottom: 0.5rem;
`
