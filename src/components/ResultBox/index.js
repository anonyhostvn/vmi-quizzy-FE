import React from "react";
import {ResultBoxWrapper} from "./resultBox.style";
import {Button, Card, Col, Row, Space, Statistic} from "antd";
import {RedoOutlined, SendOutlined} from "@ant-design/icons";
import {Link} from "react-scroll";

const ResultBox = (
    {
        result: {total_score, max_score, is_passed, data},
        endTime, handleSubmitTest, requestGetTest, hasTestResult, listAnswer
    }
) => {

    const responsiveCol = {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12
    }

    const responsiveColListQues = {
        xs: 24,
        sm: 24,
        md: 6,
        lg: 6,
        xl: 4
    }

    return (
        <ResultBoxWrapper>
            <Row>

                <Col {...responsiveCol}>
                    <Card>
                        {
                            hasTestResult ?
                                <Statistic title={'Số câu đúng'} value={total_score} suffix={`/${max_score}`}/> :
                                <Statistic.Countdown title={'Thời còn lại'} value={endTime * 1000}/>
                        }
                        <Space>
                            <Button onClick={handleSubmitTest} type={'primary'} icon={<SendOutlined/>}
                                    disabled={hasTestResult}> Nộp
                                bài </Button>
                        </Space>
                    </Card>
                </Col>

                <Col {...responsiveCol}>
                    <Card>
                        <Statistic title={'Kết quả'}
                                   value={is_passed ? 'Qua bài thi' : is_passed === false ? 'Trượt bài thi' : 'Đang làm bài thi'}/>
                        <Space>
                            <Button onClick={requestGetTest} danger={true} icon={<RedoOutlined/>}
                                    disabled={!hasTestResult}> Làm đề khác </Button>
                        </Space>
                    </Card>
                </Col>

                <Col span={24}>

                </Col>

                {
                    hasTestResult ? data.map((singleResult, index) => {
                        const ansClass = singleResult.is_correct ? 'ant-card-body-custom-right-ans' : 'ant-card-body-custom-wrong-ans';

                        return (
                            <Col key={index} {...responsiveColListQues}>
                                <Link to={`question-${index}`}
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}
                                >
                                    <Card className={`list-ques ${ansClass}`}>
                                        <Statistic title={'Câu'} value={index + 1}/>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    }) : listAnswer.map((singleAnswer, index) => {
                        const cardStyle = singleAnswer.choices.length > 0 ? 'ant-card-body-custom-selected' : null;
                        return (
                            <Col key={index} {...responsiveColListQues}>
                                <Link to={`question-${index}`}
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}
                                >
                                    <Card className={`list-ques ${cardStyle}`}>
                                        <Statistic title={'Câu'} value={index + 1}/>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })
                }
            </Row>
        </ResultBoxWrapper>
    );
}

export default ResultBox;