import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import Login from '../components/pages/LoginPage'
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'



describe.only('<Login />', () => {
  
  describe('Login Component', () => {

    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<Login />).exists(<form className='Login'></form>)).toBe(true)
    })

    it('should render correctly', () => {
      const output = shallow(
        <Login />
      )
      expect(shallowToJson(output)).toMatchSnapshot();
    })

    it('renders a username input', () => {
      expect(shallow(<Login />).find('#name').length).toEqual(0)
    })

    it('renders a password input', () => {
      expect(shallow(<Login />).find('#password').length).toEqual(0)
    })
  })
})

