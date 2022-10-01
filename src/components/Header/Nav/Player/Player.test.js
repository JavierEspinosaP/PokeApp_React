import React from "react";
import { shallow } from "enzyme";
import Player from "./Player";

describe("Player", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Player />);
    expect(wrapper).toMatchSnapshot();
  });
});
