import DarkModeButton from './DarkModeButton';

describe('Surprise button', () => {
  it('Changes title to "These people are awesome"', () => {
    const surpriseBtn = getByTestId('btn');
    const title = getByTestId('title')
    
    fireEvent.click(surpriseBtn);

    expect(title).toHaveTextContent(/These People are Awesome!/i)
  })
});