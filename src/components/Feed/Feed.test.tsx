import { render } from "@testing-library/react";
import Feed from ".";

describe('Feed', () => {

  it('renders', () => {
    const { container } = render(<Feed />);

    expect(container).toMatchSnapshot();
  })
});
