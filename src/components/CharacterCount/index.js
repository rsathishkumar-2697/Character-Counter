import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import ListItem from '../ListItem'

import {
  BgContainer,
  MainContainer,
  YellowBgContainer,
  HeadingContainer,
  HeadingTextBlue,
  EmptyImage,
  BlueBgContainer,
  HeadingYellow,
  InputContainer,
  Input,
  AddButton,
  InputListContainer,
} from './styledComponents'

class CharacterCount extends Component {
  state = {inputList: [], inputText: ''}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickAdd = () => {
    const {inputText} = this.state

    const name = inputText
    const count = inputText.length
    const id = uuid()

    this.setState(prevState => ({
      inputList: [...prevState.inputList, {id, name, count}],
      inputText: '',
    }))
  }

  render() {
    const {inputList, inputText} = this.state

    return (
      <BgContainer>
        <MainContainer>
          <YellowBgContainer>
            <HeadingContainer>
              <HeadingTextBlue>
                Count the characters like a <br /> Boss...
              </HeadingTextBlue>
            </HeadingContainer>
            <InputListContainer>
              {inputList.length === 0 ? (
                <EmptyImage
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              ) : (
                inputList.map(eachItem => (
                  <ListItem key={eachItem.id} listItemDetails={eachItem} />
                ))
              )}
            </InputListContainer>
          </YellowBgContainer>
          <BlueBgContainer>
            <HeadingYellow>Character Counter</HeadingYellow>
            <InputContainer>
              <Input
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                value={inputText}
              />
              <AddButton type="button" onClick={this.onClickAdd}>
                Add
              </AddButton>
            </InputContainer>
          </BlueBgContainer>
        </MainContainer>
      </BgContainer>
    )
  }
}

export default CharacterCount
