import React from 'react';
import HomePage from "../home.page";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { BrowserRouter } from "react-router-dom";
import initTest from "../../../utils/testUtils";
import { container } from "../../../utils/testUtils";
import {homePageConfig} from "../../../utils/config";

initTest();

test('Renders Home page', () => {
    act(() => {
        ReactDOM.render(
            <BrowserRouter>
                <HomePage props={homePageConfig}/>,
            </BrowserRouter>,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
});
