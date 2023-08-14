import { fireEvent, render, screen } from '@testing-library/react';
import Login from './login';
import { waitFor } from '@testing-library/react';

beforeEach(() => {
    render(<Login />);
  });


  jest.mock("axios", () => ({
    __esModule: true,
  
    default: {
      get: () => ({
        data: { id: 1, name: "John" },
      }),
    },
  }));
  


test("username input should be rendered", ()=>{
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl).toBeInTheDocument()
})

test("password input should be rendered", ()=>{
    const passwordInputEl = screen.getByPlaceholderText(/username/i);
    expect(passwordInputEl).toBeInTheDocument()
})

test("username input should change", ()=>{
    const userNameInputEl = screen.getByPlaceholderText(/username/i);
    const testValue = "test"
    fireEvent.change(userNameInputEl,{target:{value:testValue}});
    expect(userNameInputEl.value).toBe(testValue)
})


test("password input should change", ()=>{
    
    const userPasswordEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test"
    fireEvent.change(userPasswordEl,{target:{value:testValue}});
    expect(userPasswordEl.value).toBe(testValue)
    expect(userPasswordEl.value).toBe(testValue);

})

test("button should be disabled", ()=>{

    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toBeDisabled()
})


test("loading should not be rendered", ()=>{

    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toHaveTextContent(/pleasewait/i)
})

test("button should not be disabled when inputs exist", ()=>{
    const buttonEl = screen.getByRole("button");
    const userNameInputEl = screen.getByPlaceholderText(/username/i);
    const userPasswordEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(userNameInputEl, {traget:{value:testValue}});
    fireEvent.change(userPasswordEl, {traget:{value:testValue}});

    expect(buttonEl).not.toBeDisabled()
})


test("loading should not  be rendered when click", ()=>{

    const buttonEl = screen.getByRole("button");
    const userNameInputEl = screen.getByPlaceholderText(/username/i);
    const userPasswordEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(userNameInputEl, {traget:{value:testValue}});
    fireEvent.change(userPasswordEl, {traget:{value:testValue}});
    fireEvent.click(buttonEl)
    expect(buttonEl).toHaveTextContent(/pleasewait/i)


})

test("loading should not  be rendered after fetching", async()=>{

    const buttonEl = screen.getByRole("button");
    const userNameInputEl = screen.getByPlaceholderText(/username/i);
    const userPasswordEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(userNameInputEl, {traget:{value:testValue}});
    fireEvent.change(userPasswordEl, {traget:{value:testValue}});
    fireEvent.click(buttonEl)
    await waitFor(expect(buttonEl).not.toHaveTextContent(/pleasewait/i))


})



test("user  should not  be rendered after fetching", async()=>{

    const buttonEl = screen.getByRole("button");
    const userNameInputEl = screen.getByPlaceholderText(/username/i);
    const userPasswordEl = screen.getByPlaceholderText(/password/i);
    const testValue = "test";

    fireEvent.change(userNameInputEl, {traget:{value:testValue}});
    fireEvent.change(userPasswordEl, {traget:{value:testValue}});
    fireEvent.click(buttonEl)
    await waitFor(expect(buttonEl).not.toHaveTextContent(/pleasewait/i))


})


// test("error message should not be visible", ()=>{

//     const errorEl = screen.getByTestId("error");
//     expect(errorEl).not.toBeVisible()
// })
