import React from 'react';
import { Menu, Space } from "antd";
import {Link} from "react-scroll";


const checkingQuestionIsDone = (ques) => {
    const {answer} = ques;
    if (answer) {
        return !(Array.isArray(answer) && answer.length === 0);
    }
    return false;
}

const StatusBar = ({listQuestion}) => {

    const doneText = {
        color: 'green',
        fontWeight: 'bold'
    }

    const normalText = {
        color: 'white'
    }

    return (
        <Menu
            mode="inline"
            theme={'dark'}
        >
            {
                listQuestion.map(
                    (singleQuestion, index) => (
                        <Menu.Item key={index}>
                            <Space>
                                <Link to={`question-${index}`}
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}
                                >
                                        <span style={checkingQuestionIsDone(singleQuestion) ? doneText : normalText}>  Câu {index + 1} </span>
                                </Link>
                            </Space>
                        </Menu.Item>
                    )
                )
            }

        </Menu>
    );
};

export default StatusBar;